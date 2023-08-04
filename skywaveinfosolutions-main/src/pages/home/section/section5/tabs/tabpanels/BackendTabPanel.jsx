import React from 'react'
import Grid from '@mui/material/Grid';

const BackendTabPanel = () => {
  const logos = Array.from({ length: 7 }, (_, index) => `/icons/tabs/backend/download (${index + 10}).svg`);

  return (
    <Grid container spacing={2} justifyContent="center">
      {logos.map((logo, index) => (
        <Grid item
        key={index}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: 'calc(100% / 3)', 
          '@media (min-width: 700px)': {
            maxWidth: 'calc(100% / 4)', 
          },
          '@media (min-width: 960px)': {
            maxWidth: 'calc(100% / 7)', 
          },
        }}>
          <img src={logo} alt={`Logo ${index}`} style={{ width: '85px', height: '85px' }} />
        </Grid>
      ))}
    </Grid>
  );
};


export default BackendTabPanel