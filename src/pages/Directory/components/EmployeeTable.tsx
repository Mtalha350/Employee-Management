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
  onDelete: (employeeId: string) => void;
  onEdit: (employeeId: string) => void;
}

const tableHeaderClassName =
  'border-b-0! px-4! py-4! text-[12px]! font-medium! uppercase! tracking-wide! text-[#9296ad]! sm:px-6!';

const tableCellClassName =
  'border-[#2b2f4b]! px-4! py-4! text-[14px]! sm:px-6! sm:py-5!';

export default function EmployeeTable({
  employees,
  onDelete,
  onEdit,
}: EmployeeTableProps) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      className='mt-6! w-full! overflow-x-auto! rounded-[20px]! border! border-[#2b2f4b]! bg-[#15192f]!'
    >
      <Table sx={{ minWidth: 850 }} aria-label='Employee directory table'>
        <TableHead>
          <TableRow className='border-b! border-[#2b2f4b]!'>
            <TableCell className={tableHeaderClassName}>Employee</TableCell>

            <TableCell className={tableHeaderClassName}>Department</TableCell>

            <TableCell className={tableHeaderClassName}>Location</TableCell>

            <TableCell className={tableHeaderClassName}>Salary</TableCell>

            <TableCell className={tableHeaderClassName}>Status</TableCell>

            <TableCell align='right' className={tableHeaderClassName}>
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
                className='transition-colors hover:!bg-[#191d36]!'
              >
                <TableCell className={tableCellClassName}>
                  <div className='flex min-w-[200px] items-center gap-3'>
                    <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#6e64ff] to-[#a87aff] text-xs font-semibold text-white sm:h-10 sm:w-10 sm:text-sm'>
                      {getEmployeeInitials(employee.name)}
                    </div>

                    <div className='min-w-0'>
                      <p className='truncate text-sm font-semibold text-[#f4f5fb]'>
                        {employee.name}
                      </p>

                      <p className='mt-0.5 truncate text-xs text-[#9296ad]'>
                        {employee.role}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell
                  className={`${tableCellClassName} whitespace-nowrap text-[#a5a8bb]!`}
                >
                  {employee.department}
                </TableCell>

                <TableCell
                  className={`${tableCellClassName} whitespace-nowrap text-[#a5a8bb]!`}
                >
                  {employee.location}
                </TableCell>

                <TableCell
                  className={`${tableCellClassName} whitespace-nowrap font-semibold! text-[#f4f5fb]!`}
                >
                  ${employee.salary.toLocaleString()}
                </TableCell>

                <TableCell
                  className={`${tableCellClassName} whitespace-nowrap`}
                >
                  <span
                    className={
                      employee.status === 'Active'
                        ? 'inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400'
                        : 'inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400'
                    }
                  >
                    {employee.status}
                  </span>
                </TableCell>

                <TableCell
                  align='right'
                  className={`${tableCellClassName} whitespace-nowrap`}
                >
                  <div className='flex justify-end gap-1'>
                    <IconButton
                      size='small'
                      aria-label={`View ${employee.name}`}
                      className='text-[#d9dbe8]!'
                    >
                      <VisibilityOutlined fontSize='small' />
                    </IconButton>

                    <IconButton
                      size='small'
                      aria-label={`Edit ${employee.name}`}
                      onClick={() => onEdit(employee.id)}
                      className='text-[#d9dbe8]!'
                    >
                      <EditOutlined fontSize='small' />
                    </IconButton>

                    <IconButton
                      size='small'
                      aria-label={`Delete ${employee.name}`}
                      onClick={() => onDelete(employee.id)}
                      className='text-red-500!'
                    >
                      <DeleteOutlineOutlined fontSize='small' />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <EmployeeTableEmptyState />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
