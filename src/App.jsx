import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import Country from './components/CountryCard/Country'; // Make sure the path is correct
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

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
      gap: '40px'
    }}>
      <Header />
      <SearchBar />
      <Country countries={countries}/>
      
    </Box>
  );
}
