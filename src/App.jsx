import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import CountryGrid from './components/CountryCard/CountryGrid';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Test from './components/Test/Test';

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
      justifyContent: 'flex-start',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
    }}>
      <Header />
      <SearchBar age={age} handleChange={handleChange} />
      <Box className="country-list" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
      }}>
        <Container>
          <Typography variant="h4" gutterBottom>
            {/* Any additional text you want to add */}
          </Typography>
          <CountryGrid countries={countries} />
        </Container>
      </Box>
    </Box>
  );
}
