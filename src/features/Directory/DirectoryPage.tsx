import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import DeleteEmployeeDialog from './components/DeleteEmployeeDialog';
import DirectoryHeader from './components/DirectoryHeader';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeStats from './components/EmployeeStats';
import EmployeeTable from './components/EmployeeTable';

import {
  deleteEmployee,
  setDepartmentFilter,
  setSearch,
  setStatusFilter,
} from '../../store/employees/employeeSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function DirectoryPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { employees, search, departmentFilter, statusFilter } = useAppSelector(
    (state) => state.employees,
  );

  const [employeeToDeleteId, setEmployeeToDeleteId] = useState<string | null>(
    null,
  );

  const employeeToDelete = useMemo(
    () =>
      employees.find((employee) => employee.id === employeeToDeleteId) ?? null,
    [employees, employeeToDeleteId],
  );

  const departments = useMemo(
    () => [...new Set(employees.map((employee) => employee.department))].sort(),
    [employees],
  );

  const filteredEmployees = useMemo(() => {
    const query = search.trim().toLowerCase();

    return employees.filter((employee) => {
      const matchesSearch =
        !query ||
        [
          employee.name,
          employee.role,
          employee.department,
          employee.location,
          employee.email,
        ].some((value) => value.toLowerCase().includes(query));

      const matchesDepartment =
        departmentFilter === 'All' || employee.department === departmentFilter;

      const matchesStatus =
        statusFilter === 'All' || employee.status === statusFilter;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [employees, search, departmentFilter, statusFilter]);

  const annualPayroll = useMemo(
    () => employees.reduce((total, employee) => total + employee.salary, 0),
    [employees],
  );

  const handleConfirmDelete = () => {
    if (!employeeToDeleteId) return;

    dispatch(deleteEmployee(employeeToDeleteId));
    setEmployeeToDeleteId(null);

    toast.success('Employee deleted successfully');
  };

  return (
    <main className='min-h-screen bg-app-background px-4 py-20 text-app-primary-text transition-colors duration-200 sm:px-6 md:px-8 md:py-10 lg:px-10'>
      <div className='mx-auto w-full max-w-[1600px]'>
        <DirectoryHeader />

        <EmployeeStats
          headcount={employees.length}
          departments={departments.length}
          annualPayroll={annualPayroll}
        />

        <EmployeeSearch
          search={search}
          department={departmentFilter}
          status={statusFilter}
          departments={departments}
          resultCount={filteredEmployees.length}
          totalCount={employees.length}
          onSearchChange={(value) => dispatch(setSearch(value))}
          onDepartmentChange={(value) => dispatch(setDepartmentFilter(value))}
          onStatusChange={(value) => dispatch(setStatusFilter(value))}
        />

        <EmployeeTable
          employees={filteredEmployees}
          onDelete={(employeeId) => setEmployeeToDeleteId(employeeId)}
          onEdit={(employeeId) => navigate(`/employees/${employeeId}/edit`)}
          onView={(employeeId) => navigate(`/employees/${employeeId}`)}
        />
      </div>

      <DeleteEmployeeDialog
        open={Boolean(employeeToDelete)}
        employeeName={employeeToDelete?.name}
        onClose={() => setEmployeeToDeleteId(null)}
        onConfirm={handleConfirmDelete}
      />
    </main>
  );
}
