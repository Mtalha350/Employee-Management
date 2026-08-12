export type EmployeeStatus = 'Active' | 'On leave';

export interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  department: string;
  status: EmployeeStatus;
  location: string;
  salary: number;
  joinedOn: string;
}
