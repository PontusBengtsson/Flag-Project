import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ setSearch, countries }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  // Hantera ändringar i sökfältet
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);

    if (query === '') {
      setErrorMessage('');
    } else {
      const countryFound = countries.some((country) =>
        country.name.common.toLowerCase().includes(query.toLowerCase())
      );
      setErrorMessage(countryFound ? '' : 'Could not find that country!');
    }
  };

  // Hantera Enter-knapptryckning
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const query = event.target.value;

      if (query && errorMessage) {
        // Om ingen träff finns, navigera till startsidan
        navigate('/');
      }
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
        onKeyDown={handleKeyDown} 
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
