import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, useTheme } from '@mui/material';

const Dropdown = ({ setRegion, region }) => { // Accept the 'region' as a prop
  const theme = useTheme();

  const handleRegionChange = (event) => {
    setRegion(event.target.value); // Updates the parent state
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 180 }}> {/* Max width for the dropdown */}
      <FormControl fullWidth sx={{ backgroundColor: theme.palette.background.default }}>
        <InputLabel id="region-select-label">Region</InputLabel>
        <Select
          labelId="region-select-label"
          id="region-select"
          value={region || ''} // Ensure that value is either a valid option or ''
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
