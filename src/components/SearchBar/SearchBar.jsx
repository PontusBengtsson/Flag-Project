import React, { useState, useEffect } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SearchBar = ({ setSearch, countries }) => {
  const theme = useTheme(); // Hämta det aktuella temat
  const [errorMessage, setErrorMessage] = useState('');

  // Detta är när användaren börjar skriva i sökrutan
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query); // Uppdatera sökningen

    // Om sökningen är tom, visa inget felmeddelande
    if (query === '') {
      setErrorMessage('');
      return;
    }

    // Kontrollera om ett land finns som matchar
    const countryFound = countries.some((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    // Om inget land hittades, sätt felmeddelande
    if (!countryFound) {
      setErrorMessage('Could not find that country!');
    } else {
      setErrorMessage(''); // Ta bort felmeddelandet om ett land hittades
    }
  };

  return (
    <Box
      component="form"
      sx={{
        borderRadius: '8px',
        maxWidth: '370px',
        width: '100%',
        height: 'auto',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search for a country"
        variant="outlined"
        sx={{
          flex: 1,
          width: '100%',
          '& .MuiOutlinedInput-root': {
            color: theme.palette.text.primary, // Textfärg från temat
            backgroundColor: theme.palette.background.default, // Bakgrund från temat
            '& fieldset': {
              borderColor: theme.palette.text.secondary, // Sekundärfärg för kant
            },
            '&:hover fieldset': {
              borderColor: theme.palette.text.primary, // Primärfärg vid hover
            },
          },
        }}
        onChange={handleSearchChange}
        InputLabelProps={{
          style: {
            color: theme.palette.text.primary, // Etikettfärg från temat
          },
        }}
      />
      
      {/* Visa felmeddelandet om det finns */}
      {errorMessage && (
        <Typography
          sx={{
            color: theme.palette.error.main,
            marginTop: '8px',
            textAlign: 'center',
          }}
        >
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};

export default SearchBar;
