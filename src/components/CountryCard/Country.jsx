import React from 'react';
import { Box } from '@mui/material';

const Country = ({ countries }) => {
  return (
    <Box sx={{
      width: '70%', // Ändra bredden så att den täcker 80% av skärmen
      margin: '0 auto', // Centrera boxen horisontellt
      display: 'flex',
      flexWrap: 'wrap',
      gap: '40px',
      backgroundColor: 'green',
      justifyContent: 'center',
      padding: '20px', // Lägg till lite padding för bättre utseende
    }} className="countries-container">
      {countries.map((country) => (
        <Box className="country-card" key={country.cca3} sx={{
          width: '20%', // Gör varje landkort större
          gap: '0px',
          backgroundColor: 'white',
          padding: '0px 0px 10px 0px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          textAlign: 'center', // Centrera textinnehållet
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <img src={country.flags.png} alt={`${country.name.common} flag`} style={{ width: '100%', height: '50%', borderRadius: '8px 8px 0 0' }} />
          <h3>{country.name.common}</h3>
          <p>Population: {country.population.toLocaleString()}</p>
          <p>Region: {country.region}</p>
          <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
        </Box>
      ))}
    </Box>
  );
};

export default Country;
