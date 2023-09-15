import React from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import Portfoliotitle from '../portfoliotitle';

const Aboutproject = ({ about, appName }) => {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    fontWeight: 'bold !important',
  };

 
  const parseTextWithGradient = (text) => {
    const parts = text?.split(/(<t>.*?<\/t>)/);
    return parts?.map((part, index) => {
      if (part.startsWith('<t>') && part.endsWith('</t>')) {
        const content = part.slice(3, -4);
        return (
          <strong key={index} style={gradientStyle}>
            {content}
          </strong>
        );
      } else {
        return <span key={index}>{part}</span>;
      }
    });
  };

  return (
    <Container maxWidth={false} sx={{ width: '90vw', p: '0!important' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Portfoliotitle number={about?.number} text={about?.title} />
          <Typography
            sx={{
              fontFamily: 'Lato',
              fontSize: '20px',
              fontWeight: 500,
              lineHeight: '24px',
              letterSpacing: '0.07em',
              textAlign: 'left',
              color: '#fff',
              pb: 5,
            }}
          >
            {parseTextWithGradient(about?.description)}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Lato',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '21px',
              letterSpacing: '0.07em',
              textAlign: 'left',
              color: '#888888',
            }}
          >
            {about?.subDescription}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} display={'flex'} justifyContent={'center'}>
          <Box component={'img'} src={`/images/portfolio/${appName}/aboutlogo.svg`} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Aboutproject;
