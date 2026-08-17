import { AutoAwesome, Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface SidebarHeaderProps {
  onClose: () => void;
}

export default function SidebarHeader({ onClose }: SidebarHeaderProps) {
  return (
    <header className='flex items-center justify-between border-b border-[#252945] px-5 py-5'>
      <div className='flex items-center gap-3'>
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#6961ff] to-[#b278f4]'>
          <AutoAwesome sx={{ fontSize: 21, color: '#fff' }} />
        </div>

        <div>
          <h1 className='text-sm font-semibold tracking-wide text-[#f4f5fb]'>
            PEOPLEFLOW
          </h1>

          <p className='mt-0.5 text-xs text-[#9296ad]'>Employee management</p>
        </div>
      </div>

      <IconButton
        onClick={onClose}
        aria-label='Close navigation'
        size='small'
        sx={{
          display: { xs: 'flex', md: 'none' },
          width: 36,
          height: 36,
          borderRadius: '8px',
          color: '#9296ad',

          '&:hover': {
            backgroundColor: '#171b34',
            color: '#f4f5fb',
          },
        }}
      >
        <Close fontSize='small' />
      </IconButton>
    </header>
  );
}
