import { Button, MenuItem, TextField } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

import {
  addEmployee,
  updateEmployee,
} from '../../../store/employees/employeeSlice';
import { useAppDispatch } from '../../../store/hooks';

interface EmployeeFormProps {
  employee?: Employee;
}

const textFieldSx = (theme: any) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
    color: theme.palette.text.primary,

    '& fieldset': {
      borderColor: theme.palette.divider,
    },

    '&:hover fieldset': {
      borderColor: theme.palette.text.secondary,
    },

    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: '1px',
    },
  },

  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },

  '& .MuiInputLabel-root.Mui-focused': {
    color: theme.palette.primary.main,
  },

  '& .MuiInputBase-input': {
    color: theme.palette.text.primary,
  },

  '& .MuiFormHelperText-root': {
    marginLeft: 0,
  },
});

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
  const dispatch = useAppDispatch();

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
      dispatch(updateEmployee(employeeData));
      toast.success('Employee updated successfully');
    } else {
      dispatch(addEmployee(employeeData));
      toast.success('Employee created successfully');
    }

    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className='rounded-[20px] border border-app-divider bg-app-paper p-5 sm:p-6 md:p-8 lg:p-10'
    >
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6'>
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
              sx={textFieldSx}
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
              sx={textFieldSx}
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
              sx={textFieldSx}
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
              sx={textFieldSx}
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
              sx={textFieldSx}
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
              sx={textFieldSx}
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
              sx={textFieldSx}
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
              sx={textFieldSx}
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
              sx={textFieldSx}
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

      <div className='mt-6 flex flex-col-reverse gap-3 sm:mt-8 sm:flex-row sm:gap-4'>
        <Button
          type='button'
          variant='outlined'
          onClick={() => navigate('/')}
          sx={{
            borderRadius: '15px',
            px: 3,
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'none',
            color: 'text.primary',
            borderColor: 'divider',
          }}
          className='h-10! w-full! sm:w-auto!'
        >
          Cancel
        </Button>

        <Button
          type='submit'
          variant='contained'
          disabled={!isValid}
          sx={{
            borderRadius: '12px',
            px: 3,
            fontSize: '14px',
            fontWeight: 600,
            textTransform: 'none',
          }}
          className='h-10! w-full! bg-linear-to-r! from-[#6961ff]! to-[#b278f4]! sm:w-auto!'
        >
          {isEditMode ? 'Save changes' : 'Create employee'}
        </Button>
      </div>
    </form>
  );
}
