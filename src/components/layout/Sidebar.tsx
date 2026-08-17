import { AutoAwesome, Close, Menu } from '@mui/icons-material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { NAVIGATION_ITEMS } from './sidebar.constants';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MobileMenuButton onClick={openSidebar} />

      <SidebarOverlay isOpen={isOpen} onClick={closeSidebar} />

      <aside
        className={[
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col',
          'border-r border-[#252945] bg-[#0c0f24]',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0',
        ].join(' ')}
      >
        <SidebarHeader onClose={closeSidebar} />

        <nav
          className='flex-1 overflow-y-auto px-3 py-5'
          aria-label='Main navigation'
        >
          <div className='space-y-2'>
            {NAVIGATION_ITEMS.map(({ label, path, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  [
                    'flex h-11 w-full items-center gap-3 rounded-xl px-3',
                    'text-sm transition-colors duration-200',
                    isActive
                      ? 'bg-[#202441] text-white'
                      : 'text-[#9b9eb5] hover:bg-[#171b34] hover:text-white',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={
                        isActive ? '!text-[#f4f4f8]' : '!text-[#9b9eb5]'
                      }
                      fontSize='small'
                    />

                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        <SidebarFooter />
      </aside>
    </>
  );
}

interface MobileMenuButtonProps {
  onClick: () => void;
}

function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='fixed left-4 top-4 z-40 flex h-10 w-10 items-center justify-center rounded-xl border border-[#292d49] bg-[#15192f] text-white md:hidden'
      aria-label='Open navigation'
    >
      <Menu fontSize='small' />
    </button>
  );
}

interface SidebarOverlayProps {
  isOpen: boolean;
  onClick: () => void;
}

function SidebarOverlay({ isOpen, onClick }: SidebarOverlayProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <button
      type='button'
      aria-label='Close navigation'
      onClick={onClick}
      className='fixed inset-0 z-40 bg-black/60 md:hidden'
    />
  );
}

interface SidebarHeaderProps {
  onClose: () => void;
}

function SidebarHeader({ onClose }: SidebarHeaderProps) {
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex items-center gap-3'>
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#6e64ff] to-[#a87aff]'>
          <AutoAwesome className='!text-white' fontSize='small' />
        </div>

        <div>
          <h2 className='text-sm font-semibold tracking-wide text-white'>
            INVOICE HUB
          </h2>

          <p className='mt-0.5 text-xs text-slate-400'>People OS</p>
        </div>
      </div>

      <button
        type='button'
        onClick={onClose}
        className='flex h-9 w-9 items-center justify-center rounded-lg text-[#9b9eb5] transition-colors hover:bg-[#171b34] hover:text-white md:hidden'
        aria-label='Close navigation'
      >
        <Close fontSize='small' />
      </button>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className='m-3 mt-auto rounded-[20px] border border-[#292d49] bg-[#11152c] p-5'>
      <p className='text-sm font-medium leading-5 text-[#a5a7ba]'>
        Demo data lives in your browser. Refresh-safe, reset by clearing
        storage.
      </p>
    </div>
  );
}
