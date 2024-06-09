import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const CountryCard = ({ country }) => {
  const [flagUrl, setFlagUrl] = useState('');
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country.name.common}`);
        const data = await response.json();
        const countryInfo = data[0];
        setFlagUrl(countryInfo.flags.png);
        setCountryData(countryInfo);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountryData();
  }, [country.name.common]);

  return (
    <Card sx={{ 
      textAlign: 'center',
      backgroundColor: 'background.default',
      width: '100%', 
    }}>
      <CardContent sx={{ padding: 0 }}> 
        {flagUrl ? (
          <CardMedia
            component="img"
            height="140"
            image={flagUrl}
            alt={`${country.name.common} flag`}
          />
        ) : (
          <Typography>Loading...</Typography>
        )}
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
      </CardContent>
    </Card>
  );
};

export default CountryCard;
