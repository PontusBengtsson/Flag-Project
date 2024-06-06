// SearchBar.js
import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SearchBar = ({ age, handleChange }) => {
  return (
    <Box
      sx={{
        minWidth: 120,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100px',
        backgroundColor: 'background.default',
        fontSize: '20px',
        fontWeight: '800',
        borderBottom: '2px solid black',
        margin: '30px',
      }}
    >
      <Box>Search</Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Asia</MenuItem>
          <MenuItem value={20}>Europe</MenuItem>
          <MenuItem value={30}>North America</MenuItem>
          <MenuItem value={40}>South America</MenuItem>
          <MenuItem value={50}>Africa</MenuItem>
          <MenuItem value={60}>Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SearchBar;
