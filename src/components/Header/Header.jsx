import React from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import '../../index.css';

const Header = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          fontSize: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          width: { xs: '90%', sm:'90%', md: '90%', lg:'1152px'},
          py: 1.5,
        }}
      >
        <Box>The Flag App</Box>
        <img className="techover-logo" src={isDarkMode ? '/techover-logo.png' : '/techover-logo-dark.png'} alt="Techover-logo" />
        <Button
          sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}
          onClick={toggleTheme}
        >
          <img id="Moon" src={isDarkMode ? '/moon.svg' : '/moon-bordered.svg'} alt="Moon Icon" />
          <Box>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Box>
        </Button>
      </Box>
    </Box>
  );
};

export default Header;