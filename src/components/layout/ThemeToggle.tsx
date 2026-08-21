import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { Button } from '@mui/material';

import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <Button
      type='button'
      variant='text'
      fullWidth
      onClick={toggleTheme}
      startIcon={
        isDark ? (
          <LightModeOutlined fontSize='small' />
        ) : (
          <DarkModeOutlined fontSize='small' />
        )
      }
      className='h-11! justify-start! rounded-xl! px-3! text-sm! font-medium! normal-case!'
      sx={(muiTheme) => ({
        color: muiTheme.palette.text.secondary,

        '&:hover': {
          backgroundColor: muiTheme.palette.action.hover,
          color: muiTheme.palette.text.primary,
        },
      })}
    >
      {isDark ? 'Light mode' : 'Dark mode'}
    </Button>
  );
}
