import { Container, Grid } from '@mui/material';
import React from 'react';
import ServiceTop from './ServiceTop';
import ServiceLeft from './ServiceLeft';
import ServiceRight from './ServiceRight';

const Bussiness = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: {
          xs: '80vw',
          md: '90vw'
        },
        padding: '0 !important',
        margin: "5rem auto",
        // backgroundColor: 'yellow'
      }}
    >
      <Grid container spacing={2}
        margin="auto"
        width='inherit'
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            padding: '0 !important',
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <ServiceTop />
        </Grid>
        <Grid container
          spacing={2}
          margin="auto"
          width='inherit'
          justifyContent="center"
          alignItems="center"
        // flexDirection={{
        //   xs: 'row-reverse',
        //   md: 'row'
        // }}
        >
          <Grid item xs={12} sm={6}
            padding='0 !important'
          >
            <ServiceLeft />
          </Grid>
          <Grid item xs={12} sm={6}
            width='100%'
            sx={{
              padding: '0 !important'
            }}
          >
            <ServiceRight />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Bussiness;
