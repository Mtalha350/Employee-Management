import type { Employee } from '../types/employee.types';
import { employeeData } from '../data/employee.data';

const EMPLOYEE_STORAGE_KEY = 'employee-management:employees';

export function getEmployees(): Employee[] {
  const storedEmployees = localStorage.getItem(EMPLOYEE_STORAGE_KEY);

  if (!storedEmployees) {
    return employeeData;
  }

  try {
    return JSON.parse(storedEmployees) as Employee[];
  } catch {
    return employeeData;
  }
}

export function saveEmployees(employees: Employee[]): void {
  localStorage.setItem(EMPLOYEE_STORAGE_KEY, JSON.stringify(employees));
}

export function addEmployee(employee: Employee): void {
  const employees = getEmployees();

  saveEmployees([employee, ...employees]);
}

export function deleteEmployee(employeeId: string): void {
  const employees = getEmployees();

  const updatedEmployees = employees.filter(
    (employee) => employee.id !== employeeId,
  );

  saveEmployees(updatedEmployees);
}