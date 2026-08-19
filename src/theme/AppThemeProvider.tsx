import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo, type ReactNode } from 'react';

import { useTheme } from '../context/ThemeContext';
import { createAppTheme } from '../theme';

interface AppThemeProviderProps {
  children: ReactNode;
}

export default function AppThemeProvider({ children }: AppThemeProviderProps) {
  const { theme } = useTheme();

  const muiTheme = useMemo(() => {
    return createAppTheme(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
