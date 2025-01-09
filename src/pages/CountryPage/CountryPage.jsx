import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const CountryPage = () => {
    const { countryCode } = useParams();
    const navigate = useNavigate();
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '32px',
                width: '100%',
            }}
        >
            <Box sx={{ width: '1150px', marginBottom: '64px', flexDirection: 'column', display: 'flex' }}>
                <Box sx={{ mb: 4 }}>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/')}
                        startIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 32.242 18.693"
                            >
                                <g
                                    id="Group_1069"
                                    data-name="Group 1069"
                                    transform="translate(-202.723 -137.717)"
                                >
                                    <path
                                        id="Path_278"
                                        data-name="Path 278"
                                        d="M16475.775,1222.011l-8.639,8.639,8.639,8.639"
                                        transform="translate(-16263 -1083.587)"
                                        fill="none"
                                        stroke="#111517"
                                        strokeWidth="2"
                                    />
                                    <line
                                        id="Line_68"
                                        data-name="Line 68"
                                        x1="30.57"
                                        transform="translate(204.395 147.155)"
                                        fill="none"
                                        stroke="#111517"
                                        strokeWidth="2"
                                    />
                                </g>
                            </svg>
                        }
                        sx={{
                            backgroundColor: 'background.default',
                            color: 'black',
                            boxShadow: 'none',
                            padding: '5px',
                            textTransform: 'none',
                            '&:hover': { backgroundColor: 'background.paper' },
                        }}
                    >
                        BACK
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        
                        width: '100%',
                        height: 'auto',
                    }}
                >
                  <Box sx={{padding: '64px 0px 0px 64px',}}>
				  <img
                        src={country.flags.png}
                        alt={`${country.name.common} flag`}
                        style={{ width: '544px', height: 'auto', borderRadius: '8px', }}
                    />
				  </Box>
                    <CountryDetails country={country} handleBorderClick={handleBorderClick} />
                </Box>
            </Box>
        </Box>
    );
};

const CountryDetails = ({ country, handleBorderClick }) => {
    const nativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A';
    const topLevelDomain = country.tld ? country.tld.join(', ') : 'N/A';

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', gap: '30px',  }}>
            <Typography variant="h3">{country.name.common}</Typography>
            <Box sx={{  }}>
                <Box sx={{ width: '100%' }}>
                    <DetailItem label="Population" value={country.population.toLocaleString()} />
                    <DetailItem label="Region" value={country.region} />
                    <DetailItem label="Capital" value={country.capital ? country.capital[0] : 'N/A'} />
                    <DetailItem label="Native Name" value={nativeName} />
                </Box>
                <Box sx={{ width: '100%' }}>
                    <DetailItem label="Top Level Domain" value={topLevelDomain} />
                    <DetailItem
                        label="Currencies"
                        value={Object.values(country.currencies).map((c) => c.name).join(', ')}
                    />
                    <DetailItem
                        label="Languages"
                        value={Object.values(country.languages).join(', ')}
                    />
                </Box>
            </Box>
            <BorderCountries borders={country.borders} handleBorderClick={handleBorderClick} />
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

const BorderCountries = ({ borders, handleBorderClick }) => (
    <Box sx={{ display: 'flex', flexWrap: 'nowrap', overflowX: 'auto', alignItems: 'center' }}>
        <Typography sx={{ width: '135px' }} variant="body2">
            <strong>Border Countries:</strong>
        </Typography>
        {borders ? (
            borders.map((borderCountryCode) => (
                <Box sx={{ marginLeft: '10px' }} key={borderCountryCode}>
                    <Button
                        onClick={() => handleBorderClick(borderCountryCode)}
                        sx={{
                            backgroundColor: 'background.paper',
                            borderRadius: '16px',
                            color: 'black',
                            '&:hover': {
                                backgroundColor: 'background.paper',
                            },
                        }}
                    >
                        {borderCountryCode}
                    </Button>
                </Box>
            ))
        ) : (
            <Typography>No border countries</Typography>
        )}
    </Box>
);



export default CountryPage;
