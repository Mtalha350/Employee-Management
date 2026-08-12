import { Button, MenuItem, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { addEmployee } from '../../Directory/services/employeeStorage';
import {
  EMPLOYEE_DEPARTMENTS,
  EMPLOYEE_STATUSES,
  INITIAL_EMPLOYEE_FORM_VALUES,
} from '../constants/employeeForm.constants';
import {
  employeeFormSchema,
  type EmployeeFormValues,
} from '../schemas/employeeForm.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

export default function EmployeeForm() {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<EmployeeFormValues>({
    resolver: zodResolver(employeeFormSchema),
    defaultValues: INITIAL_EMPLOYEE_FORM_VALUES,
  });

  const onSubmit = (formValues: EmployeeFormValues) => {
    const employee = {
      id: crypto.randomUUID(),
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

    addEmployee(employee);

    toast.success('Employee created successfully');

    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='rounded-[28px] border border-[#2b2f4b] bg-[#15192f] p-10'
    >
      <div className='grid grid-cols-2 gap-6'>
        <Controller
          name='name'
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label='Full name'
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
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
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
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
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
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
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
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
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
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
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
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
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
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
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
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
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
          )}
        />
      </div>

      <div className='mt-8 flex gap-4'>
        <Button
          type='submit'
          variant='contained'
          className='!rounded-[15px] !bg-gradient-to-r !from-[#6961ff] !to-[#b278f4] !px-6 !py-3 !text-[16px] !font-semibold !normal-case'
        >
          Create employee
        </Button>

        <Button
          type='button'
          variant='outlined'
          onClick={() => navigate('/')}
          className='!rounded-[15px] !border-[#2b2f4b] !px-6 !py-3 !text-[16px] !font-semibold !normal-case'
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
