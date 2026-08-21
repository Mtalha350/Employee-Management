import { Menu } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '../../context/AuthContext';
import LogoutDialog from './LogoutDialog';
import SidebarFooter from './SidebarFooter';
import SidebarHeader from './SidebarHeader';
import SidebarNavigation from './SidebarNavigation';

export default function Sidebar() {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenLogoutDialog = () => {
    setIsLogoutDialogOpen(true);
  };

  const handleCloseLogoutDialog = () => {
    setIsLogoutDialogOpen(false);
  };

  const handleConfirmLogout = () => {
    logout();

    setIsLogoutDialogOpen(false);
    setIsOpen(false);

    toast.success('Logged out successfully');

    navigate('/login', { replace: true });
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant='outlined'
        onClick={handleOpen}
        aria-label='Open navigation'
        className='fixed! left-4! top-4! z-40! min-w-0! rounded-xl! border-app-divider! bg-app-paper! p-2.5! text-app-primary-text! shadow-lg! md:hidden!'
      >
        <Menu fontSize='small' />
      </Button>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          role='presentation'
          onClick={handleClose}
          className='fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] md:hidden'
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          'fixed left-0 top-0 z-50 flex h-screen w-64 flex-col',
          'border-r border-app-divider bg-app-paper',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0',
        ].join(' ')}
      >
        <SidebarHeader onClose={handleClose} />

        <SidebarNavigation onNavigate={handleClose} />

        <SidebarFooter
          name={user?.name}
          role={user?.role}
          onLogout={handleOpenLogoutDialog}
        />
      </aside>

      <LogoutDialog
        open={isLogoutDialogOpen}
        onClose={handleCloseLogoutDialog}
        onConfirm={handleConfirmLogout}
      />
    </>
  );
}
