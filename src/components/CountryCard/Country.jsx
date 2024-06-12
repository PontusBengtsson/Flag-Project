import React from 'react';
import { Box } from '@mui/material';

const Country = ({ countries }) => {
	return (
		<Box
			sx={{
				width: '100%',
				margin: '0 auto',
				display: 'flex',
				flexWrap: 'wrap',
				gap: '40px',
				backgroundColor: 'green',
				justifyContent: 'center',
				padding: '0px',
				overflowX: 'hidden'
			}}
			className="countries-container"
		>
			{countries.map((country) => (
				<Box
					className="country-card"
					key={country.cca3}
					sx={{
						flexBasis: 'calc(25% - 40px)', // Fyra länder per rad, med gap-kompensation
						maxWidth: 'calc(25% - 40px)', // Maxbredd för att hålla fyra länder per rad
						backgroundColor: 'white',
						padding: '0px 0px 10px 0px',
						borderRadius: '8px',
						boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
						textAlign: 'center',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}}
				>
					<img
						src={country.flags.png}
						alt={`${country.name.common} flag`}
						style={{ width: '100%', height: '50%', borderRadius: '8px 8px 0 0' }}
					/>
					<h3>{country.name.common}</h3>
					<p>Population: {country.population.toLocaleString()}</p>
					<p>Region: {country.region}</p>
					<p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
				</Box>
			))}
		</Box>
	);
};

export default Country;
