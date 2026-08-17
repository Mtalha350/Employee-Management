import type { EmployeeFormValues } from '../types/employeeForm.types';

export const INITIAL_EMPLOYEE_FORM_VALUES: EmployeeFormValues = {
  name: '',
  role: '',
  email: '',
  phone: '',
  department: 'Engineering',
  status: 'Active',
  location: '',
  salary: '',
  joinedOn: new Date().toISOString().split('T')[0],
};

export const EMPLOYEE_DEPARTMENTS = [
  'Engineering',
  'Design',
  'Marketing',
  'Product',
  'Sales',
] as const;

export const EMPLOYEE_STATUSES = ['Active', 'On leave'] as const;
