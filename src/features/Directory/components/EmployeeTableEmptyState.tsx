import { PersonAddAlt1Outlined, SearchOff } from '@mui/icons-material';
import { TableCell, TableRow } from '@mui/material';

interface EmployeeTableEmptyStateProps {
  isEmptyDirectory: boolean;
}

export default function EmployeeTableEmptyState({
  isEmptyDirectory,
}: EmployeeTableEmptyStateProps) {
  const Icon = isEmptyDirectory ? PersonAddAlt1Outlined : SearchOff;

  return (
    <TableRow>
      <TableCell colSpan={6} align='center' className='p-0! border-0!'>
        <div className='flex min-h-130 w-full flex-col items-center justify-center px-4 py-12'>
          <div className='flex h-22 w-22 items-center justify-center rounded-full bg-app-background'>
            <Icon className='text-[42px]! text-app-secondary-text!' />
          </div>

          <h3 className='mt-5 text-center text-[20px] font-semibold text-app-primary-text'>
            {isEmptyDirectory ? 'No employees yet' : 'No employees found'}
          </h3>

          <p className='mt-2 max-w-md text-center text-[14px] leading-6 text-app-secondary-text sm:text-[15px]'>
            {isEmptyDirectory
              ? 'Your employee directory is empty. Add your first employee to get started.'
              : 'No employees match your current search or filters. Try changing your search or filters.'}
          </p>
        </div>
      </TableCell>
    </TableRow>
  );
}
