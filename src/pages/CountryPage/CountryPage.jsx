import React from 'react';
import { Grid, Button, Box, Card, CardContent, Typography, CardMedia, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchBar from '../../components/SearchBar/SearchBar';

const CountryPage = () => {
  const navigate = useNavigate();

  return (
    <>
     
      <Container>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => navigate(-1)} 
          sx={{ margin: '20px 0' }}
        >
          Back
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '60px',
            width: '100%'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: '60px',
              width: '100%',
              padding: '25px',
              height: '700px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
                padding: '25px',
                width: '30%',
              }}
            >
              <Typography variant="h6">Bild</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'green',
                padding: '25px',
                width: '30%',
              }}
            >
              <Typography variant="body1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat distinctio accusantium assumenda dicta vel quod tempora ad ipsum? Quis dignissimos, sed magni quo quidem accusamus rerum neque eius culpa nesciunt.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CountryPage;
