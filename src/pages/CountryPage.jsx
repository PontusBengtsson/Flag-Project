import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CountryCard from '../components/CountryCard/CountryCard';

const SkeletonBox = ({ width, height, sx = {} }) => (
  <Skeleton variant="rectangular" width={width} height={height} sx={{ borderRadius: '4px', ...sx }} />
);

const CountryPage = ({ setRegion, setSearch }) => {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        if (!response.ok) throw new Error('Failed to fetch country data');
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

  const handleBackClick = () => {
    setRegion('');
    setSearch('');
    navigate('/');
  };

  const handleBorderCountryClick = (borderCountryCode) => navigate(`/country/${borderCountryCode}`);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Box sx={{ width: '1150px', height: 'calc(100vh - 50px)', overflowY: 'auto' }} className="scrollbar-style">
        <Button
          variant="contained"
          onClick={handleBackClick}
          sx={{
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.default,
            boxShadow: 'none',
            p: 1,
            textTransform: 'none',
            '&:hover': { backgroundColor: '#b5b5b5' },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32.242" height="18.693" viewBox="0 0 32.242 18.693">
            <g transform="translate(-202.723 -137.717)">
              <path d="M16475.775,1222.011l-8.639,8.639,8.639,8.639" transform="translate(-16263 -1083.587)" fill="none" stroke={theme.palette.text.primary} strokeWidth="2" />
              <line x1="30.57" transform="translate(204.395 147.155)" fill="none" stroke={theme.palette.text.primary} strokeWidth="2" />
            </g>
          </svg>
          <span style={{ marginLeft: '5px' }}>BACK</span>
        </Button>
        <CountryCard country={country} handleBorderClick={handleBorderCountryClick} loading={loading} />
      </Box>
    </Box>
  );
};

export default CountryPage;
