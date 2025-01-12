import { createTheme } from '@mui/material/styles';

export const materialTheme = createTheme({
  palette: {
    primary: {
      main: '#2B3844', // Huvudfärg
      light: '#202C36', // Ljusare variant
      dark: '#3b5249', // Mörkare variant
      contrastText: '#ffffff', // Textfärg för kontrast
    },
    background: {
      default: '#f2f2f2', // Standard bakgrundsfärg för hela applikationen
      paper: '#ffffff', // Bakgrundsfärg för kort och dialoger
      button: '#e8e8e8', // Bakgrundsfärg för knappar eller andra ytor
    },
    text: {
      primary: '#000000', // Standard textfärg
      secondary: '#b3b3b3', // Textfärg för mindre viktig text
    },
    action: {
      hover: '#e0e0e0', // Färg för hover-effekter
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif', // Teckensnitt för hela appen
    fontWeightLight: 300, // Vikt för lätt text
    fontWeightRegular: 400, // Vikt för vanlig text
    fontWeightMedium: 600, // Vikt för mellanvikt text
    fontWeightBold: 800, // Vikt för fet text
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff', // Standard bakgrundsfärg för knappar
          color: '#000000', // Textfärg för knappar
          '&:hover': {
            backgroundColor: '#d6d6d6', // Hover-effekt för knappar
          },
        },
      },
    },
  },
});

export default materialTheme;
