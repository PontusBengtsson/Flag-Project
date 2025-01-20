import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, useTheme } from '@mui/material';

const Dropdown = ({ setRegion, region }) => {
  const theme = useTheme(); // Hämta det aktuella temat

  const handleRegionChange = (event) => {
    setRegion(event.target.value); // Uppdatera förälderns state
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 180 }}>
      <FormControl
        fullWidth
        sx={{
          borderRadius: '4px',
          backgroundColor: theme.palette.background.default, // Bakgrund från temat
        }}
      >
        <InputLabel
          id="region-select-label"
          sx={{
            color: theme.palette.text.primary, // Etikettens textfärg
          }}
        >
          Region
        </InputLabel>
        <Select
          labelId="region-select-label"
          id="region-select"
          value={region || ''} // Se till att värdet är giltigt
          onChange={handleRegionChange}
          label="Region"
          sx={{
            color: theme.palette.text.primary, // Textfärg för val
            backgroundColor: theme.palette.background.default, // Bakgrund från temat
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.text.secondary, // Kantfärg
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.text.primary, // Kantfärg vid hover
            },
            '& .MuiSelect-icon': {
              color: theme.palette.text.primary, // Ändra pilens färg
            },
          }}
          MenuProps={{
            PaperProps: {
              style: {
                backgroundColor: theme.palette.background.paper, // Menyns bakgrundsfärg
                color: theme.palette.text.primary, // Menyns textfärg
              },
            },
          }}
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
