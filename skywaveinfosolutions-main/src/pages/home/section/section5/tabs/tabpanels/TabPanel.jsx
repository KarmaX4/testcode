import React from 'react';
import Grid from '@mui/material/Grid';

const TabPanel = ({ tab, count }) => {
  const logos = Array.from({ length: count }, (_, index) => `/icons/tabs/${tab}/download (${index + 1}).svg`);

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ display: 'flex', flexWrap: 'wrap' }}>
      {logos.map((logo, index) => (
        <Grid
        item
        key={index}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: 'calc(100% / 3)', // Show 3 items per row on mobile
          '@media (min-width: 960px)': {
            maxWidth: 'calc(100% / 7)', // Show 7 items per row on larger screens
          },
        }}
        >
          <img src={logo} alt={`Logo ${index}`} style={{ width: '85px', height: '85px' }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TabPanel;
