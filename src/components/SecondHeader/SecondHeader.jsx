import React from 'react';
import { Box } from '@mui/material';
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';

const SecondHeader = ({ setRegion, setSearch }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        margin: '32px auto',
        
      }}
    >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            
          }}
        >
        <SearchBar setSearch={setSearch} />
      <Dropdown setRegion={setRegion} />
      </Box>
    </Box>
  );
};

export default SecondHeader;
