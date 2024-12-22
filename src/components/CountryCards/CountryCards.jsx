import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CountryCards = ({ countries }) => {
  // Sort countries alphabetically by their common name
  const sortedCountries = countries.sort((a, b) => {
    if (a.name.common < b.name.common) return -1;
    if (a.name.common > b.name.common) return 1;
    return 0;
  });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '0px', // Space around the content
        boxSizing: 'border-box',
        
      }}
    >
      <Box
        sx={{
          width: '60%', // Constrain content to 60% of the screen width
          
        }}
      >
        <Grid container spacing={4}>
          {sortedCountries.map((country) => (
            <Grid
              item
              xs={12} sm={6} md={4} lg={3}
              key={country.cca3}
            >
              <Link
                to={`/country/${country.cca3}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: 'white',
                    width: '100%',
                    cursor: 'pointer',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '0px',
                    marginBottom: '25px'
                  }}
                >
                  <img
                    src={country.flags.png}
                    alt={`${country.name.common} flag`}
                    style={{
                      width: '100%',
                      height: '140px',
                      objectFit: 'cover',
                    }}
                  />
                  <Box sx={{ padding: '16px' }}>
                    <Typography variant="h6" sx={{ marginBottom: '8px' }}>
                      {country.name.common}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Population:</strong> {country.population.toLocaleString()}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Region:</strong> {country.region}
                    </Typography>
                    <Typography variant="body1">
                      <strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CountryCards;
