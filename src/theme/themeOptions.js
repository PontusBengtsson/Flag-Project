import { createTheme } from '@mui/material';
import baseTheme from './material-theme';

const themeOptions = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: '#2B3844',
    },
    background: {
      default: '#f2f2f2',
    },
  },
});

export default themeOptions;
