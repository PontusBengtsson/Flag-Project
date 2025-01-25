import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CountryCards from '../../components/CountryCards/CountryCards';
import SecondHeader from '../../components/SecondHeader/SecondHeader';
import CountryPage from './CountryPage';
import "../../index.css";

const AppContent = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true); 

  const location = useLocation();
  const showSecondHeader = location.pathname === '/';

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false); 
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
    <Box>
      {showSecondHeader && (
        <SecondHeader
          setRegion={setRegion}
          setSearch={setSearch}
          isLoading={isLoading} 
        />
      )}
      <Routes>
        <Route path="/" element={<CountryCards countries={filteredCountries} isLoading={isLoading} />} />
        <Route path="/country/:countryCode" element={<CountryPage />} />
      </Routes>
    </Box>
  );
};

const HomePage = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default HomePage;