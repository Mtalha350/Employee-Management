import { LogoutOutlined } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

interface LogoutDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutDialog({
  open,
  onClose,
  onConfirm,
}: LogoutDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth='xs'
      slotProps={{
        paper: {
          className:
            'rounded-[20px]! border! border-app-divider! bg-app-paper! text-app-primary-text!',
        },
      }}
    >
      <DialogTitle className='px-6! pt-6! pb-2! text-[20px]! font-semibold! text-app-primary-text!'>
        Logout?
      </DialogTitle>

      <DialogContent className='px-6! pt-2! pb-4!'>
        <p className='text-sm leading-6 text-app-secondary-text'>
          Are you sure you want to logout? You will need to sign in again to
          access Employee Management.
        </p>
      </DialogContent>

      <DialogActions className='gap-2! px-6! pt-2! pb-6!'>
        <Button
          variant='outlined'
          onClick={onClose}
          className='h-10! rounded-xl! border-app-divider! px-5! text-sm! font-medium! normal-case! text-app-primary-text!'
        >
          Cancel
        </Button>

        <Button
          variant='contained'
          startIcon={<LogoutOutlined />}
          onClick={onConfirm}
          className='h-10! rounded-xl! bg-red-500! px-5! text-sm! font-semibold! normal-case! text-white! hover:bg-red-600!'
        >
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
}
