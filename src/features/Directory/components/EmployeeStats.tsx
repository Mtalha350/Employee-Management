import StatCard from '../../../components/ui/StatCard';

interface EmployeeStatsProps {
  headcount: number;
  departments: number;
  annualPayroll: number;
}

export default function EmployeeStats({
  headcount,
  departments,
  annualPayroll,
}: EmployeeStatsProps) {
  return (
    <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5'>
      <StatCard label='Headcount' value={headcount} />

      <StatCard label='Departments' value={departments} />

      <StatCard
        label='Annual payroll'
        value={`$${annualPayroll.toLocaleString()}`}
      />
    </div>
  );
}
