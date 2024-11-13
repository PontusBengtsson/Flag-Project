import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const SearchBar = ({ setRegion, setSearch }) => {
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // box-sizing: border-box; */
  //   /* display: flex; */
  //   flex-flow: wrap;
  //   /* margin-top: -16px; */
  //   /* width: calc(100% + 16px); */
  //   /* margin-left: -16px; */
  //   /* margin-bottom: 32px; */
  //   /* -webkit-box-pack: justify; */


  return (
    <Box
      component="form"
      sx={{
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px',
        width: '68%',
        
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
