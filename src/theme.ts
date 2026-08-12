import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#7568ff',
    },

    background: {
      default: '#080b1c',
      paper: '#15192f',
    },

    text: {
      primary: '#f4f5fb',
      secondary: '#9699af',
    },

    divider: '#2b2f4b',
  },

  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },

      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiInputBase-input': {
            color: theme.palette.text.primary,
          },

          '& .MuiInputLabel-root': {
            color: theme.palette.text.primary,
          },

          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.primary.main,
          },

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.divider,
          },

          '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary,
          },

          '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderColor: theme.palette.primary.main,
            },
        }),
      },
    },

    MuiSelect: {
      styleOverrides: {
        icon: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,

          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },

          '&.Mui-selected': {
            backgroundColor: `${theme.palette.primary.main}20`,
          },

          '&.Mui-selected:hover': {
            backgroundColor: `${theme.palette.primary.main}30`,
          },
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
