import { SearchOutlined } from '@mui/icons-material';
import { MenuItem, TextField } from '@mui/material';

interface EmployeeSearchProps {
  search: string;
  department: string;
  status: string;
  departments: string[];
  resultCount: number;
  totalCount: number;
  onSearchChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onStatusChange: (value: string) => void;
}

const fieldStyles = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '12px',
  },
};

export default function EmployeeSearch({
  search,
  department,
  status,
  departments,
  resultCount,
  totalCount,
  onSearchChange,
  onDepartmentChange,
  onStatusChange,
}: EmployeeSearchProps) {
  return (
    <div className='mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
      <div className='flex w-full flex-col gap-3 sm:flex-row lg:max-w-212.5'>
        {/* Search */}
        <TextField
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder='Search by name, role, department...'
          size='small'
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <SearchOutlined className='mr-2 text-app-secondary-text' />
              ),
            },
          }}
          sx={fieldStyles}
          className='lg:max-w-100'
        />

        {/* Department */}
        <TextField
          select
          label='Department'
          value={department}
          onChange={(event) => onDepartmentChange(event.target.value)}
          size='small'
          fullWidth
          sx={fieldStyles}
          className='sm:max-w-47.5'
        >
          <MenuItem value='All'>All departments</MenuItem>

          {departments.map((departmentName) => (
            <MenuItem key={departmentName} value={departmentName}>
              {departmentName}
            </MenuItem>
          ))}
        </TextField>

        {/* Status */}
        <TextField
          select
          label='Status'
          value={status}
          onChange={(event) => onStatusChange(event.target.value)}
          size='small'
          fullWidth
          sx={fieldStyles}
          className='sm:max-w-40'
        >
          <MenuItem value='All'>All statuses</MenuItem>
          <MenuItem value='Active'>Active</MenuItem>
          <MenuItem value='On leave'>On leave</MenuItem>
        </TextField>
      </div>

      <p className='text-app-secondary-text shrink-0 text-sm'>
        {resultCount} of {totalCount} employees
      </p>
    </div>
  );
}
