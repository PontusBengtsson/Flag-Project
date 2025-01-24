import React from 'react';
import { Box, Skeleton } from '@mui/material'; // Importerar Material-UI komponenter
import Dropdown from '../Dropdown/Dropdown';
import SearchBar from '../SearchBar/SearchBar';
import { useTheme } from '@mui/material/styles';

const SecondHeader = ({ setRegion, setSearch, isLoading }) => {
  const theme = useTheme(); // Hämta det aktuella temat

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', // Kolumnlayout för små skärmar (default)
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '32px 0px',
        backgroundColor: theme.palette.background.default, // Använd temats bakgrundsfärg
        color: theme.palette.text.primary, // Använd temats textfärg
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Kolumn på små skärmar, rad på större
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1150px', // Max bredd för layouten
        }}
      >
        {isLoading ? (
          <Skeleton variant="rectangular" width="370px" height="56px" sx={{ marginBottom: { xs: 2, sm: 0 } }} />
        ) : (
          <SearchBar setSearch={setSearch} />
        )}
        {isLoading ? (
          <Skeleton variant="rectangular" width="180px" height="56px" />
        ) : (
          <Dropdown setRegion={setRegion} />
        )}
      </Box>
    </Box>
  );
};

export default SecondHeader;
