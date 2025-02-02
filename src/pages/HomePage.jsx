import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import CountryCards from '../components/CountryCards/CountryCards';
import SecondHeader from '../components/SecondHeader/SecondHeader';
import CountryPage from './CountryPage';
import '../index.css';

const AppContent = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation();

  // Hämta länder
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data);
      } catch {
        setErrorMessage('Failed to load countries.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);

  // Filtrera länder
  useEffect(() => {
    const filterCountries = () => {
      let filtered = countries.filter((country) =>
        (!region || region === 'All' || country.region === region) &&
        (!search || country.name.common.toLowerCase().includes(search.toLowerCase()))
      );
      setFilteredCountries(filtered);
      setErrorMessage(filtered.length ? '' : search ? 'Could not find that country!' : '');
    };
    filterCountries();
  }, [region, search, countries]);

  // Scrolla till toppen varje gång användaren navigerar eller uppdaterar sidan (F5)
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll till toppen
  }, [location]);

  return (
    <Box>
      {/* Visa SecondHeader endast på / */}
      {location.pathname === '/' && <SecondHeader setRegion={setRegion} setSearch={setSearch} region={region} countries={countries} />}
      {errorMessage && <Box sx={{ textAlign: 'center', color: 'red', mb: 2 }}><strong>{errorMessage}</strong></Box>}
      <Routes>
        <Route path="/" element={<CountryCards countries={filteredCountries} loading={isLoading} />} />
        <Route path="/country/:countryCode" element={<CountryPage setRegion={setRegion} setSearch={setSearch} />} />
      </Routes>
    </Box>
  );
};

const HomePage = () => (
  <Router>
    <AppContent />
  </Router>
);

export default HomePage;
