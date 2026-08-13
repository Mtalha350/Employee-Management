import { SearchOff } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';

interface EmployeeTableEmptyStateProps {
  message?: string;
}

export default function EmployeeTableEmptyState({
  message = 'No employees match your search.',
}: EmployeeTableEmptyStateProps) {
  return (
    <TableRow>
      <TableCell
        colSpan={6}
        align='center'
        className='border-[#2b2f4b]! py-16!'
      >
        <div className='flex flex-col items-center'>
          <SearchOff
            sx={{
              fontSize: 42,
              color: 'text.secondary',
            }}
          />

          <p className='mt-4 text-[18px] font-semibold text-[#f4f5fb]'>
            No employees found
          </p>

          <p className='mt-2 text-[14px] text-[#9699af]'>{message}</p>
        </div>
      </TableCell>
    </TableRow>
  );
}
