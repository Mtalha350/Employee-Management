import { ArrowBack, EditOutlined } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import type { Employee } from '../../Directory/types/employee.types';

interface EmployeeDetailHeaderProps {
  employee: Employee;
}

export default function EmployeeDetailHeader({
  employee,
}: EmployeeDetailHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleEdit = () => {
    navigate(`/employees/${employee.id}/edit`);
  };

  return (
    <div className='flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between'>
      <div className='flex items-start gap-3'>
        <IconButton
          onClick={handleBack}
          aria-label='Back to employee directory'
          className='mt-1 shrink-0 text-[#d9dbe8]!'
        >
          <ArrowBack />
        </IconButton>

        <div className='min-w-0'>
          <p className='text-sm font-medium text-[#9699af]'>
            Employee management
          </p>

          <h1 className='mt-1 truncate text-[28px] font-semibold leading-tight tracking-[-1px] text-[#f4f5fb] sm:text-[32px]'>
            {employee.name}
          </h1>

          <p className='mt-2 text-sm text-[#9699af] sm:text-base'>
            Employee details and information.
          </p>
        </div>
      </div>

      <Button
        variant='contained'
        startIcon={<EditOutlined />}
        onClick={handleEdit}
        className='h-10! w-full! shrink-0 rounded-[15px]! bg-linear-to-r! from-[#6961ff]! to-[#b278f4]! px-5! text-[14px]! font-semibold! normal-case! sm:w-auto!'
      >
        Edit employee
      </Button>
    </div>
  );
}
