import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: '#2B3844',
      light: '#202C36',
      dark: '#3b5249',
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
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
  },
});

export default themeOptions;
