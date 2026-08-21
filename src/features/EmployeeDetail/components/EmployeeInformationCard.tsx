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
      <p className='text-app-secondary-text text-xs font-medium uppercase tracking-wide'>
        {label}
      </p>

      <p className='text-app-primary-text mt-2 truncate text-sm font-medium'>
        {value}
      </p>
    </div>
  );
}

export default function EmployeeInformationCard({
  employee,
}: EmployeeInformationProps) {
  return (
    <section className='border-app-divider bg-app-paper rounded-[20px] border p-5 sm:p-6'>
      <h2 className='text-app-primary-text text-lg font-semibold'>
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
