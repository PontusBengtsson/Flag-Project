import React, { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ setSearch, countries }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);

    // Kontrollera om något land matchar sökningen
    const countryFound = countries.some((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    // Om inget land hittas och användaren söker, visa ett felmeddelande
    if (query && !countryFound) {
      setErrorMessage('Could not find that country!');
    } else {
      setErrorMessage('');
    }
  };

  const handleKeyDown = (event) => {
    // Om användaren trycker på "Enter" och det finns inget felmeddelande, navigera
    if (event.key === 'Enter' && !errorMessage) {
      navigate('/');
    }
  };

  return (
    <Box component="form" sx={{ borderRadius: 2, maxWidth: 370, width: '100%' }} noValidate autoComplete="off">
      <TextField
        label="Search for a country"
        variant="outlined"
        fullWidth
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        sx={{
          '& .MuiOutlinedInput-root': {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.default,
            '& fieldset': { borderColor: theme.palette.text.secondary },
            '&:hover fieldset': { borderColor: theme.palette.text.primary },
          },
        }}
        InputLabelProps={{ style: { color: theme.palette.text.primary } }}
      />
    
    </Box>
  );
};

export default SearchBar;
