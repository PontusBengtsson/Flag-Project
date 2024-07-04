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
        backgroundColor: 'green',
        display: 'flex',
        justifyContent: 'space-between',
        width: '61%',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Search"
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
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
