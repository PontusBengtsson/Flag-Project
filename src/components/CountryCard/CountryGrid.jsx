import React from 'react';
import { Grid, Box } from '@mui/material';
import CountryCard from './CountryCard';

const CountryGrid = ({ countries }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={5} justifyContent="center">
        {countries.map((country) => (
          <Grid item key={country.cca3} xs={12} sm={6} md={4} lg={3}>
            <CountryCard country={country} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CountryGrid;
