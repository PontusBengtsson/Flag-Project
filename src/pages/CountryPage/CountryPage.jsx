import React, { useState, useEffect } from 'react';
import { Grid, Button, Box, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';

const CountryPage = () => {
	return (
		<>
			<Header />
      <Button sx={{display: 'flex', justifyContent: 'flex-start',
        width: '100%'
      }}>Back</Button> 
			<Box
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '60px'
				}}
			>
				
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'row',
            justifyContent:'center',
						gap: '60px',
            width: '100%',
						padding: '25px',
            height: '700px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: '60px',
							backgroundColor: 'green',
							padding: '25px',
              width: '30%',
              
						}}
					>
						Bild
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							gap: '60px',
							backgroundColor: 'green',
							padding: '25px',
              width: '30%',
              
						}}
					>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat distinctio accusantium assumenda dicta vel quod tempora ad ipsum? Quis dignissimos, sed magni quo quidem accusamus rerum neque eius culpa nesciunt.
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CountryPage;
