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
        className='border-app-divider! py-8!'
      >
        <div className='flex flex-col items-center'>
          <SearchOff className='text-[42px]! text-app-secondary-text!' />

          <p className='mt-4 text-[18px] font-semibold text-app-primary-text'>
            No employees found
          </p>

          <p className='mt-2 text-[14px] text-app-secondary-text'>{message}</p>
        </div>
      </TableCell>
    </TableRow>
  );
}
