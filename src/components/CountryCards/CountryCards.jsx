import React from 'react';
import { Box, Grid, Typography, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const SkeletonCard = () => (
  <Box sx={{ backgroundColor: 'background.paper', borderRadius: 2, boxShadow: 1, overflow: 'hidden' }}>
    <Skeleton variant="rectangular" width="100%" height={140} sx={{ borderRadius: '8px' }} />
    <Box sx={{ padding: '16px' }}>
      <Skeleton variant="text" width="10%" sx={{ marginBottom: '8px', borderRadius: '8px' }} />
      <Skeleton variant="text" width="10%" sx={{ marginBottom: '8px', borderRadius: '8px' }} />
      <Skeleton variant="text" width="10%" sx={{ marginBottom: '8px', borderRadius: '8px' }} />
      <Skeleton variant="text" width="10%" sx={{ marginBottom: '8px', borderRadius: '8px' }} />
    </Box>
  </Box>
);

const CountryCard = ({ country, isLoading, theme }) => (
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
      {/* Flagga */}
      {isLoading ? (
        <Skeleton variant="rectangular" width="100%" height={140} sx={{ borderRadius: '8px' }} />
      ) : (
        <img
          src={country.flags.png}
          alt={`${country.name.common} flag`}
          style={{ width: '100%', height: '140px', objectFit: 'cover' }}
        />
      )}
	
      <Box sx={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Landets namn */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: '600',
            color: theme.palette.text.primary,
            marginBottom: '8px',
          }}
        >
          {isLoading ? (
            <Skeleton variant="text" width="60%" sx={{ borderRadius: '8px' }} />
          ) : (
            country.name.common
          )}
        </Typography>

        {/* Population */}
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          <strong>Population:</strong>{' '}
          {isLoading ? (
            <Skeleton variant="text" width="40%" sx={{ borderRadius: '8px' }} />
          ) : (
            country.population.toLocaleString()
          )}
        </Typography>

        {/* Region */}
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          <strong>Region:</strong>{' '}
          {isLoading ? (
            <Skeleton variant="text" width="50%" sx={{ borderRadius: '8px' }} />
          ) : (
            country.region
          )}
        </Typography>

        {/* Capital */}
        <Typography variant="body2" sx={{ color: theme.palette.text.primary }}>
          <strong>Capital:</strong>{' '}
          {isLoading ? (
            <Skeleton variant="text" width="60%" sx={{ borderRadius: '8px' }} />
          ) : (
            country.capital ? country.capital[0] : 'N/A'
          )}
        </Typography>
      </Box>
    </Box>
  </Link>
);

const CountryCards = ({ countries, isLoading }) => {
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
          {isLoading
            ? Array.from({ length: 12 }, (_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} sx={{ marginBottom: 7 }}>
                  <SkeletonCard />
                </Grid>
              ))
            : countries
                .sort((a, b) => a.name.common.localeCompare(b.name.common))
                .map((country) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3} sx={{ marginBottom: 7 }}>
                    <CountryCard country={country} isLoading={isLoading} theme={theme} />
                  </Grid>
                ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CountryCards;
