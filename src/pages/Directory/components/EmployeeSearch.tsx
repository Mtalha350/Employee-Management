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
    <div className='mt-6 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6'>
      <TextField
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder='Search by name, role, department...'
        fullWidth
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
          '& .MuiOutlinedInput-root': {
            height: 42,
            borderRadius: '12px',
            fontSize: '14px',
          },
          '@media (min-width: 640px)': {
            width: 475,
          },
        }}
      />

      <p className='shrink-0 text-[14px] text-[#9699af] sm:text-[16px]'>
        {resultCount} of {totalCount} employees
      </p>
    </div>
  );
}
