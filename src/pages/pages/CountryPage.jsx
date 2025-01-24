import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CountryCard from '../../components/CountryCard/CountryCard';

const SkeletonBox = ({ width, height, sx = {} }) => (
  <Skeleton variant="rectangular" width={width} height={height} sx={{ borderRadius: '4px', ...sx }} />
);

const CountryPage = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const theme = useTheme(); // Använd useTheme för att få åtkomst till temat

  // Logga temats läge för felsökning
  useEffect(() => {
    console.log('Current theme mode:', theme.palette.mode);
  }, [theme]);

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        console.log('Fetching country with countryCode: ', countryCode);
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        if (!response.ok) {
          throw new Error('Failed to fetch country data');
        }
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
    navigate('/');
  };

  const handleBorderCountryClick = (borderCountryCode) => {
    navigate(`/country/${borderCountryCode}`);
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ marginTop: '32px', width: '1150px' }}>
          <SkeletonBox width="20%" sx={{ padding: '17px', marginBottom: '96px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <SkeletonBox width={543} height={389} sx={{ marginRight: '64px' }} />
            <Box sx={{ width: '543px', flexDirection: 'column' }}>
              <SkeletonBox width="50%" height={56} sx={{ marginBottom: '16px' }} />
              <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', marginBottom: '30px' }}>
                {[...Array(4)].map((_, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      gap: '10px',
                      marginLeft: i === 0 ? 0 : '20px'
                    }}
                  >
                    {[...Array(4 - i)].map((_, j) => (
                      <SkeletonBox key={j} />
                    ))}
                  </Box>
                ))}
              </Box>
              <SkeletonBox width="100%" sx={{ padding: '20px', marginTop: '50px' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  if (!country) {
    return (
      <Box sx={{ padding: '16px', marginTop: '32px', textAlign: 'center' }}>
        <Typography variant="h6">Failed to load country data. Please try again later.</Typography>
      </Box>
    );
  }

  // Kontrollera om mörkt läge är aktivt
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '32px' }}>
      <Box sx={{ width: '1150px' }}>
      <Button
  variant="contained"
  onClick={handleBackClick}
  sx={{
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    boxShadow: 'none',
    padding: '5px',
    
    textTransform: 'none',
    '&:hover': {
      backgroundColor: "#b5b5b5"
    },
    display: 'flex',  // Gör så att innehållet (ikonen och texten) kan justeras horisontellt
    alignItems: 'center' // Centrerar innehållet vertikalt i knappen
  }}
>
  {/* Använd isDarkMode för att byta färg på pilen */}
  {isDarkMode ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="32.242" height="18.693" viewBox="0 0 32.242 18.693">
      <g id="Group_1069" data-name="Group 1069" transform="translate(-202.723 -137.717)">
        <path
          id="Path_278"
          data-name="Path 278"
          d="M16475.775,1222.011l-8.639,8.639,8.639,8.639"
          transform="translate(-16263 -1083.587)"
          fill="none"
          stroke={theme.palette.text.primary}
          strokeWidth="2"
        />
        <line
          id="Line_68"
          data-name="Line 68"
          x1="30.57"
          transform="translate(204.395 147.155)"
          fill="none"
          stroke={theme.palette.text.primary}
          strokeWidth="2"
        />
      </g>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="32.242" height="18.693" viewBox="0 0 32.242 18.693">
      <g id="arrow-left" transform="translate(-202.723 -137.717)">
        <path
          id="Path_278"
          data-name="Path 278"
          d="M16475.775,1222.011l-8.639,8.639,8.639,8.639"
          transform="translate(-16263 -1083.587)"
          fill="none"
          stroke={theme.palette.text.primary}
          stroke-width="2"
        />
        <line
          id="Line_68"
          data-name="Line 68"
          x1="30.57"
          transform="translate(204.395 147.155)"
          fill="none"
          stroke={theme.palette.text.primary}
          stroke-width="2"
        />
      </g>
    </svg>
  )}

  <span style={{ marginLeft: '5px' }}>BACK</span> {/* Lägg till 5px mellanrum mellan pilen och texten */}
</Button>

        <CountryCard
          country={country}
          handleBackClick={handleBackClick}
          handleBorderClick={handleBorderCountryClick}
        />
      </Box>
    </Box>
  );
};

export default CountryPage;
