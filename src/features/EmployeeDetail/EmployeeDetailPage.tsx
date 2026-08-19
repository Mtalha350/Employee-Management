import { Navigate, useParams } from 'react-router-dom';

import EmployeeDetailHeader from './components/EmployeeDetailHeader';
import EmployeeProfileCard from './components/EmployeeProfileCard';
import EmployeeInformationCard from './components/EmployeeInformationCard';
import { useAppSelector } from '../../store/hooks';

export default function EmployeeDetailPage() {
  const { employeeId } = useParams();

  const employee = useAppSelector((state) =>
    state.employees.employees.find(
      (currentEmployee) => currentEmployee.id === employeeId,
    ),
  );

  if (!employeeId || !employee) {
    return <Navigate to='/' replace />;
  }

  return (
    <main className='min-h-screen bg-app-background px-4 py-6 text-app-primary-text transition-colors duration-200 sm:px-6 sm:py-8 lg:px-10 lg:py-10'>
      <div className='mx-auto w-full max-w-282.5'>
        <EmployeeDetailHeader employee={employee} />

        <div className='mt-6'>
          <EmployeeProfileCard employee={employee} />
        </div>

        <div className='mt-6'>
          <EmployeeInformationCard employee={employee} />
        </div>
      </div>
    </main>
  );
}
