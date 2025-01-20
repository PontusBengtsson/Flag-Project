import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Button, Box, Skeleton } from '@mui/material';
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
			setLoading(true);
			try {
				const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
				const data = await response.json();
				setCountry(data[0]);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading();
			}
		};

		fetchCountry();
	}, [countryCode]);

	if (loading) {
		return (
			<Box sx={{ padding: '16px' }}>
				<Skeleton variant="text" width="30%" sx={{ marginBottom: '16px' }} />
				<Skeleton variant="rectangular" width="100%" height={200} sx={{ marginBottom: '16px' }} />
				<Skeleton variant="text" width="80%" sx={{ marginBottom: '8px' }} />
				<Skeleton variant="text" width="60%" sx={{ marginBottom: '8px' }} />
				<Skeleton variant="text" width="40%" sx={{ marginBottom: '8px' }} />
			</Box>
		);
	}

	const handleBackClick = () => {
		navigate('/');
	};

	return country ? (
		<Box
			sx={{
				
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'flex-start',
				
        
       
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '32px',
			}}
		>
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
								stroke={theme.palette.text.primary} // Dynamisk färg
								strokeWidth="2"
							/>
							<line
								x1="30.57"
								transform="translate(204.395 147.155)"
								fill="none"
								stroke={theme.palette.text.primary} // Dynamisk färg
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
	) : (
		<Typography>Country not found</Typography>
	);
};

export default CountryPage;
