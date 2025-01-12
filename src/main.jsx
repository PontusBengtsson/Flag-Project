import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from '@mui/material/styles'; // Ändra från @mui/system till @mui/material/styles

import {materialTheme} from './theme/material-theme';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={materialTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
