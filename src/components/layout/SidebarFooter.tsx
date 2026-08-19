import { LogoutOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

import ThemeToggle from './ThemeToggle';

interface SidebarFooterProps {
  name?: string;
  role?: string;
  onLogout: () => void;
}

export default function SidebarFooter({
  name = 'Admin User',
  role = 'Administrator',
  onLogout,
}: SidebarFooterProps) {
  const initials = name
    .split(' ')
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <footer className='border-t border-app-divider p-3'>
      {/* Theme toggle */}
      <div>
        <ThemeToggle />
      </div>

      {/* Logout */}
      <Button
        type='button'
        fullWidth
        variant='text'
        startIcon={<LogoutOutlined fontSize='small' />}
        onClick={onLogout}
        className='mb-4! h-11! justify-start! rounded-xl! px-3! text-sm! font-medium! normal-case! text-app-secondary-text! hover:bg-red-500/10! hover:text-red-500!'
      >
        Logout
      </Button>

      {/* User information */}
      <div className='flex items-center gap-3 rounded-xl bg-app-background p-3'>
        <div className='relative shrink-0'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#6961ff] to-[#b278f4] text-sm font-semibold text-white'>
            {initials}
          </div>

          <span className='absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-app-background bg-emerald-400' />
        </div>

        <div className='min-w-0 flex-1'>
          <p className='truncate text-sm font-medium text-app-primary-text'>
            {name}
          </p>

          <p className='mt-0.5 truncate text-xs text-app-secondary-text'>
            {role}
          </p>
        </div>
      </div>
    </footer>
  );
}
