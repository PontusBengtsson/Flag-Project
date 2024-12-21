import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CountryCards from '../../components/CountryCards/CountryCards';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import CountryPage from '../CountryPage/CountryPage';
import Dropdown from '../../components/Dropdown/Dropdown';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState('');
  const [search, setSearch] = useState('');

  const location = useLocation();

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
      filtered = filtered.filter(country => country.region === region);
    }

    if (search) {
      filtered = filtered.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(filtered);
  };

  return (
    <Box
      className="App"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: '25px',
        margin: '0px',
        padding: '0px'
      }}
    >
      
      <Header />
      <Box sx={{width: '60%',}}>
      <Box className="SearchDropdown" sx={{
        display: 'flex',
        flexDirection: 'row',
        
        justifyContent: 'space-between',
        width: '100%',
       
       
        
        margin: '40px, 40px'

      }}>
      {location.pathname === "/" && <SearchBar setSearch={setSearch} />}
      {location.pathname === "/" && <Dropdown setRegion={setRegion}  />}
      </Box>
      
      <Routes>
        <Route path="/" element={<CountryCards countries={filteredCountries} />} />
        <Route path="/country/:countryCode" element={<CountryPage />} />
      </Routes>
      </Box>
    </Box>
    
  );
};

const App = () => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
