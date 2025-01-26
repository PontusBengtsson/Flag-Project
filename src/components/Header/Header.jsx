import React from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import '../../index.css';

const Header = ({ toggleTheme, isDarkMode }) => {
	const theme = useTheme();

	const logoSrc = isDarkMode ? '/techover-logo.png' : '/techover-logo-dark.png';

	const moonIconSrc = isDarkMode ? '/moon.svg' : '/moon-bordered.svg';

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'row',
				width: '100%',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				backgroundColor: theme.palette.background.paper,
				color: theme.palette.text.primary
			}}
		>
			<Box
				sx={{
					display: 'flex',
					fontSize: '20px',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '1150px',
					padding: '12px 0'
				}}
			>
				<Box>The Flag App</Box>
				<img className="techover-logo" src={logoSrc} alt="Techover-logo" />
				<Button
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						gap: '10px',
						padding: '5px'
					}}
					onClick={toggleTheme}
				>
					<img id="Moon" src={moonIconSrc} alt="Moon Icon" />
					<Box>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Box>
				</Button>
			</Box>
		</Box>
	);
};

export default Header;
