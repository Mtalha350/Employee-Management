import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';

interface DeleteEmployeeDialogProps {
  open: boolean;
  employeeName?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteEmployeeDialog({
  open,
  employeeName,
  onClose,
  onConfirm,
}: DeleteEmployeeDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth='sm'
      slotProps={{
        paper: {
          className:
            'w-[calc(100%-32px)]! max-w-[460px]! rounded-[20px]! border! border-app-divider! bg-app-paper! text-app-primary-text! sm:rounded-[24px]!',
        },
      }}
    >
      <div className='px-5 pt-5 sm:px-6 sm:pt-6'>
        <h2 className='text-app-primary-text text-[18px] font-semibold sm:text-[20px]'>
          Delete employee?
        </h2>
      </div>

      <DialogContent className='px-5! pb-5! pt-2! sm:px-6! sm:pb-6!'>
        <p className='text-app-secondary-text text-sm leading-relaxed sm:text-[15px]'>
          Are you sure you want to delete{' '}
          <span className='text-app-primary-text break-all font-semibold'>
            {employeeName}
          </span>
          ?
        </p>

        <p className='text-app-secondary-text mt-1 text-[13px] sm:text-sm'>
          This action cannot be undone.
        </p>
      </DialogContent>

      <DialogActions className='flex! flex-col-reverse! gap-3! px-5! pb-5! sm:flex-row! sm:gap-3! sm:px-6! sm:pb-6!'>
        <Button
          onClick={onClose}
          variant='outlined'
          className='border-app-divider text-app-primary-text h-11! w-full! rounded-xl! px-5! text-sm! font-semibold! normal-case! hover:border-app-secondary-text! hover:bg-app-background! sm:w-auto! sm:px-6!'
        >
          Cancel
        </Button>

        <Button
          onClick={onConfirm}
          variant='contained'
          color='error'
          className='h-11! w-full! rounded-xl! px-5! text-sm! font-semibold! normal-case! sm:w-auto! sm:px-6!'
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
