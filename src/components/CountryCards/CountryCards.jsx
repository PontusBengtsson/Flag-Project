import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CountryCards = ({ countries }) => {
  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px',
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: '0px',
        overflowX: 'hidden'
      }}
      className="countries-container"
    >
      {countries.map((country) => (
        <Link 
          className="country-card"
          sx={{
            flexBasis: 'calc(25% - 40px)', // Four countries per row, compensating for gap
            maxWidth: 'calc(25% - 40px)', // Max width to keep four countries per row
            backgroundColor: 'white',
            padding: '0px 0px 10px 0px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer'
          }}
          key={country.cca3}
          to={`/country/${country.cca3}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Box>
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              style={{ width: '100%', height: '50%', borderRadius: '8px 8px 0 0' }}
            />
            <h3>{country.name.common}</h3>
            <p>Population: {country.population.toLocaleString()}</p>
            <p>Region: {country.region}</p>
            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
          </Box>
        </Link>
      ))}
    </Box>
  );
};

export default CountryCards;
