"use client"
import React, { useEffect, useRef } from 'react';
import { Grid, CssBaseline, Container, Box, Typography } from '@mui/material';

const circlesData = [
  {
    description: 'Our dedicated team of developers and designers work together on your project to pull the best results and build a product which transforms your business into automation.',
    imageUrl: '/images/icons/services/circleno/Group 520.png',
    circleBorderColor: '#F36640, #8372F2'
  },
  {
    description: 'We take care of quality and assure that the end product is the satisfied version to the client and meets requirements.',
    imageUrl: '/images/icons/services/circleno/Group 521.png',
    circleBorderColor: '#CD1673, #8372F2'
  },
  {
    description: 'We use the latest tools and technologies for project development. It allows us to keep track of project development phases and get more outcome.',
    imageUrl: '/images/icons/services/circleno/Group 522.png',
    circleBorderColor: '#FD9F34, #8372F2'
  },
];

const CircleBox = () => {
  const gridItemRef = useRef([]);

  useEffect(() => {
    const adjustHeight = () => {
      gridItemRef.current.forEach((item) => {
        item.style.height = `${item.clientWidth}px`;
      });
    };

    adjustHeight();
    window.addEventListener('resize', adjustHeight);
    return () => {
      window.removeEventListener('resize', adjustHeight);
    };
  }, []);

  return (
    <Container
      maxWidth={false}
      width="90vw"
    >
      <CssBaseline />
      <Grid container spacing={2}>
        {circlesData.map((circle, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              ref={(el) => (gridItemRef.current[index] = el)}
              sx={{
                position: 'relative',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                height: '100%',
                background: `linear-gradient(#18181C, #18181C) padding-box,linear-gradient(201deg, ${circle.circleBorderColor}) border-box`,
                borderRadius: '50%',
                border: '4px solid transparent',
              }}
            >
              <Box
                component="h1"
                sx={{
                  position: 'absolute',
                  maxWidth: '100%',
                  marginBottom: '10px',
                  top: {
                    xs: '3%',
                    sm: '-8%',
                    md: '-2%',
                    lg: '2%'
                  },
                  left: '7%',
                  color: '#fff',
                  backgroundColor: '#18181C',
                  padding: '2% 3%',
                  borderRadius: '50%',
                }}
              ><Typography
                sx={{
                  fontSize: {
                    xs: '2rem',
                    sm: '2rem',
                    lg: '3rem'
                  },
                  backgroundImage: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                  0{index + 1}
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: '#fff',
                  padding: '1rem',
                  fontSize: {
                    xs: '14px',
                    sm: '10px',
                    md: '14px',
                    lg: '22px'
                  }
                }}
              >{circle.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default CircleBox