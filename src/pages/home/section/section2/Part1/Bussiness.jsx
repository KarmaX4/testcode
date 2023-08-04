import { Container, Typography, Grid } from '@mui/material';
import React from 'react';
import ServiceTop from './ServiceTop';
import ServiceLeft from './ServiceLeft';
import ServiceRight from './ServiceRight';

const Bussiness = () => {
  return (
    <Container
      maxWidth={false}
      width={{
        xs: "100% !important",
        md: "88.2rem !important",
      }}
      sx={{
        padding: "0 1rem 5rem",
      }}
    >
      <Grid container spacing={2}
        margin="auto"
        width={{
          xs: "100% !important",
          md: "88.2rem !important",
        }}
        justifyContent="center"  // Center items horizontally
        alignItems="center"      // Center items vertically
      >
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <ServiceTop />
        </Grid>
        <Grid container 
          spacing={2}
          margin="auto"
          width={{
            xs: "100% !important",
            md: "88.2rem !important",
          }}
          justifyContent="center"  // Center items horizontally
          alignItems="center"      // Center items vertically
          flexDirection= {{
            xs: 'row-reverse',
            md: 'row'
          }}
        >
          <Grid item xs={12} md={6}>
            <ServiceLeft />
          </Grid>
          <Grid item xs={12} md={6}>
            <ServiceRight />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bussiness;
