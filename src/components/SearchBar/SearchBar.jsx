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
        display: 'flex',
        borderRadius: '8px',
        minWidth: '40%', // För att ta upp 100% av bredden på små skärmar
        maxWidth: 370, // Begränsa maxbredd för större skärmar
		backgroundColor: "background.default",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search for a country"
        variant="outlined"
        sx={{ flex: 1 }}
        onChange={handleSearchChange}
      />
    </Box>
  );
};

export default SearchBar;
