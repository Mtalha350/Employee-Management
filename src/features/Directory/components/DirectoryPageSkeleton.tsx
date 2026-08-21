export default function DirectoryPageSkeleton() {
  return (
    <main className='min-h-screen bg-app-background px-4 py-20 sm:px-6 md:px-8 md:py-10 lg:px-10'>
      <div className='mx-auto w-full max-w-[1600px]'>
        {/* Header */}
        <div className='flex justify-between'>
          <div className='space-y-3'>
            <div className='h-9 w-64 animate-pulse rounded-lg bg-app-paper' />
            <div className='h-5 w-96 animate-pulse rounded-lg bg-app-paper' />
          </div>

          <div className='h-10 w-36 animate-pulse rounded-xl bg-app-paper' />
        </div>

        {/* Stats */}
        <div className='mt-8 grid gap-4 md:grid-cols-3'>
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className='h-34 animate-pulse rounded-[20px] border border-app-divider bg-app-paper'
            />
          ))}
        </div>

        {/* Filters */}
        <div className='mt-8 flex flex-wrap gap-4'>
          <div className='h-10 w-full animate-pulse rounded-xl bg-app-paper sm:w-100' />
          <div className='h-10 w-65 animate-pulse rounded-xl bg-app-paper' />
          <div className='h-10 w-55 animate-pulse rounded-xl bg-app-paper' />
        </div>

        {/* Table */}
        <div className='mt-8 overflow-hidden rounded-[20px] border border-app-divider bg-app-paper'>
          <div className='h-18 border-b border-app-divider' />

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className='flex h-19 items-center gap-6 border-b border-app-divider px-6'
            >
              <div className='h-10 w-10 animate-pulse rounded-full bg-app-background' />
              <div className='h-5 w-48 animate-pulse rounded bg-app-background' />
              <div className='h-5 w-32 animate-pulse rounded bg-app-background' />
              <div className='h-5 w-28 animate-pulse rounded bg-app-background' />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
