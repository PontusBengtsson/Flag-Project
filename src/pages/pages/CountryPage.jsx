import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // För att få åtkomst till temat
import CountryCard from '../../components/CountryCard/CountryCard';

const CountryPage = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme(); // Använd temat

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [countryCode]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  const handleBorderClick = (borderCountryCode) => {
    navigate(`/country/${borderCountryCode}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return country ? (
    <Box sx={{ padding: '16px' }}>
      {/* Back-knapp */}
      {/* <Button
        onClick={handleBackClick}
        sx={{
          marginBottom: '16px',
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary, // Anpassa textfärgen efter temat
          '&:hover': {
            backgroundColor: theme.palette.action.hover, // Lättare färg vid hover
          },
        }}
      >
        Back
      </Button> */}
      <CountryCard
        country={country}
        handleBorderClick={handleBorderClick}
        handleBackClick={handleBackClick}
      />
    </Box>
  ) : (
    <Typography>Country not found</Typography>
  );
};

export default CountryPage;
