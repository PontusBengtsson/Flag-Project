import React from 'react';
import { Box, Skeleton } from '@mui/material';
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';
import { useTheme } from '@mui/material/styles';

const SecondHeader = ({ setRegion, setSearch, isLoading }) => {
	const theme = useTheme();

	const commonBoxStyles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		margin: '32px 0px',
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary
	};

	const contentBoxStyles = {
		display: 'flex',
		flexDirection: { xs: 'column', sm: 'row' },
		justifyContent: { xs: 'flex-start', sm: 'space-between' },
		alignItems: 'center',
		width: '100%',
		maxWidth: '1150px',
		paddingRight: { xs: '16px', sm: '0' },
		paddingLeft: { xs: '16px', sm: '0' }
	};

	const renderSkeleton = (width, height) => <Skeleton variant="rectangular" width={width} height={height} />;

	return (
		<Box sx={commonBoxStyles}>
			<Box
				sx={{
					...contentBoxStyles,
					flexDirection: { xs: 'column', sm: 'row' }
				}}
			>
				{isLoading ? renderSkeleton('370px', '56px') : <SearchBar setSearch={setSearch} />}
				{isLoading ? renderSkeleton('180px', '56px') : <Dropdown setRegion={setRegion} />}
			</Box>
		</Box>
	);
};

export default SecondHeader;
