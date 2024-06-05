import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';


const SearchBar = () => {
    return ( 
        <Box sx={{
            display: 'flex',
            justifyContent:'space-around',
            alignItems:'center',
            width:'100%',
            height: '100px',
            backgroundColor: 'primary.main',
            fontSize: '20px',
            fontWeight: '800',
            borderBottom: '2px solid black',
            
        }}>
        <Box>Search</Box>
        <Box>Region</Box>
        
        </Box>
     );
}
 
export default SearchBar;


