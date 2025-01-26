import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CountryCard = ({ country, handleBorderClick }) => {
	const theme = useTheme();

	const nativeName = country.name.nativeName ? Object.values(country.name.nativeName)[0].common : 'N/A';
	const topLevelDomain = country.tld ? country.tld.join(', ') : 'N/A';

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: '32px'
			}}
		>
			<Box sx={{ width: '1150px' }}>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					<Box sx={{ padding: '64px 32px 0 0', width: '50%' }}>
						<img
							src={country.flags.png}
							alt={`${country.name.common} flag`}
							style={{ borderRadius: '8px', width: '100%' }}
						/>
					</Box>
					<Box sx={{ flex: 1, width: '50%', padding: '64px 0 0 32px' }}>
						<Typography variant="h3" sx={{ marginBottom: '16px' }}>
							{country.name.common}
						</Typography>
						<DetailsSection
							details={[
								{
									label: 'Population',
									value: country.population ? country.population.toLocaleString() : 'N/A'
								},
								{ label: 'Region', value: country.region || 'N/A' },
								{
									label: 'Capital',
									value: country.capital && country.capital[0] ? country.capital[0] : 'N/A'
								},
								{ label: 'Native Name', value: nativeName },
								{ label: 'Top Level Domain', value: topLevelDomain },
								{
									label: 'Currencies',
									value: country.currencies
										? Object.values(country.currencies)
												.map((c) => c.name)
												.join(', ')
										: 'N/A'
								},
								{
									label: 'Languages',
									value: country.languages ? Object.values(country.languages).join(', ') : 'N/A'
								}
							]}
						/>
						<BorderCountries borders={country.borders} handleBorderClick={handleBorderClick} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

const DetailsSection = ({ details }) => (
	<Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '40px' }}>
		<Box sx={{ width: '50%' }}>
			{details.slice(0, 4).map(({ label, value }, index) => (
				<DetailItem key={index} label={label} value={value} />
			))}
		</Box>
		<Box sx={{ width: '50%' }}>
			{details.slice(4).map(({ label, value }, index) => (
				<DetailItem key={index} label={label} value={value} />
			))}
		</Box>
	</Box>
);

const DetailItem = ({ label, value }) => (
	<Box sx={{ display: 'flex', gap: '5px', mb: 1 }}>
		<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
			{label}:
		</Typography>
		<Typography variant="body1">{value}</Typography>
	</Box>
);

const BorderCountries = ({ borders, handleBorderClick }) => (
	<Box sx={{ marginTop: '16px', display: 'flex' }}>
		<Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
			<strong>Border Countries:</strong>
		</Typography>
		<Box
			sx={{
				display: 'flex',
				flexWrap: 'nowrap',
				overflowX: 'auto',
				gap: '8px',
				padding: '8px 0',
				margin: '10px'
			}}
		>
			{borders && borders.length > 0 ? (
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
								backgroundColor: '#b5b5b5'
							}
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
