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
      fullWidth
      maxWidth='sm'
      slotProps={{
        paper: {
          sx: (theme) => ({
            width: 'calc(100% - 32px)',
            maxWidth: 460,
            margin: { xs: '16px', sm: '24px' },
            padding: { xs: 0, sm: 1 },
            borderRadius: { xs: '20px', sm: '24px' },
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
          padding: {
            xs: '20px 20px 10px',
            sm: '24px 24px 12px',
          },
          color: theme.palette.text.primary,
          fontSize: {
            xs: '18px',
            sm: '20px',
          },
          fontWeight: 600,
        })}
      >
        Delete employee?
      </DialogTitle>

      <DialogContent
        sx={(theme) => ({
          padding: {
            xs: '8px 20px 20px',
            sm: '8px 24px 24px',
          },
          color: theme.palette.text.secondary,
        })}
      >
        <p className='text-[14px] leading-6 sm:text-[15px]'>
          Are you sure you want to delete{' '}
          <span className='wrap-break-word font-semibold text-[#f4f5fb]'>
            {employeeName}
          </span>
          ?
        </p>

        <p className='mt-2 text-[13px] text-[#9699af] sm:text-[14px]'>
          This action cannot be undone.
        </p>
      </DialogContent>

      <DialogActions
        sx={{
          padding: {
            xs: '0 20px 20px',
            sm: '0 24px 24px',
          },
          gap: 1.5,
          flexDirection: {
            xs: 'column-reverse',
            sm: 'row',
          },

          '& > button': {
            width: {
              xs: '100%',
              sm: 'auto',
            },
          },
        }}
      >
        <Button
          onClick={onClose}
          variant='outlined'
          sx={(theme) => ({
            minHeight: 44,
            borderRadius: '12px',
            paddingInline: {
              xs: '20px',
              sm: '24px',
            },
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
            paddingInline: {
              xs: '20px',
              sm: '24px',
            },
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
