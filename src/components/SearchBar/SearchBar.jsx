import React from 'react';
import { Box, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const SearchBar = ({ setSearch }) => {
  const theme = useTheme(); // Hämta det aktuella temat

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
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
    </Box>
  );
};

export default SearchBar;
