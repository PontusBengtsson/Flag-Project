import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import PropTypes from 'prop-types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Test({ items }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {items.map((item, index) => (
          <Grid key={index} xs={item.xs} md={item.md}>
            <Item>{item.content}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Test.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      xs: PropTypes.number.isRequired,
      md: PropTypes.number.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Test;
