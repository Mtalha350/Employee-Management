import type { EmployeeStatus } from '../../Directory/types/employee.types';

export interface EmployeeFormValues {
  name: string;
  role: string;
  email: string;
  phone: string;
  department: string;
  status: EmployeeStatus;
  location: string;
  salary: string;
  joinedOn: string;
}
