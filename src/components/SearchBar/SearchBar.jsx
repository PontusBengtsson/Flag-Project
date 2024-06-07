import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';

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
        backgroundColor: 'background.paper',
        fontSize: '20px',
        fontWeight: '800',
        margin: '30px',
        
      }}
    >
       <Box
        component="form"
        sx={{
          '& > :not(style)': { width: '25ch' }, backgroundColor: 'background.default'
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Search" variant="outlined" />
        
      </Box>
      <FormControl sx={{ minWidth: 250, backgroundColor: 'background.default' }}>
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
