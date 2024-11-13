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
					onClick={() => navigate(-1)} 
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
					width: '90%', // Anpassar bredden för bättre responsivitet
					maxWidth: '600px', // Sätter en maxbredd så att kortet inte blir för stort
					borderRadius: '8px',
				}}
			>
				<img
					src={country.flags.png}
					alt={`${country.name.common} flag`}
					style={{ width: '50%', height: 'auto', borderRadius: '8px' }}
				/>
				<Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', gap: '15px' }}>
					<Typography variant="h4">{country.name.common}</Typography>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
						<Typography variant="body1"><strong>Population:</strong>  {country.population.toLocaleString()}</Typography>
						<Typography variant="body1"><strong>Region:</strong> {country.region}</Typography>
						<Typography variant="body1"><strong>Capital:</strong>  {country.capital ? country.capital[0] : 'N/A'}</Typography>
						<Typography variant="body1"><strong>Native Name:</strong> {nativeName}</Typography>
						<Typography variant="body1"><strong>Top Level Domain:</strong> {topLevelDomain}</Typography>
						<Typography variant="body1">
							<strong>Currencies:</strong> {' '}
							{Object.values(country.currencies)
								.map((c) => c.name)
								.join(', ')}
						</Typography>
						<Typography variant="body1"><strong>Languages:</strong>  {Object.values(country.languages).join(', ')}</Typography>
					</Box>
					<Typography variant="body1"><strong>Border Countries:</strong> {country.borders ? country.borders.join(', ') : 'This country has no border Border Countries'}</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default CountryPage;
