import React from 'react';
import { Box } from '@mui/material';
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';
import { useTheme } from '@mui/material/styles';

const SecondHeader = ({ setRegion, setSearch, region, countries }) => {
  const theme = useTheme();

  const commonBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '32px 0px',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  };

  const contentBoxStyles = {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: { xs: 'flex-start', sm: 'space-between' },
    alignItems: 'center',
    width: '100%',
    maxWidth: '1150px',
    paddingRight: { xs: '16px', sm: '0' },
    paddingLeft: { xs: '16px', sm: '0' },
  };

  return (
    <Box sx={commonBoxStyles}>
      <Box sx={contentBoxStyles}>
        <SearchBar setSearch={setSearch} countries={countries} />
        {/* Skicka region som prop till Dropdown */}
        <Dropdown setRegion={setRegion} region={region} />
      </Box>
    </Box>
  );
};

export default SecondHeader;
