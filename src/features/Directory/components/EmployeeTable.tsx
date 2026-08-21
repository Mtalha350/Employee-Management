import {
  DeleteOutlineOutlined,
  EditOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import type { Employee } from '../types/employee.types';
import { getEmployeeInitials } from '../utils/employee.utils';
import EmployeeTableEmptyState from './EmployeeTableEmptyState';

interface EmployeeTableProps {
  employees: Employee[];
  totalEmployees: number;
  onDelete: (employeeId: string) => void;
  onEdit: (employeeId: string) => void;
  onView: (employeeId: string) => void;
}

const HEADER_HEIGHT = 56;
const ROW_HEIGHT = 76;

const tableHeaderClassName =
  'border-b-1! border-app-divider! px-4! text-[12px]! font-medium! uppercase! tracking-wide! sm:px-6!';

const tableCellClassName = 'px-4! text-[14px]! sm:px-6!';

const tableHeaderSx = {
  backgroundColor: 'background.paper',
  color: 'text.secondary',
};

const secondaryCellSx = {
  color: 'text.secondary',
};

const primaryCellSx = {
  color: 'text.primary',
};

export default function EmployeeTable({
  employees,
  totalEmployees,
  onDelete,
  onEdit,
  onView,
}: EmployeeTableProps) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      className='bg-app-paper! mt-6! h-147! w-full! overflow-auto! rounded-[20px]! border! border-app-divider!'
    >
      <Table
        stickyHeader
        aria-label='Employee directory table'
        sx={{ minWidth: 850 }}
      >
        <TableHead>
          <TableRow
            sx={{
              height: HEADER_HEIGHT,
              borderBottom: '1px solid',
              borderColor: 'divider',
            }}
          >
            <TableCell className={tableHeaderClassName} sx={tableHeaderSx}>
              Employee
            </TableCell>

            <TableCell className={tableHeaderClassName} sx={tableHeaderSx}>
              Department
            </TableCell>

            <TableCell className={tableHeaderClassName} sx={tableHeaderSx}>
              Location
            </TableCell>

            <TableCell className={tableHeaderClassName} sx={tableHeaderSx}>
              Salary
            </TableCell>

            <TableCell className={tableHeaderClassName} sx={tableHeaderSx}>
              Status
            </TableCell>

            <TableCell
              align='right'
              className={tableHeaderClassName}
              sx={tableHeaderSx}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <TableRow
                key={employee.id}
                hover
                sx={{
                  height: ROW_HEIGHT,

                  '& td': {
                    borderColor: 'divider',
                  },
                }}
              >
                {/* Employee */}
                <TableCell className={tableCellClassName}>
                  <div className='flex min-w-50 items-center gap-3'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#6e64ff] to-[#a87aff] text-sm font-semibold text-white'>
                      {getEmployeeInitials(employee.name)}
                    </div>

                    <div className='min-w-0'>
                      <p className='text-app-primary-text truncate text-sm font-semibold'>
                        {employee.name}
                      </p>

                      <p className='text-app-secondary-text mt-0.5 truncate text-xs'>
                        {employee.role}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  className={`${tableCellClassName} whitespace-nowrap`}
                  sx={secondaryCellSx}
                >
                  {employee.department}
                </TableCell>

                <TableCell
                  className={`${tableCellClassName} whitespace-nowrap`}
                  sx={secondaryCellSx}
                >
                  {employee.location}
                </TableCell>

                <TableCell
                  className={`${tableCellClassName} whitespace-nowrap font-semibold!`}
                  sx={primaryCellSx}
                >
                  ${employee.salary.toLocaleString()}
                </TableCell>

                <TableCell
                  className={`${tableCellClassName} whitespace-nowrap`}
                >
                  <span
                    className={
                      employee.status === 'Active'
                        ? 'inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400'
                        : 'inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-600 dark:text-amber-400'
                    }
                  >
                    {employee.status}
                  </span>
                </TableCell>

                {/* Actions */}
                <TableCell
                  align='right'
                  className={`${tableCellClassName} whitespace-nowrap`}
                >
                  <div className='flex justify-end gap-1'>
                    <IconButton
                      size='small'
                      aria-label={`View ${employee.name}`}
                      onClick={() => onView(employee.id)}
                      sx={{
                        color: 'text.secondary',

                        '&:hover': {
                          color: 'text.primary',
                          backgroundColor: 'action.hover',
                        },
                      }}
                    >
                      <VisibilityOutlined fontSize='small' />
                    </IconButton>

                    <IconButton
                      size='small'
                      aria-label={`Edit ${employee.name}`}
                      onClick={() => onEdit(employee.id)}
                      sx={{
                        color: 'text.secondary',

                        '&:hover': {
                          color: 'primary.main',
                          backgroundColor: 'action.hover',
                        },
                      }}
                    >
                      <EditOutlined fontSize='small' />
                    </IconButton>

                    <IconButton
                      size='small'
                      aria-label={`Delete ${employee.name}`}
                      onClick={() => onDelete(employee.id)}
                      color='error'
                    >
                      <DeleteOutlineOutlined fontSize='small' />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <EmployeeTableEmptyState isEmptyDirectory={totalEmployees === 0} />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
