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
	const nativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A';
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
				alignItems: 'center',
				marginTop: '32px',
				width: '100%'
			}}
		>
			
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center', // Centrerar horisontellt
					width: '60%',
					gap: 10,
					flexDirection: 'column'
				}}
			>
				<Box
	sx={{
		
	}}
>
<Button
	variant="contained"
	onClick={() => navigate('/')}
	startIcon={
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32.242 18.693">
			<g id="Group_1069" data-name="Group 1069" transform="translate(-202.723 -137.717)">
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
		backgroundColor: 'white', // Sätt bakgrund till vit
		color: 'black', // Sätt textfärg till svart
		boxShadow: 'none', // Ta bort skugga
		 padding: '5px',// Justera padding
		textTransform: 'none', // Håll text i normal case
		'&:hover': {
			backgroundColor: 'background.paper', // Ljusgrå färg vid hover
		},
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
						gap: 10,
						width: '100%',
						height: '350px',
						borderRadius: '8px',
                        objectFit: 'contain',
                        overflow:'hidden'
					}}
				>
					<img
						src={country.flags.png}
						alt={`${country.name.common} flag`}
						style={{
							width: '50%', // Ange en specifik bredd
							height: 'auto', // Bevara proportionerna
							borderRadius: '8px',
                            
							 // Gör att bilden täcker sin yta proportionellt
						}}
					/>

					<Box sx={{ display: 'flex', flexDirection: 'column', width: '50%', gap: '30px' }}>
						<Typography variant="h4">{country.name.common}</Typography>
						<Box sx={{ display: 'flex', gap: '10px' }}>
							<Box sx={{ width: '100%' }}>
								<Box sx={{ display: 'flex', gap: '5px', mb: 1 }}>
									<Typography variant="body1">
										<strong>Population:</strong>
									</Typography>
									<Typography variant="body1">{country.population.toLocaleString()}</Typography>
								</Box>
								<Box sx={{ display: 'flex', gap: '5px', mb: 1 }}>
									<Typography variant="body1">
										<strong>Region:</strong>
									</Typography>
									<Typography variant="body1">{country.region}</Typography>
								</Box>
								<Box sx={{ display: 'flex', gap: '5px', mb: 1 }}>
									<Typography variant="body1">
										<strong>Capital:</strong>
									</Typography>
									<Typography variant="body1">
										{country.capital ? country.capital[0] : 'N/A'}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', gap: '5px', mb: 1 }}>
									<Typography variant="body1">
										<strong>Native Name:</strong>
									</Typography>
									<Typography variant="body1">{nativeName}</Typography>
								</Box>
							</Box>
							<Box sx={{ width: '100%' }}>
								<Box sx={{ display: 'flex', gap: '5px', mb: 1 }}>
									<Typography variant="body1">
										<strong>Top Level Domain:</strong>
									</Typography>
									<Typography variant="body1">{topLevelDomain}</Typography>
								</Box>
								<Box sx={{ display: 'flex', gap: '5px', mb: 1 }}>
									<Typography variant="body1">
										<strong>Currencies:</strong>
									</Typography>
									<Typography variant="body1">
										{Object.values(country.currencies)
											.map((c) => c.name)
											.join(', ')}
									</Typography>
								</Box>
								<Box sx={{ display: 'flex', gap: '5px', mb: 1 }}>
									<Typography variant="body1">
										<strong>Languages:</strong>
									</Typography>
									<Typography variant="body1">
										{Object.values(country.languages).join(', ')}
									</Typography>
								</Box>
							</Box>
						</Box>

						<Box
							sx={{
								display: 'flex',
								flexWrap: 'nowrap',
								gap: '10px',
								overflowX: 'auto',
								width: '100%',
								alignItems: 'center'
							}}
						>
							<Typography variant="body1">
								<strong>Border Countries:</strong>
							</Typography>
							{country.borders ? (
								country.borders.map((borderCountryCode) => (
									<Button
										key={borderCountryCode}
										onClick={() => handleBorderClick(borderCountryCode)}
										sx={{
											backgroundColor: 'background.paper',
                                            borderRadius:'16px',
                                            
											color: 'black',
                                                
											'&:hover': {
												backgroundColor: 'lightgray'
											}
										}}
									>
										{borderCountryCode}
									</Button>
								))
							) : (
								<Typography>No border countries</Typography>
							)}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default CountryPage;
