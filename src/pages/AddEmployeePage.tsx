import EmployeeForm from './AddEmployee/components/EmployeeForm';

export default function AddEmployeePage() {
  return (
    <div className='min-h-screen px-10 py-10'>
      <div className='mx-auto max-w-282.5'>
        <h1 className='text-[52px] font-semibold tracking-[-2px] text-[#7568ff]'>
          Add employee
        </h1>

        <p className='mt-3 text-[20px] text-[#9699af]'>
          Fill in the details to create a new record.
        </p>

        <div className='mt-12'>
          <EmployeeForm />
        </div>
      </div>
    </div>
  );
}
