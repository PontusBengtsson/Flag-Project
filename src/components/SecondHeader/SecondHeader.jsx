import React from 'react';
import { Box } from '@mui/material';
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';
import { useTheme } from '@mui/material/styles';

const SecondHeader = ({ setRegion, setSearch, region, countries }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '32px 0px',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { xs: 'flex-start', sm: 'space-between' },
          alignItems: 'center',
          width: '100%',
          maxWidth: '1150px',
          px: { xs: 2, sm: 0 },
        }}
      >
        <SearchBar setSearch={setSearch} countries={countries} />
        <Dropdown setRegion={setRegion} region={region} />
      </Box>
    </Box>
  );
};

export default SecondHeader;
