import { AutoAwesome } from '@mui/icons-material';

import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <main className='relative flex min-h-screen items-center justify-center overflow-hidden bg-app-background px-4 py-8 sm:px-6'>
      {/* Background decoration */}
      <div className='pointer-events-none absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-[#6961ff]/10 blur-[140px]' />

      <div className='relative w-full max-w-110'>
        {/* Brand */}
        <div className='mb-8 text-center'>
          <div className='mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#6961ff] to-[#a678e8] shadow-lg shadow-[#6961ff]/25'>
            <AutoAwesome sx={{ fontSize: 28, color: '#ffffff' }} />
          </div>

          <h1 className='text-app-primary-text text-3xl font-bold tracking-[-0.8px]'>
            Welcome back
          </h1>

          <p className='text-app-secondary-text mt-2 text-[15px]'>
            Sign in to continue to Employee Management.
          </p>
        </div>

        {/* Login Card */}
        <section className='border-app-divider bg-app-paper rounded-3xl border p-6 shadow-2xl shadow-black/10 sm:p-8 dark:shadow-black/20'>
          <div className='mb-7'>
            <h2 className='text-app-primary-text text-xl font-semibold'>
              Sign in to your account
            </h2>

            <p className='text-app-secondary-text mt-1.5 text-sm'>
              Enter your email and password below.
            </p>
          </div>

          <LoginForm />
        </section>

        {/* Demo credentials */}
        <div className='border-app-divider bg-app-paper mt-4 rounded-2xl border px-5 py-4'>
          <p className='text-app-secondary-text text-center text-xs font-semibold uppercase tracking-[1px]'>
            Demo credentials
          </p>

          <div className='mt-3 flex items-center justify-between gap-4'>
            <div>
              <p className='text-app-secondary-text text-xs'>Email</p>

              <p className='text-app-primary-text mt-1 text-sm font-medium'>
                admin@peopleflow.com
              </p>
            </div>

            <div className='border-app-divider border-l pl-4 text-right'>
              <p className='text-app-secondary-text text-xs'>Password</p>

              <p className='text-app-primary-text mt-1 text-sm font-medium'>
                123456
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
