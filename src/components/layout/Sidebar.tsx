import { Menu } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';

import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarNavigation from './SidebarNavigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant='outlined'
        onClick={handleOpen}
        aria-label='Open navigation'
        className='fixed! left-4! top-4! z-40! min-w-0! rounded-xl! border-[#2b2f4b]! bg-[#15192f]! p-2.5! text-[#f4f5fb]! shadow-lg! md:hidden!'
      >
        <Menu fontSize='small' />
      </Button>

      {isOpen && (
        <div
          role='presentation'
          onClick={handleClose}
          className='fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] md:hidden'
        />
      )}

      <aside
        className={[
          'fixed left-0 top-0 z-50 flex h-screen w-64 flex-col',
          'border-r border-[#252945] bg-[#0c0f24]',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0',
        ].join(' ')}
      >
        <SidebarHeader onClose={handleClose} />

        <SidebarNavigation onNavigate={handleClose} />

        <SidebarFooter />
      </aside>
    </>
  );
}
