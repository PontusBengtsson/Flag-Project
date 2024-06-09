import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import CountryGrid from './components/CountryCard/CountryGrid';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

export default function App() {
  const [countries, setCountries] = useState([]);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
      gap: '25px'
    }}>
      <Header />
      <SearchBar age={age} handleChange={handleChange} />
      <Container sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CountryGrid countries={countries} />
      </Container>
    </Box>
  );
}
