import React from 'react';
import { Box, Typography, Button, Skeleton } from '@mui/material';


const skeletonStyle = { borderRadius: '8px', height: '30px', width: '60px' };

const CountryCard = ({ country, handleBorderClick, loading }) => {
  const nativeName = country?.name?.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A';
  const topLevelDomain = country?.tld ? country.tld.join(', ') : 'N/A';

  return (
    <Box sx={{ width: { md: '100%', lg: '1152px' }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '64px', paddingBottom: '160px', marginTop: '64px' }}>
      <Box sx={{ width: { sm: '100%', md: '50%' }, justifyContent: 'flex-start' }}>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={300} sx={skeletonStyle} />
        ) : (
          <img src={country?.flags?.png} alt={`${country?.name?.common} flag`} style={{ borderRadius: '8px', width: '100%' }} />
        )}
      </Box>
      <Box sx={{ width: { sm: '100%', md: '50%' } }}>
        <Typography variant="h3" sx={{ marginBottom: '16px' }}>
          {loading ? <Skeleton variant="rectangular" width="50%" sx={{ borderRadius: '8px', height: '33px' }} /> : country?.name?.common}
        </Typography>
        <DetailsSection
          details={[
            { label: 'Population', value: country?.population?.toLocaleString() || 'N/A' },
            { label: 'Region', value: country?.region || 'N/A' },
            { label: 'Capital', value: country?.capital?.[0] || 'N/A' },
            { label: 'Native Name', value: nativeName },
            { label: 'Top Level Domain', value: topLevelDomain },
            {
              label: 'Currencies',
              value: country?.currencies ? Object.values(country.currencies).map((c) => c.name).join(', ') : 'N/A'
            },
            { label: 'Languages', value: country?.languages ? Object.values(country.languages).join(', ') : 'N/A' }
          ]}
          loading={loading}
        />
        <BorderCountries borders={country?.borders} handleBorderClick={handleBorderClick} loading={loading} />
      </Box>
    </Box>
  );
};

const DetailsSection = ({ details, loading }) => (
  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, marginBottom: '30px' }}>
    {[details.slice(0, 4), details.slice(4)].map((group, i) => (
      <Box key={i} sx={{ width: '100%' }}>
        {group.map((d, index) => <DetailItem key={index} {...d} loading={loading} />)}
      </Box>
    ))}
  </Box>
);

const DetailItem = ({ label, value, loading }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', mb: 1 }}>
    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
      {label}:
    </Typography>
    {loading ? (
      <Skeleton variant="text" width="20%" sx={skeletonStyle} />
    ) : (
      <Typography variant="body1">{value}</Typography>
    )}
  </Box>
);

const BorderCountries = ({ borders, handleBorderClick, loading }) => (
  <Box sx={{ display: 'flex' }}>
    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginRight: '10px', height: '32px' }}>
      <strong>Border Countries:</strong>
    </Typography>
    <Box sx={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', gap: '5px' }}>
      {loading ? (
        [<Skeleton key={1} variant="rectangular" sx={skeletonStyle} />, <Skeleton key={2} variant="rectangular" sx={skeletonStyle} />]
      ) : borders?.length ? (
        borders.map((code) => (
          <Button
            key={code}
            onClick={() => handleBorderClick(code)}
            sx={{ borderRadius: '16px', height: '32px', width: '4px', backgroundColor: 'background.paper', whiteSpace: 'nowrap', boxShadow: 'none', '&:hover': { backgroundColor: '#b5b5b5' } }}
          >
            {code}
          </Button>
        ))
      ) : (
        <Typography sx={{display:'flex', alignItems: 'center'}}variant="rectangular">No border countries</Typography>
      )}
    </Box>
  </Box>
);

export default CountryCard;
