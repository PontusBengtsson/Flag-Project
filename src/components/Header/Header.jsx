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
            padding: '25px',
            backgroundColor: 'background.default',
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



