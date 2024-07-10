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
      <FormControl sx={{ minWidth: 250, backgroundColor: 'background.default' }}>
        <InputLabel id="region-select-label">Region</InputLabel>
        <Select
          labelId="region-select-label"
          id="region-select"
          onChange={handleRegionChange}
          label="Region"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">America</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
