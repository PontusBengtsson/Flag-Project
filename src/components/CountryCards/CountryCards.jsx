import React from 'react';
import { Box, Grid, Typography, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

// Reusable component to display country information
const CountryInfo = ({ label, value, loading, skeletonWidth }) => (
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography variant="body2" sx={{ color: 'text.primary', marginRight: '8px' }}>
      <strong>{label}:</strong>
    </Typography>
    {loading ? (
      <Skeleton width={skeletonWidth} />
    ) : (
      <Typography variant="body2" sx={{ color: 'text.primary' }}>
        {value || 'N/A'}
      </Typography>
    )}
  </Box>
);

const CountryCards = ({ countries, loading }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box sx={{ width: '1150px', margin: '0px' }}>
        <Grid container columnSpacing={4}>
          {countries
            .sort((a, b) => a.name.common.localeCompare(b.name.common))
            .map((country) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3} sx={{ marginBottom: 7 }}>
                <Link to={`/country/${country.cca3}`} style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      width: '100%',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      boxShadow:
                        theme.palette.mode === 'light'
                          ? '0px 8px 16px rgba(0, 0, 0, 0.08)'
                          : '0px 8px 16px rgba(255, 255, 255, 0.08)',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: theme.palette.background.paper,
                    }}
                  >
                    {/* Flag */}
                    {loading ? (
                      <Skeleton variant="rectangular" width="100%" height={140} />
                    ) : (
                      <img
                        src={country.flags.png}
                        alt={`${country.name.common} flag`}
                        style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                      />
                    )}

                    <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      {/* Country Name */}
                      <Typography
                        variant="h7"
                        sx={{
                          fontWeight: '600',
                          color: theme.palette.text.primary,
                          
                        }}
                      >
                        {loading ? <Skeleton width="100%" /> : country.name.common}
                      </Typography>

                      {/* Population */}
                      <CountryInfo label="Population" value={country.population.toLocaleString()} loading={loading} skeletonWidth="60px" />

                      {/* Region */}
                      <CountryInfo label="Region" value={country.region} loading={loading} skeletonWidth="85px" />

                      {/* Capital */}
                      <CountryInfo label="Capital" value={country.capital ? country.capital[0] : 'N/A'} loading={loading} skeletonWidth="85px" />
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
