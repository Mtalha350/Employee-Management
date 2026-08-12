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
}

export default function EmployeeTable({
  employees,
  onDelete,
}: EmployeeTableProps) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      className='mt-6! overflow-hidden! rounded-[20px]! border! border-[#2b2f4b]! bg-[#15192f]!'
    >
      <Table>
        <TableHead>
          <TableRow className='border-b! border-[#2b2f4b]!'>
            <TableCell className='border-b-0! px-6! py-4! text-[12px]! font-medium! uppercase! tracking-wide! text-[#9296ad]!'>
              Employee
            </TableCell>

            <TableCell className='border-b-0! px-6! py-4! text-[12px]! font-medium! uppercase! tracking-wide! text-[#9296ad]!'>
              Department
            </TableCell>

            <TableCell className='border-b-0! px-6! py-4 text-[12px]! font-medium! uppercase! tracking-wide! text-[#9296ad]!'>
              Location
            </TableCell>

            <TableCell className='border-b-0! px-6! py-4! text-[12px]! font-medium! uppercase! tracking-wide! text-[#9296ad]!'>
              Salary
            </TableCell>

            <TableCell className='border-b-0! px-6! py-4! text-[12px]! font-medium! uppercase! tracking-wide! text-[#9296ad]!'>
              Status
            </TableCell>

            <TableCell
              align='right'
              className='border-b-0! px-6! py-4! text-[12px]! font-medium! uppercase! tracking-wide! text-[#9296ad]!'
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employees.length > 0 ? (
            employees.map((employee) => (
              <TableRow key={employee.id} className='hover:!bg-[#191d36]!'>
                {/* Employee */}
                <TableCell className='border-[#2b2f4b]! px-6! py-5!'>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#6e64ff] to-[#a87aff] text-sm font-semibold text-white'>
                      {getEmployeeInitials(employee.name)}
                    </div>

                    <div>
                      <p className='text-[14px] font-semibold text-[#f4f5fb]'>
                        {employee.name}
                      </p>

                      <p className='mt-0.5 text-[12px] text-[#9296ad]'>
                        {employee.role}
                      </p>
                    </div>
                  </div>
                </TableCell>

                {/* Department */}
                <TableCell className='border-[#2b2f4b]! px-6! py-5! text-[14px]! text-[#a5a8bb]!'>
                  {employee.department}
                </TableCell>

                {/* Location */}
                <TableCell className='border-[#2b2f4b]! px-6! py-5! text-[14px]! text-[#a5a8bb]!'>
                  {employee.location}
                </TableCell>

                {/* Salary */}
                <TableCell className='border-[#2b2f4b]! px-6! py-5! font-semibold! text-[#f4f5fb]!'>
                  ${employee.salary.toLocaleString()}
                </TableCell>

                {/* Status */}
                <TableCell className='border-[#2b2f4b]! px-6! py-5!'>
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

                {/* Actions */}
                <TableCell
                  align='right'
                  className='border-[#2b2f4b]! px-6! py-5!'
                >
                  <div className='flex justify-end gap-1'>
                    <IconButton size='small' className='text-[#d9dbe8]!'>
                      <VisibilityOutlined fontSize='small' />
                    </IconButton>

                    <IconButton size='small' className='text-[#d9dbe8]!'>
                      <EditOutlined fontSize='small' />
                    </IconButton>

                    <IconButton
                      size='small'
                      onClick={() => onDelete(employee.id)}
                      className='!text-red-500'
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
