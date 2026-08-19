import { Navigate, useParams } from 'react-router-dom';

import EmployeeForm from '../AddEmployee/components/EmployeeForm';
import { useAppSelector } from '../../store/hooks';

export default function EditEmployeePage() {
  const { employeeId } = useParams();

  const employee = useAppSelector((state) =>
    state.employees.employees.find((item) => item.id === employeeId),
  );

  if (!employeeId || !employee) {
    return <Navigate to='/' replace />;
  }

  return (
    <main className='min-h-screen bg-app-background px-4 py-20 text-app-primary-text transition-colors duration-200 sm:px-6 md:px-8 md:py-10 lg:px-10'>
      <div className='mx-auto w-full max-w-282.5'>
        {/* Page header */}
        <div className='mb-6 sm:mb-8'>
          <p className='text-xs font-medium text-app-secondary-text sm:text-sm'>
            Employee management
          </p>

          <h1 className='mt-2 text-[28px] font-semibold leading-tight tracking-[-1px] text-app-primary-text sm:text-[32px]'>
            Edit employee
          </h1>

          <p className='mt-2 text-sm leading-6 text-app-secondary-text sm:text-base'>
            Update employee information and save your changes.
          </p>
        </div>

        <EmployeeForm employee={employee} />
      </div>
    </main>
  );
}
