import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountryCards from '../../components/CountryCards/CountryCards';
import Header from '../../components/Header/Header';
import SecondHeader from '../../components/SecondHeader/SecondHeader';
import CountryPage from '../CountryPage/CountryPage';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data); // Initialize with all countries
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    filterCountries();
  }, [region, search]);

  const filterCountries = () => {
    let filtered = countries;

    if (region) {
      filtered = filtered.filter((country) => country.region === region);
    }

    if (search) {
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  };

  return (
    <Router>
      <Box>
        <Header />
        <SecondHeader setRegion={setRegion} setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={<CountryCards countries={filteredCountries} />}
          />
          <Route path="/country/:countryCode" element={<CountryPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default Home;
