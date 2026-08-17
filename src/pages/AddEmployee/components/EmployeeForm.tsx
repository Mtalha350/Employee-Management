import { Button, MenuItem, TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  addEmployee,
  updateEmployee,
} from '../../Directory/services/employeeStorage';
import type { Employee } from '../../Directory/types/employee.types';
import {
  EMPLOYEE_DEPARTMENTS,
  EMPLOYEE_STATUSES,
  INITIAL_EMPLOYEE_FORM_VALUES,
} from '../constants/employeeForm.constants';
import {
  employeeFormSchema,
  type EmployeeFormValues,
} from '../schemas/employeeForm.schema';

interface EmployeeFormProps {
  employee?: Employee;
}

const textFieldSlotProps = {
  input: {
    sx: {
      borderRadius: '12px',
    },
  },
};

const getDefaultValues = (employee?: Employee): EmployeeFormValues => {
  if (!employee) {
    return INITIAL_EMPLOYEE_FORM_VALUES;
  }

  return {
    name: employee.name,
    role: employee.role,
    email: employee.email,
    phone: employee.phone,
    department: employee.department,
    status: employee.status,
    location: employee.location,
    salary: String(employee.salary),
    joinedOn: employee.joinedOn,
  };
};

export default function EmployeeForm({ employee }: EmployeeFormProps) {
  const navigate = useNavigate();
  const isEditMode = Boolean(employee);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: getDefaultValues(employee),
    mode: 'onChange',
  });

  const handleFormSubmit = (formValues: EmployeeFormValues) => {
    const employeeData: Employee = {
      id: employee?.id ?? crypto.randomUUID(),
      name: formValues.name.trim(),
      role: formValues.role.trim(),
      email: formValues.email.trim(),
      phone: formValues.phone.trim(),
      department: formValues.department,
      status: formValues.status,
      location: formValues.location.trim(),
      salary: Number(formValues.salary),
      joinedOn: formValues.joinedOn,
    };

    if (isEditMode) {
      updateEmployee(employeeData);
      toast.success('Employee updated successfully');
    } else {
      addEmployee(employeeData);
      toast.success('Employee created successfully');
    }

    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className='rounded-[16px] border border-[#2b2f4b] bg-[#15192f] p-5 sm:rounded-[20px] sm:p-6 lg:p-10'
    >
      <div className='grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6'>
        <Controller
          name='name'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Full name'
              size='small'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              slotProps={textFieldSlotProps}
            />
          )}
        />

        <Controller
          name='role'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Job title'
              size='small'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              slotProps={textFieldSlotProps}
            />
          )}
        />

        <Controller
          name='email'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Email'
              type='email'
              size='small'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              slotProps={textFieldSlotProps}
            />
          )}
        />

        <Controller
          name='phone'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Phone'
              size='small'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              slotProps={textFieldSlotProps}
            />
          )}
        />

        <Controller
          name='department'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              select
              label='Department'
              size='small'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              slotProps={textFieldSlotProps}
            >
              {EMPLOYEE_DEPARTMENTS.map((department) => (
                <MenuItem key={department} value={department}>
                  {department}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name='status'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              select
              label='Status'
              size='small'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              slotProps={textFieldSlotProps}
            >
              {EMPLOYEE_STATUSES.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Controller
          name='location'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Location'
              size='small'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              slotProps={textFieldSlotProps}
            />
          )}
        />

        <Controller
          name='salary'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Annual salary (USD)'
              type='number'
              size='small'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              slotProps={textFieldSlotProps}
            />
          )}
        />

        <Controller
          name='joinedOn'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Joined on'
              type='date'
              size='small'
              fullWidth
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
              slotProps={{
                ...textFieldSlotProps,
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          )}
        />
      </div>

      <div className='mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4'>
        <Button
          type='submit'
          variant='contained'
          disabled={!isValid}
          className='h-10! w-full! rounded-[12px]! bg-linear-to-r! from-[#6961ff]! to-[#b278f4]! px-6! py-1! text-[14px]! font-semibold! normal-case! sm:w-auto!'
        >
          {isEditMode ? 'Save changes' : 'Create employee'}
        </Button>

        <Button
          type='button'
          variant='outlined'
          onClick={() => navigate('/')}
          className='h-10! w-full! rounded-[12px]! border-[#2b2f4b]! px-6! py-1! text-[14px]! font-semibold! normal-case! sm:w-auto!'
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
