import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles'; // Importera temat

const CountryCard = ({ country, handleBorderClick, handleBackClick }) => {
  const theme = useTheme(); // Hämta aktuellt tema
  const nativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A';
  const topLevelDomain = country.tld ? country.tld.join(', ') : 'N/A';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '32px',
      }}
    >
      <Box sx={{ width: '1150px' }}>
        
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box
            sx={{
              padding: '64px 32px 0px 0px',
              width: '50%',
              height: 'auto',
            }}
          >
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              style={{ borderRadius: '8px', width: '100%' }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              width: '50%',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              padding: '64px 0px 0px 32px',
            }}
          >
            <Typography variant="h3" sx={{ marginBottom: '16px' }}>
              {country.name.common}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: '40px',
              }}
            >
              <Box sx={{ width: '50%' }}>
                <DetailItem label="Population" value={country.population.toLocaleString()} />
                <DetailItem label="Region" value={country.region} />
                <DetailItem label="Capital" value={country.capital ? country.capital[0] : 'N/A'} />
                <DetailItem label="Native Name" value={nativeName} />
              </Box>
              <Box sx={{ width: '50%' }}>
                <DetailItem label="Top Level Domain" value={topLevelDomain} />
                <DetailItem
                  label="Currencies"
                  value={Object.values(country.currencies)
                    .map((c) => c.name)
                    .join(', ')}
                />
                <DetailItem label="Languages" value={Object.values(country.languages).join(', ')} />
              </Box>
            </Box>
            <BorderCountries borders={country.borders} handleBorderClick={handleBorderClick} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const DetailItem = ({ label, value }) => (
  <Box sx={{ display: 'flex', gap: '5px', mb: 1 }}>
    <Typography variant="body1">
      <strong>{label}:</strong>
    </Typography>
    <Typography variant="body1">{value}</Typography>
  </Box>
);

const BorderCountries = ({ borders, handleBorderClick }) => {
  const theme = useTheme(); // Hämta temat

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '16px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
      }}
    >
      <Typography
        variant="body2"
        sx={{
          marginRight: '8px',
        }}
      >
        <strong>Border Countries:</strong>
      </Typography>
      <Box
        sx={{
          display: 'flex',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          flexWrap: 'nowrap',
        }}
      >
        {borders && borders.length > 0 ? (
          borders.map((borderCountryCode) => (
            <Button
              key={borderCountryCode}
              onClick={() => handleBorderClick(borderCountryCode)}
              sx={{
                backgroundColor: theme.palette.background.paper, // Grundfärg
                borderRadius: '16px',
                color: theme.palette.text.primary, // Textfärg
                marginRight: '8px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                '&:hover': {
                  backgroundColor: 'background.paper', // Hover-effekt
                },
              }}
            >
              {borderCountryCode}
            </Button>
          ))
        ) : (
          <Typography variant="body2">No border countries</Typography>
        )}
      </Box>
    </Box>
  );
};

export default CountryCard;
