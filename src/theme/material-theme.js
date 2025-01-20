import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#2B3844',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f2f2f2',
      paper: '#ffffff',
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
      default: '#202C36', //standard darkmode
      paper: '#2B3844',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
    },
  },
});
