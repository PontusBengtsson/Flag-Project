// CountryCard.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CountryCard = ({ country, handleBorderClick, handleBackClick }) => {
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
			<Box sx={{width:'1150px', }}>
				<Button
					variant="contained"
					onClick={handleBackClick}
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
						backgroundColor: 'background.default',
						color: 'black',
						boxShadow: 'none',
						padding: '5px',
						textTransform: 'none',
						'&:hover': { backgroundColor: 'background.paper' },
						marginBottom: '32px',
					}}
				>
					BACK
				</Button>
				<Box sx={{ display: 'flex', flexDirection: 'row' }}>
					<Box
						sx={{
							padding: '64px 32px 0px 0px',
							width: '50%',
							height: 'auto'
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
							padding: '64px 0px 0px 32px'
						}}
					>
						<Typography variant="h3" sx={{ marginBottom: '16px' }}>
							{country.name.common}
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<Box sx={{width:'50%'}}>
								<DetailItem label="Population" value={country.population.toLocaleString()} />
								<DetailItem label="Region" value={country.region} />
								<DetailItem label="Capital" value={country.capital ? country.capital[0] : 'N/A'} />
								<DetailItem label="Native Name" value={nativeName} />
							</Box>
							<Box sx={{width:'50%'}}>
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

const BorderCountries = ({ borders, handleBorderClick }) => (
	<Box
		sx={{
			display: 'flex',
			alignItems: 'center',
			marginTop: '16px',
		}}
	>
		<Typography
			variant="body2"
			sx={{
				marginRight: '8px',
				 // Förhindrar att etiketten krymper
			}}
		>
			<strong>Border Countries:</strong>
		</Typography>
		<Box
			sx={{
				display: 'flex',
				overflowX: 'auto', // Lägg till horisontell scroll
				whiteSpace: 'nowrap', // Förhindra radbrytning
				paddingBottom: '8px', // För att undvika överlapp med scrollbaren
			}}
		>
			{borders && borders.length > 0 ? (
				borders.map((borderCountryCode) => (
					<Button
						key={borderCountryCode}
						onClick={() => handleBorderClick(borderCountryCode)}
						sx={{
							backgroundColor: 'background.paper',
							borderRadius: '16px',
							color: 'black',
							marginRight: '8px',
							whiteSpace: 'nowrap', // Förhindra radbrytning på knappen
							'&:hover': {
								backgroundColor: 'background.paper'
							},
							flexShrink: 0, // Förhindrar att knapparna krymper
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
