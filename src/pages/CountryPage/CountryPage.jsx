import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const CountryPage = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const data = await response.json();
        setCountry(data[0]); // `data` is an array with one country object
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountry();
  }, [countryCode]);

  if (!country) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 3,
        padding: 3,
      }}
    >
      <Button variant="contained" onClick={() => navigate(-1)} sx={{ alignSelf: 'flex-start' }}>
        Back
      </Button>
      <Typography variant="h4">{country.name.common}</Typography>
      <img
        src={country.flags.png}
        alt={`${country.name.common} flag`}
        style={{ width: '50%', height: 'auto', borderRadius: '8px' }}
      />
      <Typography variant="body1">Population: {country.population.toLocaleString()}</Typography>
      <Typography variant="body1">Region: {country.region}</Typography>
      <Typography variant="body1">Capital: {country.capital ? country.capital[0] : 'N/A'}</Typography>
      <Typography variant="body1">Subregion: {country.subregion}</Typography>
      <Typography variant="body1">Area: {country.area.toLocaleString()} km²</Typography>
      <Typography variant="body1">Timezones: {country.timezones.join(', ')}</Typography>
      <Typography variant="body1">Currencies: {Object.values(country.currencies).map(c => c.name).join(', ')}</Typography>
      <Typography variant="body1">Languages: {Object.values(country.languages).join(', ')}</Typography>
    </Box>
  );
};

export default CountryPage;
