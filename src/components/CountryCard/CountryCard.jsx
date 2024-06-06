import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

// CountryCard.js
const CountryCard = ({ country }) => {
  const [flagUrl, setFlagUrl] = useState('');

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${country.name.common}`);
        const data = await response.json();
        const flag = data[0].flags.png;
        setFlagUrl(flag);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFlag();
  }, [country.name.common]);

  return (
    <Card sx={{ 
      textAlign: 'center',
      backgroundColor: 'background.default',
    }}>
      <CardContent>
        {flagUrl ? (
          <CardMedia
            component="img"
            height="140"
            image={flagUrl}
            alt={`${country.name.common} flag`}
          />
        ) : (
          <Typography>Loading flag...</Typography>
        )}
        <Typography variant="h6" sx={{ mt: 2 }}>{country.name.common}</Typography>
      </CardContent>
    </Card>
  );
};


export default CountryCard;
