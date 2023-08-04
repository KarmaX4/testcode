import React from 'react';
import { Typography, Grid, Box, Container, Button } from '@mui/material';

const LaptopImageGrid = () => {
  const imageStyles = {
    // width: '100%',
    // height: 'auto',
    borderRadius: '10px',
    backgroundSize: 'cover',
    position: 'absolute',
  };

  const imagePositions = [
    // { transform: 'rotate(-18.56deg)', src: '/procjectcard/Mask group-0.svg' },
    { transform: 'rotate(-8.82°)', src: '/procjectcard/Mask group-1.svg' },
    { transform: 'rotate(0.61deg)', src: '/procjectcard/Mask group-2.svg' },
    { transform: 'rotate(11.61°)', src: '/procjectcard/Mask group-3.svg' },
  ];

  return (
    <>
      {imagePositions.map(({ transform, src }, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} style={{ ...imageStyles }} />
      ))}
  </>
  );
};

const ProjectCard = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: {
          xs: '100%',
          md: '88.2rem !important'
        },
      }}
    >
      <Grid container alignItems='center'>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontSize: { xs: 48, md: 78.42 },
              fontFamily: 'Britannic Bold',
              fontWeight: '400',
              display: 'inline',
            }}
          >
            Our{' '}
            <Typography variant="span" sx={{ color: '#9AABDB' }}>
              Projects
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#C3C3C3',
              fontSize: {
                xs: 20,
                md: 34
              },
              fontFamily: 'Lato',
              fontWeight: '400',
              lineHeight: '1.1',
            }}
          >
            Our portfolio speaks better than words!
          </Typography>
          <Button
              variant="contained"
              size="l"
              sx={{
                background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                borderRadius: '25px',
                marginTop: '30px',
                '&:after': {
                  content: '"\\00BB"',
                  marginLeft: '5px',
                  fontSize: '1rem',
                  opacity: 0, 
                  transition: 'opacity 200ms ease-in-out', 

                },
                '&:hover::after': {
                  opacity: 1,
                },
              }}
            >
              View More
            </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: '37rem',
              // backgroundColor: 'blue',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <img src='/procjectcard/Mask group-3.svg' />
            <LaptopImageGrid />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectCard;
