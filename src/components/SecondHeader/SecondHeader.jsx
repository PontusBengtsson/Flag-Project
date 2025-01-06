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
        margin: '50px 0px',
      }}
    >
      {/* Optional Title */}
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
        
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Column on small screens, row on larger
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px', // Max width of layout
          gap: '16px', // Gap between SearchBar and Dropdown
        }}
      >
        <SearchBar setSearch={setSearch} />
        <Dropdown setRegion={setRegion} />
      </Box>
    </Box>
  );
};

export default SecondHeader;
