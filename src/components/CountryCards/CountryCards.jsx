import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CountryCards = ({ countries }) => {
  // Sort countries alphabetically by their common name
  const sortedCountries = countries.sort((a, b) => {
    if (a.name.common < b.name.common) return -1;
    if (a.name.common > b.name.common) return 1;
    return 0;
  });

  return (
    <Container>
      <Grid container spacing={4} className="countries-container">
        {sortedCountries.map((country) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3}>
            <Link
              className="country-card"
              to={`/country/${country.cca3}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Box
                sx={{
                  backgroundColor: 'white',
                  width: '100%',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  
                }}
              >
                <img
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                  style={{ width: '100%', height: '140px', borderRadius: '8px 8px 0 0' }}
                />
                <Box sx={{ padding: '10px' }}>
                  <Typography sx={{marginBottom: '10px'}}variant="h6">{country.name.common}</Typography>
                  <Typography variant="body1" sx={{ fontSize: '1em' }}>
                    <strong>Population:</strong> {country.population.toLocaleString()}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1em' }}>
                    <strong>Region:</strong> {country.region}
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1em' }}>
                    <strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CountryCards;
