import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CountryCard from './components/CountryCard/CountryCard';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Test from './components/Test/Test';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      .catch(error => console.log(error));
  }, []);

  const gridItems = [
    { xs: 6, md: 3, content: 'Flagga' },
    { xs: 6, md: 3, content: 'Flagga' },
    { xs: 6, md: 3, content: 'Flagga' },
    { xs: 6, md: 3, content: 'Flagga' },
  ];

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
      <SearchBar />
      <Test items={gridItems} />
      {/* <Box className="country-list" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: '100%',
      }}>
        {countries.map(country => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </Box> */}
    </Box>
  );
}

export default App;
