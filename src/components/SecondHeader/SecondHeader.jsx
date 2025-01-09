import React from 'react';
import { Box, Typography } from '@mui/material'; // Added Typography for title
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';

const SecondHeader = ({ setRegion, setSearch }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Column layout for small screens (default)
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '32px 0px',
      }}
    >
    
      

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1150px', // Max width of layout
          margin: '0px',
          padding: '0px'
        }}
      >
        <SearchBar setSearch={setSearch} />
        <Dropdown setRegion={setRegion} />
      </Box>
    </Box>
  );
};

export default SecondHeader;
