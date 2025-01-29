import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, useTheme } from '@mui/material';

const Dropdown = ({ setRegion, region }) => {
  const theme = useTheme();

  // Funktion för att hantera regionändringar
  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setRegion(selectedRegion);  // Direkt sätt värdet
  };

  const commonStyles = {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 180 }}>
      <FormControl fullWidth sx={{ borderRadius: '4px', ...commonStyles }}>
        <InputLabel id="region-select-label" sx={{ color: theme.palette.text.primary }}>
          Region
        </InputLabel>
        <Select
          labelId="region-select-label"
          id="region-select"
          value={region || ''}  // Om region är tomt, visa inget i inputfältet
          onChange={handleRegionChange}
          label="Region"
          sx={{
            ...commonStyles,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.text.secondary,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.text.primary,
            },
            '& .MuiSelect-icon': {
              color: theme.palette.text.primary,
            },
          }}
          MenuProps={{
            PaperProps: {
              style: {
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              },
            },
          }}
        >
          {/* Visa 'All' som den första menyn */}
          {['All', 'Asia', 'Europe', 'Africa', 'Americas', 'Oceania'].map((regionOption) => (
            <MenuItem key={regionOption} value={regionOption}>
              {regionOption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dropdown;
