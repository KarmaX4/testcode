import Headtitle from '@/pages/titles/headtitle';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const AS1 = () => {
  return (
    <Container
      maxWidth={false}
      mb={15}
      // width={{
      //   xs: '100%',
      //   md: '88.2rem !important'
      // }}
      textAlign='-webkit-center'
    >
      <Headtitle title='Welcome to our company!' />
      <Grid container display="flex" justifyContent="center"
        margin={'auto'}
        width={{
          xs: '100%',
          md: '88.2rem !important'
        }}
        sx={{
          marginBlock: "5rem",
        }}
        height= '30rem'
      >
        <Grid item xs={12} md={6} display="flex" justifyContent="center" height='inherit'>
          <Box 
            sx={{ 
              // backgroundColor: '#514656',
              borderRadius: '16px', 
              // overflow: 'hidden' 
              border: '2px solid #fff',
              width: '30rem',
              position: 'relative'
            }}>
              
            <img
              src={'images/about/sw.png'}
              alt={'skywave'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: '5px',
                right: '5px',
                borderRadius: '16px', 
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} py={14}>
          <Typography sx={{
            fontFamily: 'Britannic Bold',
            fontSize: '42px',
            fontWeight: 400,
            lineHeight: '42px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#FFFFFF',
          }}>
            The way to get started is to quit talking and begin doing!
          </Typography>
          <Typography py={8} sx={{
            fontFamily: 'Lato',
            fontSize: '17px',
            fontWeight: 400,
            lineHeight: '18px',
            letterSpacing: '-0.005em',
            textAlign: 'left',
            color: '#FFFFFF',

          }}>
            The journey of Skywave Info Solutions has been started in early 2017 by innovative
            minds who are passionate about changing the world by implementing best IT solutions.
            A bunch of friends with their unique ideas, creativity and guts decided to make an
            well-established company on their own in the challenging IT industry with their
            expertise in web and mobile development. A well-managed team has designers and
            developers both in the same pace.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AS1;
