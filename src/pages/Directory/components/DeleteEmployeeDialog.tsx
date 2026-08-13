import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

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
      slotProps={{
        paper: {
          sx: (theme) => ({
            width: '100%',
            maxWidth: 460,
            margin: 2,
            padding: 1,
            borderRadius: '24px',
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            boxShadow: '0 24px 70px rgba(0, 0, 0, 0.45)',
          }),
        },
      }}
    >
      <DialogTitle
        sx={(theme) => ({
          padding: '24px 24px 12px',
          color: theme.palette.text.primary,
          fontSize: '20px',
          fontWeight: 600,
        })}
      >
        Delete employee?
      </DialogTitle>

      <DialogContent
        sx={(theme) => ({
          padding: '8px 24px 24px',
          color: theme.palette.text.secondary,
        })}
      >
        <p className='text-[15px] leading-6'>
          Are you sure you want to delete{' '}
          <span className='font-semibold text-[#f4f5fb]'>{employeeName}</span>?
        </p>

        <p className='mt-2 text-[14px] text-[#9699af]'>
          This action cannot be undone.
        </p>
      </DialogContent>

      <DialogActions className='px-6! pb-6! pt-0!'>
        <Button
          onClick={onClose}
          variant='outlined'
          sx={(theme) => ({
            minHeight: 44,
            borderRadius: '12px',
            paddingInline: '20px',
            textTransform: 'none',
            fontWeight: 600,
            color: theme.palette.text.primary,
            borderColor: theme.palette.divider,

            '&:hover': {
              borderColor: theme.palette.text.secondary,
              backgroundColor: theme.palette.action.hover,
            },
          })}
        >
          Cancel
        </Button>

        <Button
          onClick={onConfirm}
          variant='contained'
          sx={{
            minHeight: 44,
            borderRadius: '12px',
            paddingInline: '20px',
            textTransform: 'none',
            fontWeight: 600,
            backgroundColor: '#ef4444',

            '&:hover': {
              backgroundColor: '#dc2626',
            },
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
