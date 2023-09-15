"use client"
import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Topbar = ({ onDataSelected }) => {
  const [option, setOption] = useState(0);
  const items = ["Mobile Apps", "WebSites", "Graphics & Logo Design"];

  const handleGridItemClick = (index) => {
    if (onDataSelected) {
      onDataSelected(items[index]);
      setOption(index);
    }
  };

  return (
    <Box sx={{ mb: 10, mt: 5 }}>
      <Grid container spacing={2} justifyContent="center">
        {items.map((itemName, index) => {
          const iconPath = `/images/icons/portfolio/${itemName}.svg`;
          const isSelected = index === option;

          const gridItemStyles = {
            border: isSelected ? '2px solid white' : 'none',
            alignItems: 'center',
            background: index % 2 !== 0
              ? 'linear-gradient(106.84deg, #9257AF -37.91%, #191249 99.25%)'
              : 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
            padding: '0 !important',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'center',
            color: 'white',
            position: 'relative',
            borderRadius: '15px',
            width: '223px',
            transform: isSelected ? 'scale(1.1)' : 'scale(1)',
            aspectRatio: '4/2.6',
            overflow: 'hidden',
            position: 'relative',
            transition: 'transform 500ms',
          };

          return (
            <Grid
              borderRadius={'2px solid white'}
              key={index}
              item
              xs={4}
              sm={3}
              md={2}
              onClick={() => handleGridItemClick(index)}
              sx={gridItemStyles}
            >
              <Box component={'img'} src={iconPath} alt={itemName} style={{ width: '100%', height: '100%' }} />
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '0px 0px 15px 15px',
                background: '#000000a1',
                width: '100%',
                aspectRatio: '6',
                position: 'absolute',
                bottom: isSelected ? 0 : '100%',
                // opacity: isSelected ? 1 : 0,
                // left: '0%',
                // transform: 'translateX(-50%)',
                transition: 'bottom 500ms',
                height: '100%'
              }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Poppins',
                    fontSize: {
                      xs: '12px',
                      md: '9px',
                      lg: '14px'
                    },
                    fontWeight: 700,
                    lineHeight: '18px',
                    letterSpacing: '0em',
                    paddingTop: '0.4rem',
                    transition: 'all 500ms'
                  }}
                >
                  {itemName}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Topbar;
