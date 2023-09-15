import Headtitle from '@/pages/titles/headtitle';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const AS1 = () => {
  return (
    <Container
      maxWidth={false}
      // py={20}
      sx={{
        paddingBlock: '1rem',
        textAlign: '-webkit-center',
        // background: '#952446'
      }}
    >
      <Headtitle title='Welcome to our company!' showDivider />

      <Grid container display="flex" justifyContent="center"
        margin={{
          xs: '3rem 0 5rem',
          md: '5rem 0'
        }}
        width={{
          xs: '80vw',
          md: '90vw'
        }}
      >
        <Grid item xs={12} md={5} sm={5} display="flex" justifyContent="start" alignItems={'center'} height='inherit'>
          <Box
            sx={{
              borderRadius: '16px',
              border: '2px solid #fff',
              width: { xs: '20rem', md: '30rem' },
              position: 'relative',
              mb: 5,
              marginLeft: '1rem'
            }}>

            <Box
              component={'img'}
              src={'images/about/sw.png'}
              alt={'skywave'}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'relative',
                top: {
                  xs: '0.7rem',
                  md: '1rem'
                },
                right: {
                  xs: '1.7rem',
                  md: '2rem',
                },
                marginLeft: '1rem',
                borderRadius: '16px',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={7} sm={7}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: {
              xs: '1rem',
              sm: '1.5rem',
              md: '2rem'
            },
            marginTop: {
              lg: '3rem',
              md: '2rem',
              xs: '1rem',
            }
          }} >
          <Typography ml={{ sm: "1.5rem" }} sx={{

            fontFamily: 'Britannic Bold',
            fontSize: {
              xs: '24px',
              sm: '22px',
              md: '37px',
            },
            fontWeight: 400,
            lineHeight: {
              xs: '24px',
              md: '42px'
            },
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#FFFFFF',
          }}>
            The way to get started is to <Box component='span' sx={{ display: { xs: 'none', sm: 'block' } }}>{' '}</Box> quit talking and begin doing!
          </Typography>
          <Typography ml={{ sm: "1.5rem" }} sx={{
            fontFamily: 'Lato',
            fontSize: {
              xs: '14px',
              lg: '18px',
            },
            fontWeight: 400,
            lineHeight: {
              xs: '22px',
              sm: '18px',
              md: '22px',
              lg: '28px'
            },
            letterSpacing: '0',
            textAlign: 'left',
            color: '#FFFFFF',
          }}>
            The journey of Skywave Info Solutions has been started in early 2017 by innovative
            minds who are passionate about changing the world by implementing best IT solutions.
            A bunch of friends with their unique ideas, creativity and guts decided to make an
            well-established company on their own in the challenging IT industry with their
            expertise in web and mobile development. A well-managed team has designers and
            developers both in the same space.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AS1;
