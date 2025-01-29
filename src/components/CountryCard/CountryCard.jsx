import React from 'react';
import { Box, Typography, Button, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const skeletonStyle = {
    borderRadius: '8px', 
    height: '30px', 
    width: '60px',
};

const CountryCard = ({ country, handleBorderClick, loading }) => {
    const theme = useTheme();

    const nativeName = country?.name?.nativeName
        ? Object.values(country.name.nativeName)[0].common
        : 'N/A';
    const topLevelDomain = country?.tld ? country.tld.join(', ') : 'N/A';

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
                marginTop: '32px',
            }}
        >
            <Box sx={{ width: '1150px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <Box sx={{ margin: '64px 32px 0 0', width: '543px' }}>
                        {loading ? (
                            <Skeleton
                                variant="rectangular"
                                width="100%"
                                height="300px"
                                sx={skeletonStyle}
                            />
                        ) : (
                            <img
                                src={country?.flags?.png}
                                alt={`${country?.name?.common} flag`}
                                style={{ borderRadius: '8px', width: '100%' }}
                            />
                        )}
                    </Box>
                    <Box sx={{ flex: 1, width: '543px', margin: '64px 0 0 32px' }}>
                    <Typography variant="h3" sx={{ marginBottom: '16px', display: 'block' }}>
    {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Skeleton variant="rectangular" width="50%" sx={{ borderRadius: '8px', height: '33px' }} />
        </Box>
    ) : (
        country?.name?.common
    )}
</Typography>
                        <Box>
                            <DetailsSection
                                details={[
                                    {
                                        label: 'Population',
                                        value: country?.population
                                            ? country.population.toLocaleString()
                                            : 'N/A',
                                    },
                                    { label: 'Region', value: country?.region || 'N/A' },
                                    {
                                        label: 'Capital',
                                        value: country?.capital?.[0] || 'N/A',
                                    },
                                    { label: 'Native Name', value: nativeName },
                                    { label: 'Top Level Domain', value: topLevelDomain },
                                    {
                                        label: 'Currencies',
                                        value: country?.currencies
                                            ? Object.values(country.currencies)
                                                  .map((c) => c.name)
                                                  .join(', ')
                                            : 'N/A',
                                    },
                                    {
                                        label: 'Languages',
                                        value: country?.languages
                                            ? Object.values(country.languages).join(', ')
                                            : 'N/A',
                                    },
                                ]}
                                loading={loading}
                            />
                            <BorderCountries
                                borders={country?.borders}
                                handleBorderClick={handleBorderClick}
                                loading={loading}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const DetailsSection = ({ details, loading }) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '30px' }}>
        <Box sx={{ width: '50%' }}>
            {details.slice(0, 4).map(({ label, value }, index) => (
                <DetailItem key={index} label={label} value={value} loading={loading} />
            ))}
        </Box>
        <Box sx={{ width: '50%' }}>
            {details.slice(4).map(({ label, value }, index) => (
                <DetailItem key={index} label={label} value={value} loading={loading} />
            ))}
        </Box>
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
    <Box sx={{ display: 'flex',  }}>
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <strong>Border Countries:</strong>
        </Typography>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: 'auto',
                
                gap:'10px',
                
            }}
        >
            {loading ? (
                // Renderar två Skeleton komponenter med gemensam stil
                <>
                    <Skeleton variant="rectangular" sx={skeletonStyle} />
                    <Skeleton variant="rectangular" sx={skeletonStyle} />
                </>
            ) : borders && borders.length > 0 ? (
                borders.map((borderCountryCode) => (
                    <Button
                        key={borderCountryCode}
                        onClick={() => handleBorderClick(borderCountryCode)}
                        sx={{
                            borderRadius: '16px',
                            backgroundColor: 'background.paper',
                            whiteSpace: 'nowrap',
                            boxShadow: 'none',
                            border: '1px solid #ddd',
                            '&:hover': {
                                backgroundColor: '#b5b5b5',
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

export default CountryCard;
