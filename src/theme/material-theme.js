import { createTheme } from '@mui/material/styles'; // Viktigt att använda rätt paket

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: '#2B3844',
      light: '#202C36',
      dark: '#3b5249',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f2f2f2', // Bakgrundsfärg för hela applikationen
      paper: '#ffffff',
      button: '#e8e8e8' // Bakgrund för "kort" och andra element
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
