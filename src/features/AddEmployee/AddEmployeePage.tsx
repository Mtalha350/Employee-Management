import EmployeeForm from './components/EmployeeForm';

export default function AddEmployeePage() {
  return (
    <main className='min-h-screen bg-app-background px-4 py-20 text-app-primary-text sm:px-6 md:px-8 md:py-10 lg:px-10'>
      <div className='mx-auto w-full max-w-[1130px]'>
        <div>
          <h1 className='text-[30px] font-semibold leading-tight tracking-[-1px] text-[#7568ff] sm:text-[35px] md:text-[40px] md:tracking-[-2px]'>
            Add employee
          </h1>

          <p className='mt-1 text-sm text-app-secondary-text sm:text-[15px] md:text-[16px]'>
            Fill in the details to create a new record.
          </p>
        </div>

        <div className='mt-6 sm:mt-8'>
          <EmployeeForm />
        </div>
      </div>
    </main>
  );
}
