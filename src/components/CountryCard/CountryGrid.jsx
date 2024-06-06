import React from 'react';
import { Grid } from '@mui/material';
import CountryCard from './CountryCard'; // Adjust the import path as necessary

// CountryGrid.js
const CountryGrid = ({ countries }) => {
  return (
    <Grid container spacing={8}>
      {countries.map((country) => (
        <Grid item key={country.cca3} xs={12} sm={6} md={4} lg={3}>
          <CountryCard country={country} />
        </Grid>
      ))}
    </Grid>
  );
};


export default CountryGrid;
