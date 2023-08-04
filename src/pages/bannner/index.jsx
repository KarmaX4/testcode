"use client"
import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box, Typography, Button,} from '@mui/material';
// import "./banner.css";
import Asset from './asset';

const assetsArray = [
  <Asset />
];

const HeroBanner = () => {
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAssetIndex((prevIndex) => (prevIndex + 1) % assetsArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const buttonStyles = {
    padding: '8px 25px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '30px',
    color: 'white',
    background: 'linear-gradient(108.46deg, #ED6FCB 38.19%, #8372F2 100%)',
    transition: 'background 0.3s ease-in-out',
    transform: 'scale(1.02)',
    boxShadow: 'rgb(130 106 223) 0px 1px 2px 1px',
    ':hover': {
      background: 'linear-gradient(70.46deg, #ED6FCB 38.19%, #8372F2 100%)',
      transform: 'scale(1)',
      boxShadow: 'rgb(130 106 223) 0px 1px 2px 1px',
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        alignItems: 'center',
        justifyContent: {
          xs: 'center',
          md: 'space-around'
        },
        m: 'auto',
        width: {
          xs: '100vw',
          md: '88.2rem'
        },
        height: '100vh',
        padding: '20px',
      }}
    >
      <Box
        // backgroundColor='red'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          gap: 4,
          width: {
            xs: '100%',
            md: 'auto'
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: '50px',
              md: '75px'
            },
            fontWeight: 900,
            lineHeight: {
              xs: '50px',
              md: '74px'
            },
            letterSpacing: '1.5px',
            textAlign: 'left',
            color: '#FFFFFF',
            fontFamily:"Britannic Bold"
          }}
        >
          Mobile
          <br />
          <Typography
            variant="span"
            sx={{
              letterSpacing: '0px',
              fontFamily: 'Britannic Bold',
              backgroundImage: 'linear-gradient(130deg, #ED6FCB 38.19%, #8372F2 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Development
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          width={'inherit'}
          sx={{
            fontFamily: 'Lato',
            fontWeight:400,
            marginTop: {
              xs: '16px',
              md: '0'
            },
            width: {
              xs: '100%',
              md: '370px'
            },
            color: '#fff',
            textAlign: {
              xs: 'left',
              md: 'center',
              lg: 'left'
            },
          }}
        >
          Top-notch mobile app development services
          provider in India,Ranked as #1 mobile development
          company in clutch.
        </Typography>
        <Button
          style={buttonStyles}
        >
          Discover More
        </Button>
      </Box>
      <Box
      // backgroundColor='blue'
        sx={{
          width: {
            xs: '100%',
            md: '50%'
          },
          display: 'flex',
          justifyContent: 'center',
          mt: {
            xs: 4,
            md: 0
          },
        }}
      >
        {assetsArray[currentAssetIndex]}
      </Box>
    </Container>
  );
}

export default HeroBanner;
