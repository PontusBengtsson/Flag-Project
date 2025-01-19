import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#2B3844',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f2f2f2',
    },
    text: {
      primary: '#000000',
      secondary: '#b3b3b3',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#2B3844',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
});
