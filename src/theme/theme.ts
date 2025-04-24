import { createTheme, ThemeOptions } from '@mui/material';

export const getTheme = (mode: 'light' | 'dark') => {
  const palette: ThemeOptions['palette'] = {
    mode,
    primary: {
      main: '#1976d2',
    },
    background: {
      default: mode === 'light' ? '#fff' : '#121212',
      paper: mode === 'light' ? '#fff' : '#1e1e1e',
    },
  };

  return createTheme({ palette });
};
