import type { Employee } from '../../Directory/types/employee.types';

interface EmployeeInformationProps {
  employee: Employee;
}

interface InformationItemProps {
  label: string;
  value: string;
}

function InformationItem({ label, value }: InformationItemProps) {
  return (
    <div className='min-w-0'>
      <p className='text-xs font-medium uppercase tracking-wide text-[#9296ad]'>
        {label}
      </p>

      <p className='mt-2 truncate text-sm font-medium text-[#f4f5fb]'>
        {value}
      </p>
    </div>
  );
}

export default function EmployeeInformationCard({
  employee,
}: EmployeeInformationProps) {
  return (
    <section className='rounded-[20px] border border-[#2b2f4b] bg-[#15192f] p-5 sm:p-6'>
      <h2 className='text-lg font-semibold text-[#f4f5fb]'>
        Employee information
      </h2>

      <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        <InformationItem label='Full name' value={employee.name} />

        <InformationItem label='Job title' value={employee.role} />

        <InformationItem label='Email address' value={employee.email} />

        <InformationItem label='Phone number' value={employee.phone} />

        <InformationItem label='Department' value={employee.department} />

        <InformationItem label='Location' value={employee.location} />
      </div>
    </section>
  );
}
