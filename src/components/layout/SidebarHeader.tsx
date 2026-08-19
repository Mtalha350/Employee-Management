import { AutoAwesome, Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface SidebarHeaderProps {
  onClose: () => void;
}

export default function SidebarHeader({ onClose }: SidebarHeaderProps) {
  return (
    <header className='flex items-center justify-between border-b border-app-divider px-5 py-5'>
      <div className='flex items-center gap-3'>
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#6961ff] to-[#b278f4]'>
          <AutoAwesome sx={{ fontSize: 21, color: '#fff' }} />
        </div>

        <div>
          <h1 className='text-sm font-semibold tracking-wide text-app-primary-text'>
            PEOPLEFLOW
          </h1>

          <p className='mt-0.5 text-xs text-app-secondary-text'>
            Employee management
          </p>
        </div>
      </div>

      <IconButton
        onClick={onClose}
        aria-label='Close navigation'
        size='small'
        className='flex! h-9! w-9! rounded-lg! text-app-secondary-text! hover:bg-app-background! hover:text-app-primary-text! md:hidden!'
      >
        <Close fontSize='small' />
      </IconButton>
    </header>
  );
}
