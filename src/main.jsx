import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import Header from '../src/components/Header/Header'; // Importera Header-komponenten
import { lightTheme, darkTheme } from './theme/material-theme';

const Root = () => {
  // Försök att hämta användarens sparade preferens för tema från localStorage
  const savedTheme = localStorage.getItem('isDarkMode');
  
  // Om inget tema är sparat i localStorage, använd systemets preferens
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Använd systemets tema som fallback om inget sparat tema finns
  const [isDarkMode, setIsDarkMode] = useState(savedTheme === null ? prefersDarkMode : JSON.parse(savedTheme));

  // Funktion för att växla mellan mörkt och ljust tema
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode); // Uppdatera state
    localStorage.setItem('isDarkMode', JSON.stringify(newMode)); // Spara det nya temat i localStorage
  };

  useEffect(() => {
    // Uppdatera body-class för att kunna styla direkt via CSS
    document.body.classList.toggle('dark-mode', isDarkMode);
    // Logga aktuellt tema (valfritt)
    console.log('Current theme:', isDarkMode ? 'Dark' : 'Light');
  }, [isDarkMode]); // Effekt körs varje gång isDarkMode ändras

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* Säkerställer att tema tillämpas globalt */}
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
