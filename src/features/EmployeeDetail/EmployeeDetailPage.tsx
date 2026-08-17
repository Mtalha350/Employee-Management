import { Navigate, useParams } from 'react-router-dom';

import { getEmployeeById } from '../Directory/services/employeeStorage';
import EmployeeDetailHeader from './components/EmployeeDetailHeader';
import EmployeeProfileCard from './components/EmployeeProfileCard';
import EmployeeInformationCard from './components/EmployeeInformationCard';

export default function EmployeeDetailPage() {
  const { employeeId } = useParams();

  if (!employeeId) {
    return <Navigate to='/' replace />;
  }

  const employee = getEmployeeById(employeeId);

  if (!employee) {
    return <Navigate to='/' replace />;
  }

  return (
    <main className='min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10'>
      <div className='mx-auto w-full max-w-282.5'>
        {/* Header */}
        <EmployeeDetailHeader employee={employee} />

        {/* Profile */}
        <div className='mt-6'>
          <EmployeeProfileCard employee={employee} />
        </div>

        {/* Information */}
        <div className='mt-6'>
          <EmployeeInformationCard employee={employee} />
        </div>
      </div>
    </main>
  );
}
