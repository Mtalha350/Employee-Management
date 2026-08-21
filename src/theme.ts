import { createTheme } from '@mui/material/styles';

type AppThemeMode = 'light' | 'dark';

export const createAppTheme = (mode: AppThemeMode) =>
  createTheme({
    palette: {
      mode,

      primary: {
        main: '#7568ff',
      },

      background: {
        default: mode === 'dark' ? '#080b1c' : '#f6f7fb',
        paper: mode === 'dark' ? '#15192f' : '#ffffff',
      },

      text: {
        primary: mode === 'dark' ? '#f4f5fb' : '#171923',
        secondary: mode === 'dark' ? '#9699af' : '#62677a',
      },

      divider: mode === 'dark' ? '#2b2f4b' : '#e2e5ec',
    },

    shape: {
      borderRadius: 12,
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }),
      },

      MuiTextField: {
        defaultProps: {
          size: 'small',
          fullWidth: true,
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 12,
            backgroundColor: theme.palette.background.paper,

            '& fieldset': {
              borderColor: theme.palette.divider,
            },

            '&:hover fieldset': {
              borderColor: theme.palette.text.secondary,
            },

            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.main,
            },
          }),
        },
      },

      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.text.secondary,

            '&.Mui-focused': {
              color: theme.palette.primary.main,
            },
          }),
        },
      },

      MuiPaper: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
          }),
        },
      },
    },
  });
