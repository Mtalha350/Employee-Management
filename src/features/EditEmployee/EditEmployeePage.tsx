import { Navigate, useParams } from 'react-router-dom';

import EmployeeForm from '../AddEmployee/components/EmployeeForm';
import { getEmployeeById } from '../Directory/services/employeeStorage';

export default function EditEmployeePage() {
  const { employeeId } = useParams();

  if (!employeeId) {
    return <Navigate to='/' replace />;
  }

  const employee = getEmployeeById(employeeId);

  if (!employee) {
    return <Navigate to='/' replace />;
  }

  return (
    <div className='min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10'>
      <div className='mx-auto w-full max-w-282.5'>
        {/* Page header */}
        <div className='mb-6 sm:mb-8'>
          <p className='text-xs font-medium text-[#9699af] sm:text-sm'>
            Employee management
          </p>

          <h1 className='mt-2 text-[28px] font-semibold leading-tight tracking-[-1px] text-[#f4f5fb] sm:text-[32px]'>
            Edit employee
          </h1>

          <p className='mt-2 text-sm leading-6 text-[#9699af] sm:text-base'>
            Update employee information and save your changes.
          </p>
        </div>

        <EmployeeForm employee={employee} />
      </div>
    </div>
  );
}
