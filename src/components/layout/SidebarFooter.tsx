interface SidebarFooterProps {
  name?: string;
  role?: string;
}

export default function SidebarFooter({
  name = 'Admin User',
  role = 'Administrator',
}: SidebarFooterProps) {
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <footer className='border-t border-[#252945] p-3'>
      <div className='flex items-center gap-3 rounded-xl bg-[#11152c] p-3'>
        <div className='relative shrink-0'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#6961ff] to-[#b278f4] text-sm font-semibold text-white'>
            {initials}
          </div>

          <span
            className='absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#11152c] bg-emerald-400'
            title='Online'
          />
        </div>

        <div className='min-w-0 flex-1'>
          <p className='truncate text-sm font-medium text-[#f4f5fb]'>{name}</p>

          <p className='mt-0.5 truncate text-xs text-[#9296ad]'>{role}</p>
        </div>
      </div>
    </footer>
  );
}
