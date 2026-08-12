import { useEffect, useMemo, useState } from 'react';

import DirectoryHeader from './components/DirectoryHeader';
import EmployeeStats from './components/EmployeeStats';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeTable from './components/EmployeeTable';

import { deleteEmployee, getEmployees } from './services/employeeStorage';
import type { Employee } from './types/employee.types';
import { toast } from 'react-toastify';
import DeleteEmployeeDialog from './components/DeleteEmployeeDialog';

export default function DirectoryPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState('');
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(
    null,
  );

  useEffect(() => {
    setEmployees(getEmployees());
  }, []);

  const filteredEmployees = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return employees;
    }

    return employees.filter((employee) => {
      return [
        employee.name,
        employee.role,
        employee.department,
        employee.location,
      ].some((value) => value.toLowerCase().includes(query));
    });
  }, [employees, search]);

  const departments = new Set(employees.map((employee) => employee.department))
    .size;

  const annualPayroll = employees.reduce(
    (total, employee) => total + employee.salary,
    0,
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

  return (
    <div className='min-h-screen px-10 py-10'>
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
      />

      <DeleteEmployeeDialog
        open={Boolean(employeeToDelete)}
        employeeName={employeeToDelete?.name}
        onClose={() => setEmployeeToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
