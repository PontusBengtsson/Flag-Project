import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CountryCards from '../components/CountryCards/CountryCards';
import SecondHeader from '../components/SecondHeader/SecondHeader';
import CountryPage from './CountryPage';
import '../index.css';

const AppContent = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Manage loading state here
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const showSecondHeader = location.pathname === '/';

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
        setIsLoading(false); // Data is fetched, set loading to false
      } catch (error) {
        console.error(error);
        setErrorMessage('Failed to load countries.');
        setIsLoading(false); // In case of an error, stop loading
      }
    };

    fetchCountries();
  }, []); // Empty array means this effect runs once on mount

  useEffect(() => {
    filterCountries();
  }, [region, search]); // Filter countries when region or search changes

  const filterCountries = () => {
    let filtered = countries;

    if (region) {
      filtered = filtered.filter((country) => country.region === region);
    }

    if (search) {
      filtered = filtered.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()));
    }

    setFilteredCountries(filtered);

    if (filtered.length === 0 && search !== '') {
      setErrorMessage('Could not find that country!');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <Box>
      {showSecondHeader && <SecondHeader setRegion={setRegion} setSearch={setSearch} isLoading={isLoading} />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              {errorMessage && (
                <Box sx={{ textAlign: 'center', color: 'red', marginBottom: '16px' }}>
                  <strong>{errorMessage}</strong>
                </Box>
              )}
              <CountryCards countries={filteredCountries} loading={isLoading} />
            </>
          }
        />
        <Route
          path="/country/:countryCode"
          element={<CountryPage setRegion={setRegion} setSearch={setSearch} />}
        />
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
