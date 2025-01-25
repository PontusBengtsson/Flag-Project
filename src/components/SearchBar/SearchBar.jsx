import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SearchBar = ({ setSearch, countries }) => {
  const theme = useTheme(); // Hämta det aktuella temat
  const [errorMessage, setErrorMessage] = useState('');

  // Hantera ändringar i sökfältet
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query); // Uppdatera sökningen

    if (query === '') {
      setErrorMessage('');
    } else {
      const countryFound = countries.some((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setErrorMessage(countryFound ? '' : 'Could not find that country!');
    }
  };

  const inputStyles = {
    flex: 1,
    width: '100%',
    '& .MuiOutlinedInput-root': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.default,
      '& fieldset': {
        borderColor: theme.palette.text.secondary,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.text.primary,
      },
    },
  };

  const labelStyles = {
    color: theme.palette.text.primary,
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
        sx={inputStyles}
        onChange={handleSearchChange}
        InputLabelProps={{ style: labelStyles }}
      />

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
