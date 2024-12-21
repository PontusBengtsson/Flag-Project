import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const SearchBar = ({ setRegion, setSearch }) => {
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

 


  return (
    <Box
      component="form"
      sx={{
        backgroundColor: 'background.paper',
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        
        
        
        
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search for a country"
        variant="outlined"
        sx={{ backgroundColor: 'background.default' }}
        onChange={handleSearchChange}
      />
     
    </Box>
  );
};

export default SearchBar;
