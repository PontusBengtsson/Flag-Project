import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryCards from '../../components/CountryCards/CountryCards';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import CountryPage from '../CountryPage/CountryPage';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <Router>
      <Box
        className="App"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '35px',
        }}
      >
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<CountryCards countries={countries} />} />
          <Route path="/country/:countryCode" element={<CountryPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Home;
