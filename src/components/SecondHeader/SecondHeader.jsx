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
          flexDirection: {  xs: 'column',sm: 'column', md: 'row' },
          justifyContent: { sm: 'flex-start', md: 'space-between' },
          gap: { xs: '20px', sm: 'none' },
          width: { xs: '90%', sm:'90%', md: '90%', lg:'1152px', },
          
          
        }}
      >
        <SearchBar setSearch={setSearch} countries={countries} />
        <Dropdown setRegion={setRegion} region={region} />
      </Box>
    </Box>
  );
};

export default SecondHeader;
