import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const CountryPage = () => {
	const { countryCode } = useParams();
	const navigate = useNavigate();
	const [country, setCountry] = useState(null);

	useEffect(() => {
		const fetchCountry = async () => {
			try {
				const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
				const data = await response.json();
				setCountry(data[0]); // `data` is an array with one country object
			} catch (error) {
				console.error(error);
			}
		};

		fetchCountry();
	}, [countryCode]);

	if (!country) {
		return <Typography>Loading...</Typography>;
	}

	// Extrahera det första native name och top-level domains
	const nativeName = country.name.nativeName 
		? Object.values(country.name.nativeName)[0].common 
		: 'N/A';
	const topLevelDomain = country.tld ? country.tld.join(', ') : 'N/A';

	const handleBorderClick = (borderCountryCode) => {
		// Navigera till den valda landets sida
		navigate(`/country/${borderCountryCode}`);
	};

	return (
		<Box 
			sx={{ 
				display: 'flex', 
				flexDirection: 'column', 
				alignItems: 'center', // Centrerar innehållet horisontellt
				justifyContent: 'center', // Centrerar innehållet vertikalt
				gap: 4,
			}}
		>
			<Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
				<Button 
					variant="contained" 
					onClick={() => navigate('/')} 
					sx={{ alignSelf: 'flex-start' }}
				>
					Back
				</Button>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 3,
					padding: 3,
					backgroundColor: 'green',
					width: '100%', // Anpassar bredden för bättre responsivitet
					maxWidth: '1000px', // Sätter en maxbredd så att kortet inte blir för stort
					height: '350px',
					borderRadius: '8px',
				}}
			>
				<img
					src={country.flags.png}
					alt={`${country.name.common} flag`}
					style={{ width: '50%', height: 'auto', borderRadius: '8px' }}
				/>
				<Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', gap: '25px' }}>
	<Typography variant="h4">{country.name.common}</Typography>
	<Box sx={{ display: 'flex', gap: '10px' }}>
		<Box sx={{ width: '100%' }}>
			<Box sx={{ display: 'flex', gap: '5px',  mb: 1 }}>
				<Typography variant="body1"><strong>Population:</strong></Typography>
				<Typography variant="body1">{country.population.toLocaleString()}</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '5px',  mb: 1 }}>
				<Typography variant="body1"><strong>Region:</strong></Typography>
				<Typography variant="body1">{country.region}</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '5px',  mb: 1 }}>
				<Typography variant="body1"><strong>Capital:</strong></Typography>
				<Typography variant="body1">{country.capital ? country.capital[0] : 'N/A'}</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '5px',  mb: 1 }}>
				<Typography variant="body1"><strong>Native Name:</strong></Typography>
				<Typography variant="body1">{nativeName}</Typography>
			</Box>
		</Box>
		<Box sx={{ width: '100%' }}>
			<Box sx={{ display: 'flex', gap: '5px',  mb: 1  }}>
				<Typography variant="body1"><strong>Top Level Domain:</strong></Typography>
				<Typography variant="body1">{topLevelDomain}</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '5px',  mb: 1  }}>
				<Typography variant="body1"><strong>Currencies:</strong></Typography>
				<Typography variant="body1">
					{Object.values(country.currencies).map((c) => c.name).join(', ')}
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', gap: '5px',  mb: 1 }}>
				<Typography variant="body1"><strong>Languages:</strong></Typography>
				<Typography variant="body1">{Object.values(country.languages).join(', ')}</Typography>
			</Box>
		</Box>
	</Box>

	<Typography variant="body1"><strong>Border Countries:</strong></Typography>
	<Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '10px', overflowX: 'auto', width: '100%' }}>
		{/* Här skapar vi en knapp för varje gränsland */}
		{country.borders ? country.borders.map((borderCountryCode) => (
			<Button
				key={borderCountryCode}
				variant="outlined"
				onClick={() => handleBorderClick(borderCountryCode)}
				sx={{
					backgroundColor: 'white',
					color: 'black',
					borderColor: 'black', // svart kantlinje
					'&:hover': {
						backgroundColor: 'lightgray',
					},
				}}
			>
				{borderCountryCode}
			</Button>
		)) : <Typography>No border countries</Typography>}
	</Box>
</Box>

			</Box>
		</Box>
	);
};

export default CountryPage;
