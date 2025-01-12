import React from 'react';
import { Box, TextField } from '@mui/material';

const SearchBar = ({ setSearch }) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        borderRadius: '8px',
        maxWidth: '370px', // Öka maxbredden
        width: '100%', // Se till att komponenten tar upp tillgänglig bredd
        height: 'auto',
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search for a country"
        variant="outlined"
        sx={{ flex: 1, width: '100%' }} // Gör textfältet bredare
        onChange={handleSearchChange}
        InputProps={{
          style: { color: 'black' }, // Gör texten svart
        }}
        InputLabelProps={{
          style: { color: 'black' }, // Gör etiketten svart
        }}
      />
    </Box>
  );
};

export default SearchBar;
