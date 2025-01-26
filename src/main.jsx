import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import Header from '../src/components/Header/Header'; 
import { lightTheme, darkTheme } from './theme/material-theme';

const Root = () => {
  
  const savedTheme = localStorage.getItem('isDarkMode');
  
  
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;


  const [isDarkMode, setIsDarkMode] = useState(savedTheme === null ? prefersDarkMode : JSON.parse(savedTheme));


  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode); 
    localStorage.setItem('isDarkMode', JSON.stringify(newMode)); 
  };

  useEffect(() => {
    
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    console.log('Current theme:', isDarkMode ? 'Dark' : 'Light');
  }, [isDarkMode]); 

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline /> 
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
