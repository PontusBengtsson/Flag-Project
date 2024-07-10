import React from 'react';
import { Box } from '@mui/material';
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
				width: '100%',
				margin: '0 auto',
				display: 'flex',
				flexFlow: 'wrap',
				gap: '40px',
				justifyContent: 'center',
				padding: '0px',
				overflowX: 'hidden'
			}}
			className="countries-container"
		>
			{sortedCountries.map((country) => (
				<Link
					className="country-card"
					sx={{}}
					key={country.cca3}
					to={`/country/${country.cca3}`}
					style={{ textDecoration: 'none', color: 'inherit' }}
				>

{/* box-sizing: border-box;
    display: flex;
    flex-flow: wrap;
    margin-top: -32px;
    width: calc(100% + 32px);
    margin-left: -32px;
    row-gap: 32px; */}
					<Box
						sx={{
							backgroundColor: 'white',
							// flexBasis: 'calc(100% - 80px)', // Four countries per row, compensating for gap
							// width: '80%',
							height: '100%', // Max width to keep four countries per row
							padding: '0px 0px 10px 0px',
							borderRadius: '8px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							textAlign: 'center',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							cursor: 'pointer'
						}}
					>
						<img
							src={country.flags.png}
							alt={`${country.name.common} flag`}
							style={{ width: '100%', height: '50%', borderRadius: '8px 8px 0 0' }}
						/>
						<Box sx={{ height: '50%' }}>
							<h3>{country.name.common}</h3>
							<p>Population: {country.population.toLocaleString()}</p>
							<p>Region: {country.region}</p>
							<p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
						</Box>
					</Box>
				</Link>
			))}
		</Box>
	);
};

export default CountryCards;
