import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import DeleteEmployeeDialog from './components/DeleteEmployeeDialog';
import DirectoryHeader from './components/DirectoryHeader';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeStats from './components/EmployeeStats';
import EmployeeTable from './components/EmployeeTable';
import { deleteEmployee, getEmployees } from './services/employeeStorage';
import type { Employee } from './types/employee.types';

export default function DirectoryPage() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState('');
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(
    null,
  );

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const handleViewEmployee = (employeeId: string) => {
    navigate(`/employees/${employeeId}`);
  };

  const filteredEmployees = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return employees;
    }

    return employees.filter((employee) =>
      [
        employee.name,
        employee.role,
        employee.department,
        employee.location,
      ].some((value) => value.toLowerCase().includes(query)),
    );
  }, [employees, search]);

  const departments = useMemo(
    () => new Set(employees.map((employee) => employee.department)).size,
    [employees],
  );

  const annualPayroll = useMemo(
    () => employees.reduce((total, employee) => total + employee.salary, 0),
    [employees],
  );

  const handleDeleteEmployee = (employeeId: string) => {
    const employee = employees.find((item) => item.id === employeeId);

    if (!employee) {
      return;
    }

    setEmployeeToDelete(employee);
  };

  const handleConfirmDelete = () => {
    if (!employeeToDelete) {
      return;
    }

    deleteEmployee(employeeToDelete.id);

    setEmployees(getEmployees());
    setEmployeeToDelete(null);

    toast.success('Employee deleted successfully');
  };

  const handleCloseDeleteDialog = () => {
    setEmployeeToDelete(null);
  };

  const handleEditEmployee = (employeeId: string) => {
    navigate(`/employees/${employeeId}/edit`);
  };

  return (
    <main className='min-h-screen bg-[#0f1328] px-4 py-20 sm:px-6 md:px-8 md:py-10 lg:px-10'>
      <div className='mx-auto w-full max-w-[1600px]'>
        <DirectoryHeader />

        <EmployeeStats
          headcount={employees.length}
          departments={departments}
          annualPayroll={annualPayroll}
        />

        <EmployeeSearch
          value={search}
          onChange={setSearch}
          resultCount={filteredEmployees.length}
          totalCount={employees.length}
        />

        <EmployeeTable
          employees={filteredEmployees}
          onDelete={handleDeleteEmployee}
          onEdit={handleEditEmployee}
          onView={handleViewEmployee}
        />
      </div>

      <DeleteEmployeeDialog
        open={Boolean(employeeToDelete)}
        employeeName={employeeToDelete?.name}
        onClose={handleCloseDeleteDialog}
        onConfirm={handleConfirmDelete}
      />
    </main>
  );
}
