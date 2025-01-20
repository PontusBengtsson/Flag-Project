import React from 'react';
import { Box, Button } from '@mui/material';
import { WbSunny, NightsStay } from '@mui/icons-material'; // Ikoner för ljus och mörkt läge
import { useTheme } from '@mui/material/styles';

const Header = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme(); // Hämta det aktuella temat

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.palette.background.paper, // Använd temats färg
        color: theme.palette.text.primary, // Använd temats textfärg
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
        {isDarkMode ?  <img
          id="Techover"
          src="/assets/techover-logo.png"
          alt="Techover-logo"
        /> : <img
        id="Techover-logo-dark"
        src="/assets/techover-logo-dark.png"
        alt="Techover-logo-dark"
      />}
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
          
          {isDarkMode ?  <img
          id="Moon"
          src="/assets/moon.svg"
          alt="Moon"
        /> : <img
        id="Moon-bordered"
        src="/assets/moon-bordered.svg"
        alt="Moon-bordered"
      />}
          <Box>{isDarkMode ? 'Dark mode' : 'Light Mode'}</Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
