import { Container, Box, Typography } from '@mui/material';
import React from 'react';

const HeadText = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        m: 'auto',
        width: {
          xs: '100%',
          md: '88.2rem !important'
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '102px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          sx={{
            fontFamily: 'Britannic Bold',
            fontSize: {
              xs: '55px',
              md: '79px'
            },
            fontWeight: 400,
            lineHeight: '65px',
            letterSpacing: '2px',
            textAlign: 'center',
            color: '#FFFFFF',
            mb: '16px', 
          }}
        >
          How we work?
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Lato',
            fontSize: '21px',
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: '2px',
            textAlign: 'center',
            color: '#9AABDB',
          }}
        >
          Don’t be busy - be productive!
        </Typography>
      </Box>
    </Container>
  );
};

export default HeadText;
