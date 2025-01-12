import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CountryCards = ({ countries }) => {
	// Sort countries alphabetically by their common name
	const sortedCountries = countries.sort((a, b) => {
		if (a.name.common < b.name.common) return -1;
		if (a.name.common > b.name.common) return 1;
		return 0;
	});

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '0px', // Space around the content
				boxSizing: 'border-box'
			}}
		>
			<Box
				sx={{
					width: '1150px' // Constrain content to 60% of the screen width
				}}
			>
				<Grid container spacing={4}>
					{sortedCountries.map((country) => (
						<Grid item xs={12} sm={6} md={4} lg={3} key={country.cca3}>
							<Link
								to={`/country/${country.cca3}`}
								style={{
									textDecoration: 'none',
									color: 'inherit'
								}}
							>
								<Box
									sx={{
										
										width: '100%',
										cursor: 'pointer',
										borderRadius: '4px',
										boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.1)',
										overflow: 'hidden',
										display: 'flex',
										flexDirection: 'column',
										padding: '0px',
										marginBottom: '25px'
									}}
								>
									<img
										src={country.flags.png}
										alt={`${country.name.common} flag`}
										style={{
											width: '100%',
											height: '140px',
											objectFit: 'cover'
										}}
									/>
									<Box sx={{ padding: '16px' }}>
										<Box sx={{ margin: '0px 0px 0.35em' }}>
											<Typography
												variant="h7"
												sx={{ marginBottom: '8px', fontWeight: '600' }}
											>
												{country.name.common}
											</Typography>
										</Box>
										<Typography variant="body2">
											<strong>Population:</strong> {country.population.toLocaleString()}
										</Typography>
										<Typography variant="body2">
											<strong>Region:</strong> {country.region}
										</Typography>
										<Typography variant="body2">
											<strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}
										</Typography>
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
