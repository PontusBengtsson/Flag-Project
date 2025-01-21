import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Skeleton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CountryCard from '../../components/CountryCard/CountryCard';

const CountryPage = () => {
	const { countryCode } = useParams();
	const navigate = useNavigate();
	const [country, setCountry] = useState(null);
	const [loading, setLoading] = useState(true);
	const theme = useTheme();

	useEffect(() => {
		const fetchCountry = async () => {
			setLoading(true); // Start loading when fetching begins
			try {
				console.log('Fetching country with countryCode: ', countryCode); // Debugging
				const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
				if (!response.ok) {
					throw new Error('Failed to fetch country data');
				}
				const data = await response.json();
				setCountry(data[0]); // Set country data
			} catch (error) {
				console.error(error); // Log error if fetch fails
			} finally {
				setLoading(false); // Set loading to false after fetch completes
			}
		};

		fetchCountry();
	}, [countryCode]);

	const handleBackClick = () => {
		navigate('/'); // Navigate back to home
	};

	if (loading) {
		return (
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<Box sx={{ marginTop: '32px', width: '1150px' }}>
					<Skeleton variant="text" width="20%" sx={{ marginBottom: '16px', borderRadius: '4px' }} />
					<Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '10px' }}>
						<Skeleton
							variant="rectangular"
							width="50%"
							height={300}
							sx={{ marginRight: '32px', borderRadius: '8px' }}
						/>
						<Box sx={{ display: 'flex', flexDirection: 'column',width:"50%" }}>
							<Skeleton
								variant="text"
								width="50%"
								sx={{ marginBottom: '8px', borderRadius: '4px' }} //rubrik
							/>
							<Box sx={{ display: 'flex', flexDirection: 'column',width:"50%" }}>
								<Box sx={{ display: 'flex', flexDirection: 'row',width:"100%"  }}>
                <Box sx={{ display: 'flex', flexDirection: 'column',width: '50%'  }}>
                <Skeleton
								variant="text"
							
								sx={{  borderRadius: '4px', marginleft:'25px' }}
							/>
                    <Skeleton
								variant="text"
							
								sx={{  borderRadius: '4px', marginright:'25px' }}
							/>
                    <Skeleton
								variant="text"
								
								sx={{  borderRadius: '4px', marginright:'25px' }}
							/>
                    <Skeleton
								variant="text"
								
								sx={{  borderRadius: '4px', marginright:'25px' }}
							/>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column',marginLeft:'20px', width: '50%' }}>
                  <Skeleton
								variant="text"
								
								sx={{  borderRadius: '4px', marginright:'25px' }}
							/>
                        <Skeleton
								variant="text"
								
								sx={{  borderRadius: '4px', marginright:'25px' }}
							/>
                        <Skeleton
								variant="text"
								
								sx={{  borderRadius: '4px', marginright:'25px' }}
							/>
                  
								
                  </Box>
								</Box>
							</Box>
							<Box sx={{ width: '50px', display: 'flex', flexDirection: 'row' }}></Box>
							<Skeleton
								variant="text"
								width="40%"
								sx={{ marginBottom: '8px', borderRadius: '4px', padding: '20px' }}
							/>
						</Box>
					</Box>
				</Box>
			</Box>
		);
	}

	if (!country) {
		return (
			<Box sx={{ padding: '16px', marginTop: '32px', textAlign: 'center' }}>
				<Typography variant="h6">Failed to load country data. Please try again later.</Typography>
			</Box>
		);
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '32px' }}>
			<Box sx={{ width: '1150px' }}>
				<Button
					variant="contained"
					onClick={handleBackClick}
					startIcon={
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32.242 18.693">
							<g transform="translate(-202.723 -137.717)">
								<path
									d="M16475.775,1222.011l-8.639,8.639,8.639,8.639"
									transform="translate(-16263 -1083.587)"
									fill="none"
									stroke={theme.palette.text.primary}
									strokeWidth="2"
								/>
								<line
									x1="30.57"
									transform="translate(204.395 147.155)"
									fill="none"
									stroke={theme.palette.text.primary}
									strokeWidth="2"
								/>
							</g>
						</svg>
					}
					sx={{
						color: theme.palette.text.primary,
						backgroundColor: theme.palette.background.default,
						boxShadow: 'none',
						padding: '5px',
						textTransform: 'none',
						'&:hover': {
							backgroundColor: theme.palette.action.hover
						}
					}}
				>
					BACK
				</Button>
				<CountryCard country={country} handleBackClick={handleBackClick} />
			</Box>
		</Box>
	);
};

export default CountryPage;
