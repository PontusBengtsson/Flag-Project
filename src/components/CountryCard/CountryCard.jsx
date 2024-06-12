import React, { useState, useEffect } from 'react';
import { Grid, Box, Card, CardContent, Typography, CardMedia } from '@mui/material';

const CountryGrid = ({ countries }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={10} justifyContent="center">
        {countries.map((country) => (
          <Grid item key={country.cca3} xs={12} sm={6} md={2} lg={3}>
            <CountryCard country={country} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const CountryCard = ({ country }) => {
  const [flagUrl, setFlagUrl] = useState('');
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country.name.common}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const countryInfo = data[0];
        setFlagUrl(countryInfo.flags.png);
        setCountryData(countryInfo);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [country.name.common]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error loading country data.</Typography>;
  }

  return (
    <Card sx={{ 
      textAlign: 'center',
      backgroundColor: 'background.default',
      width: '100%', 
    }}>
      <CardContent sx={{ padding: 0 }}>
        {flagUrl && (
          <CardMedia
            component="img"
            height="140"
            image={flagUrl}
            alt={`${country.name.common} flag`}
            sx={{ width: '100%', objectFit: 'cover' }}
          />
        )}
        <Box sx={{ padding: 0 }}>
          <Typography variant="h6" sx={{ mt: 2 }}>{country.name.common}</Typography>
          {countryData && (
            <>
              <Typography variant="body2" color="textPrimary" sx={{ mt: 1 }}>
                Population: {countryData.population.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Region: {countryData.region}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Capital: {countryData.capital && countryData.capital[0]}
              </Typography>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryGrid;
