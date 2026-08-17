import type { Employee } from '../../Directory/types/employee.types';
import { getEmployeeInitials } from '../../Directory/utils/employee.utils';

interface EmployeeProfileCardProps {
  employee: Employee;
}

export default function EmployeeProfileCard({
  employee,
}: EmployeeProfileCardProps) {
  const isActive = employee.status === 'Active';

  return (
    <section className='rounded-[20px] border border-[#2b2f4b] bg-[#15192f] p-5 sm:p-6 lg:p-8'>
      <div className='flex flex-col gap-5 sm:flex-row sm:items-center'>
        {/* Avatar */}
        <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#6e64ff] to-[#a87aff] text-xl font-semibold text-white sm:h-20 sm:w-20 sm:text-2xl'>
          {getEmployeeInitials(employee.name)}
        </div>

        {/* Employee information */}
        <div className='min-w-0'>
          <div className='flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3'>
            <h2 className='truncate text-xl font-semibold text-[#f4f5fb] sm:text-2xl'>
              {employee.name}
            </h2>

            <span
              className={
                isActive
                  ? 'w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400'
                  : 'w-fit rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400'
              }
            >
              {employee.status}
            </span>
          </div>

          <p className='mt-2 text-sm text-[#9699af] sm:text-base'>
            {employee.role}
          </p>

          <p className='mt-1 text-sm text-[#9296ad]'>{employee.department}</p>
        </div>
      </div>
    </section>
  );
}
