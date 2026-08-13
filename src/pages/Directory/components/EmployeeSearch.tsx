import { Search } from '@mui/icons-material';
import { TextField } from '@mui/material';

interface EmployeeSearchProps {
  value: string;
  onChange: (value: string) => void;
  resultCount: number;
  totalCount: number;
}

export default function EmployeeSearch({
  value,
  onChange,
  resultCount,
  totalCount,
}: EmployeeSearchProps) {
  return (
    <div className='mt-10 flex items-center justify-between gap-6'>
      <TextField
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder='Search by name, role, department...'
        slotProps={{
          input: {
            startAdornment: (
              <Search
                sx={{
                  mr: 1.5,
                  color: 'text.secondary',
                }}
              />
            ),
          },
        }}
        sx={{
          width: 475,
          '& .MuiOutlinedInput-root': {
            height: 42,
            borderRadius: '12px',
            fontSize: '14px',
          },
        }}
        className='w-118.75'
      />

      <p className='text-[16px] text-[#9699af]'>
        {resultCount} of {totalCount} employees
      </p>
    </div>
  );
}
