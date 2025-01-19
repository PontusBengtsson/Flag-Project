import React from 'react';
import { Box, Button } from '@mui/material';
import { WbSunny, NightsStay } from '@mui/icons-material'; // Ikoner för ljus och mörkt läge

const Header = ({ toggleTheme, isDarkMode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
          padding: '12px 0px 12px 0px',
        }}
      >
        <Box>The Flag App</Box>
        <img
          id="Techover-logo"
          src="/assets/techover-logo-dark.png"
          style={{ maxHeight: '100%', maxWidth: '100%' }}
          alt="Techover"
        />
        <Button
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
            padding: '5px',
          }}
          onClick={toggleTheme}
        >
          {/* Byt ikon beroende på tema */}
          {isDarkMode ? <WbSunny /> : <NightsStay />}
          <Box>{isDarkMode ? 'Light mode' : 'Dark mode'}</Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
