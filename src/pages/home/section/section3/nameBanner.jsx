import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';

const NummberCard = () => {
  const finalValues = [95, 50, 26, 150];
  const [counts, setCounts] = useState(Array(4).fill(0));

  useEffect(() => {
    const animationDuration = 2000;
    const step = 50;
    const totalSteps = animationDuration / step;
    const countSteps = finalValues.map(value => value / totalSteps);

    let currentCounts = Array(4).fill(0);

    const timer = setInterval(() => {
      currentCounts = currentCounts.map((count, index) => Math.min(count + countSteps[index], finalValues[index]));
      setCounts(currentCounts);

      if (currentCounts.every((count, index) => count >= finalValues[index])) {
        clearInterval(timer);
      }
    }, step);

    return () => clearInterval(timer);
  }, []);

  const nameBannerStyles = {
    width: {
      xs: '100%',
      md: '100%',
    },
    overflow: 'hidden'
  };

  const nameBannerNumberStyles = {
    fontSize: {
      xs: '3rem',
      md: '71.06px'
    },
    letterSpacing: '0.06em',
    lineHeight: '111.5%',
    fontWeight: 800,
    fontFamily: 'Lato',
    color: '#fff',
    textAlign: 'center',
    margin: "auto",
  };

  const nameBannerTextStyles = {
    position: 'relative',
    fontSize: {
      xs: '16px',
      md: '33.33px'
    },
    letterSpacing: '2.26px',
    lineHeight: {
      xs: '20px',
      md: '35px'
    },
    fontFamily: 'Britannic Bold',
    color: '#b8ceff',
    textAlign: 'center',
  };

  const splitDivider = index => (index < counts.length - 1
    ? ({
      borderRight: {
        xs: index === 1 ? '0px solid #ED6FCB' : '6px solid #ED6FCB',
        md: '6px solid #ED6FCB',
      }
    })
    : {}
);

  return (
    <Container maxWidth={false} sx={nameBannerStyles}>
      <Box
        sx={{
          backgroundColor: "#fff",
          position: 'relative',
          borderRadius: {
            // xs: '160px',
            xs: '160px 0px 0px 160px'
          },
          background: 'linear-gradient(106.84deg, #9257af, #191249)',
          width: {
            xs: 'auto',
            md: 'inherit'
          },
          height: {
            xs: 'auto',
            md: '281px'
          },
          marginBottom: '10rem',
          ml: {
            xs: 0,
            md: 6
          },
          display: 'flex',
          alignItems: 'center',
          placeContent: 'center',
          justifyContent: 'center',
          padding: {
            xs: '5rem 3rem',
            md: 0
          },
        }}
        >
        <Grid
          container
          spacing={2}
          flexWrap= {{
            xs: 'wrap !important',
            md: 'nowrap !important'
          }}
          width={{
            xs: '100%',
            md: '88.2rem',
          }}
        >
          {counts.map((count, index) => (
              <Grid key={index} item xs={6} sm={3}
                sx={{
                  paddingTop: '0 0 16px 16px !important',
                  // paddingLeft: '0 !important',
                  // paddingBottom: '16px !important',
                  // paddingRight: '16px !important',
                }}
              >
                <Box
                  sx={{
                    ...splitDivider(index),
                    // backgroundColor: 'red',
                    height: {
                      xs: '6rem',
                      md: '11rem'
                    },
                  }}
                >
                <Typography variant="h1" sx={nameBannerNumberStyles}>
                  {Math.round(count)}{index === 0 ? '%' : '+'}
                </Typography>
                <Typography sx={nameBannerTextStyles}>
                  {['Customer Satisfaction', 'Specialists in our team', 'Industry Serve', 'Successful Projects'][index]}
                </Typography>
                </Box>
              </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default NummberCard;
