import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, useTheme } from '@mui/material';

const Dropdown = ({ setRegion }) => {
  const theme = useTheme();

  const handleRegionChange = (event) => {
    setRegion(event.target.value); // Update the parent state in Home
  };

  return (
    <Box>
      <FormControl sx={{ minWidth: 250, backgroundColor: theme.palette.background.default }}>
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

export default Dropdown;
