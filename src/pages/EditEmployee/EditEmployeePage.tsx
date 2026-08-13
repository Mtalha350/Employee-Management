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
    <div className='min-h-screen px-10 py-10'>
      <div className='mb-8'>
        <p className='text-sm font-medium text-[#9699af]'>
          Employee management
        </p>

        <h1 className='mt-2 text-[32px] font-semibold text-[#f4f5fb]'>
          Edit employee
        </h1>

        <p className='mt-2 text-[16px] text-[#9699af]'>
          Update employee information and save your changes.
        </p>
      </div>

      <EmployeeForm employee={employee} />
    </div>
  );
}
