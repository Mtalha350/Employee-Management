import type { Employee } from '../types/employee.types';

const EMPLOYEES_STORAGE_KEY = 'employee-management:employees';

export function getEmployees(): Employee[] {
  try {
    const storedEmployees = localStorage.getItem(EMPLOYEES_STORAGE_KEY);

    if (!storedEmployees) {
      return [];
    }

    const parsedEmployees = JSON.parse(storedEmployees);

    if (!Array.isArray(parsedEmployees)) {
      console.warn('Invalid employees data in localStorage');

      return [];
    }

    return parsedEmployees as Employee[];
  } catch {
    return [];
  }
}

export function saveEmployees(employees: Employee[]) {
  localStorage.setItem(EMPLOYEES_STORAGE_KEY, JSON.stringify(employees));
}
