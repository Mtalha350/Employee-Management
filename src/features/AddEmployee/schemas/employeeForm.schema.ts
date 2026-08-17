import { z } from 'zod';

export const employeeFormSchema = z.object({
  name: z.string().trim().min(2, 'Full name must be at least 2 characters'),

  role: z.string().trim().min(2, 'Job title is required'),

  email: z.string().trim().email('Enter a valid email address'),

  phone: z.string().trim().min(7, 'Enter a valid phone number'),

  department: z.string().min(1, 'Department is required'),

  status: z.enum(['Active', 'On leave']),

  location: z.string().trim().min(2, 'Location is required'),

  salary: z
    .string()
    .refine((value) => value !== '', 'Annual salary is required')
    .refine((value) => Number(value) > 0, 'Salary must be greater than 0'),

  joinedOn: z.string().min(1, 'Joined date is required'),
});

export type EmployeeFormValues = z.infer<typeof employeeFormSchema>;
