import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DirectoryHeader = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-start justify-between'>
      <div>
        <h1 className='text-[35px] font-semibold leading-tight tracking-[-1.5px] text-[#7568ff]'>
          Employee directory
        </h1>

        <p className='text-[16px] text-[#9699af]'>
          Manage your team roster — everything is stored locally in your
          browser.
        </p>
      </div>

      <Button
        variant='contained'
        startIcon={<Add />}
        onClick={() => navigate('/employees/add')}
        className='h-10! rounded-xl! bg-linear-to-r! from-[#6961ff]! to-[#b278f4]! px-4! text-[14px]! font-semibold! normal-case! text-white! shadow-lg! hover:opacity-90!'
      >
        Add employee
      </Button>
    </div>
  );
};

export default DirectoryHeader;
