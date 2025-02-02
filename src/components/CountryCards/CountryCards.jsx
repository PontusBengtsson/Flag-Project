import React from 'react';
import { Box, Grid, Typography, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import '../../index.css';

const CountryInfo = ({ label, value, loading, skeletonWidth }) => (
	<Box sx={{ display: 'flex', alignItems: 'center' }}>
		<Typography variant="body2" sx={{ color: 'text.primary', marginRight: '8px' }}>
			<strong>{label}:</strong>
		</Typography>
		{loading ? (
			<Skeleton width={skeletonWidth} />
		) : (
			<Typography variant="body2" sx={{ color: 'text.primary' }}>
				{value || 'N/A'}
			</Typography>
		)}
	</Box>
);

const CountryCards = ({ countries, loading }) => {
	const theme = useTheme();

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignitems: 'center',
				minHeight: '100vh',
				backgroundColor: theme.palette.background.default
			}}
		>
			<Box sx={{ width: { xs: '340px', sm: '340px', md: '90%', lg: '1152px' } }}>

				<Grid container columnSpacing={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
					{countries
						.sort((a, b) => a.name.common.localeCompare(b.name.common))
						.map((country) => (
							<Grid
								item
								xs={12}
								sm={12}
								md={4}
								lg={3}
								xl={3}
								
								key={country.cca3}
								sx={{ marginBottom: 7, alignitems: 'center' }}
							>
								<Link to={`/country/${country.cca3}`} style={{ textDecoration: 'none' }}>
									<Box
										sx={{
											width: { xs: '345px', sm: '340px', md: '100%', lg: '100%' } ,
											cursor: 'pointer',
											borderRadius: '4px',
											overflow: 'hidden',
											display: 'flex',
											flexDirection: 'column',
											boxShadow:
												'rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 6px 10px 0px, rgba(0, 0, 0, 0.12) 0px 1px 18px 0px',
											backgroundColor: theme.palette.background.paper
										}}
									>
										{loading ? (
											<Skeleton variant="rectangular" width="100%" height={140} />
										) : (
											<img
												src={country.flags.png}
												alt={`${country.name.common} flag`}
												style={{ width: '100%', height: '140px', objectFit: 'cover' }}
											/>
										)}
										<Box sx={{ padding: '16px',height: '121px', display: 'flex', flexDirection: 'column' }}>
											<Typography
												variant="h7"
												sx={{
													marginBottom: '5px',
													fontWeight: '600',
													color: theme.palette.text.primary
												}}
											>
												{loading ? <Skeleton width="100%" /> : country.name.common}
											</Typography>
											<CountryInfo
												label="Population"
												value={country.population.toLocaleString()}
												loading={loading}
												skeletonWidth="60px"
											/>
											<CountryInfo
												label="Region"
												value={country.region}
												loading={loading}
												skeletonWidth="85px"
											/>
											<CountryInfo
												label="Capital"
												value={country.capital?.[0]}
												loading={loading}
												skeletonWidth="85px"
											/>
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
