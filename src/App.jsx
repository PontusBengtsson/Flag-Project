import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import CountryCards from './components/CountryCards/CountryCards';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CountryPage from './pages/CountryPage/CountryPage';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Box className="App" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      gap: '35px'
    }}>
      {/* <Header />
      <SearchBar />
      <CountryCards countries={countries}/> */}
     <CountryPage />
      
    </Box>
  );
}
