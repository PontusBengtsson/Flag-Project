import React from 'react';
import { Box, Grid, Typography, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const CountryCards = ({ countries }) => {
	const theme = useTheme();

	const isLoading = countries || countries.length === 0; // Kontrollera laddningsstatus

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				
				minHeight: '100vh',
				backgroundColor: theme.palette.background.default
			}}
		>
			<Box sx={{ width: '1150px', margin: '0px' }}>
				<Grid container columnSpacing={4}>
					{isLoading
						? [...Array(12)].map((_, index) => (
								<Grid
									item
									xs={12}
									sm={6}
									md={4}
									lg={3}
									key={index}
									sx={{ marginBottom: 7, marginTop: index < 4 ? 0 : 0 }} // Ingen spacing ovanför första raden
								>
									<Box sx={{ borderRadius: 2, boxShadow: 'none' }}>
										<Skeleton
											variant="rectangular"
											width="100%"
											height={265}
											sx={{ borderRadius: '8px' }}
										/>
									</Box>
								</Grid>
						  ))
						: countries
								.sort((a, b) => {
									if (a.name.common < b.name.common) return -1;
									if (a.name.common > b.name.common) return 1;
									return 0;
								})
								.map((country) => (
									<Grid
										item
										xs={12}
										sm={6}
										md={4}
										lg={3}
										key={country.cca3}
										sx={{ marginBottom: 7, marginTop: 0 }}
									>
										<Link to={`/country/${country.cca3}`} style={{ textDecoration: 'none' }}>
											<Box
												sx={{
													width: '100%',
													cursor: 'pointer',
													borderRadius: '8px',
													boxShadow:
														theme.palette.mode === 'light'
															? '0px 8px 16px rgba(0, 0, 0, 0.08)'
															: '0px 8px 16px rgba(255, 255, 255, 0.08)',
													overflow: 'hidden',
													display: 'flex',
													flexDirection: 'column',
													padding: '0px',
													backgroundColor: theme.palette.background.paper
												}}
											>
												<img
													src={country.flags.png}
													alt={`${country.name.common} flag`}
													style={{ width: '100%', height: '140px', objectFit: 'cover' }}
												/>
												<Box
													sx={{
														padding: '16px',
														height: '125px',
														display: 'flex',
														flexDirection: 'column',
														justifyContent: 'center'
													}}
												>
													<Box sx={{ margin: '0px 0px 0.75em' }}>
														<Typography
															variant="h7"
															sx={{
																marginBottom: '8px',
																fontWeight: '600',
																color: theme.palette.text.primary
															}}
														>
															{country.name.common}
														</Typography>
													</Box>
													<Typography
														variant="body2"
														sx={{ color: theme.palette.text.primary }}
													>
														<strong>Population:</strong>{' '}
														{country.population.toLocaleString()}
													</Typography>
													<Typography
														variant="body2"
														sx={{ color: theme.palette.text.primary }}
													>
														<strong>Region:</strong> {country.region}
													</Typography>
													<Typography
														variant="body2"
														sx={{ color: theme.palette.text.primary }}
													>
														<strong>Capital:</strong>{' '}
														{country.capital ? country.capital[0] : 'N/A'}
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
