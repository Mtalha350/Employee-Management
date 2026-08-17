import type { Employee } from '../types/employee.types';

export const employeeData: Employee[] = [
  {
    id: '1',
    name: 'Amara Okafor',
    role: 'Staff Frontend Engineer',
    email: 'amara@example.com',
    phone: '+1 415 555 0101',
    department: 'Engineering',
    status: 'Active',
    location: 'San Francisco, US',
    salary: 172000,
    joinedOn: '2026-01-15',
  },

  {
    id: '2',
    name: 'Tobias Lindqvist',
    role: 'Product Designer',
    email: 'tobias@example.com',
    phone: '+46 70 555 0102',
    department: 'Design',
    status: 'Active',
    location: 'Stockholm, SE',
    salary: 98000,
    joinedOn: '2026-02-10',
  },

  {
    id: '3',
    name: 'Priya Raghunathan',
    role: 'Engineering Manager',
    email: 'priya@example.com',
    phone: '+91 80 5555 0103',
    department: 'Engineering',
    status: 'Active',
    location: 'Bengaluru, IN',
    salary: 155000,
    joinedOn: '2025-11-20',
  },

  {
    id: '4',
    name: 'Marcus Bell',
    role: 'Growth Marketer',
    email: 'marcus@example.com',
    phone: '+44 20 5555 0104',
    department: 'Marketing',
    status: 'On leave',
    location: 'London, UK',
    salary: 82000,
    joinedOn: '2025-10-05',
  },
];
