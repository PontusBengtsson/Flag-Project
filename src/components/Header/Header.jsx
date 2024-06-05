import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';


const Header = () => {
    return ( 
        <Box sx={{
            display: 'flex',
            justifyContent:'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: '100px',
            backgroundColor: 'primary.main',
            fontSize: '20px',
            fontWeight: '800',
            borderBottom: '2px solid black'
        }}>
        <Box>The Flag App</Box>
        <Box>Logo</Box>
        <Box>Darkmode</Box>
        </Box>
     );
}
 
export default Header;


