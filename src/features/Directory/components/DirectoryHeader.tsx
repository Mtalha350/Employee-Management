import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DirectoryHeader = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between'>
      <div>
        <h1 className='text-app-primary-text text-[28px] font-semibold leading-tight tracking-[-1px] sm:text-[32px] lg:text-[35px] lg:tracking-[-1.5px]'>
          Employee directory
        </h1>

        <p className='text-app-secondary-text mt-1 text-[14px] leading-6 sm:text-[16px]'>
          Manage your team roster — everything is stored locally in your
          browser.
        </p>
      </div>

      <Button
        variant='contained'
        startIcon={<Add />}
        onClick={() => navigate('/employees/add')}
        className='h-10! w-full! rounded-xl! bg-linear-to-r! from-[#6961ff]! to-[#b278f4]! px-4! text-[14px]! font-semibold! normal-case! text-white! shadow-lg! shadow-[#6961ff]/20! hover:opacity-90! sm:w-auto!'
      >
        Add employee
      </Button>
    </div>
  );
};

export default DirectoryHeader;
