import { Box, Typography } from '@mui/material';
import React from 'react';

const Headtitle = ({ title = '', subTitle = '', showDivider = false, leftCircle = false, rightCircle = false }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" position='relative' overflow='hidden' textAlign={'center'} 
      py={'3rem'}
    >
      {title && (
        <Box sx={{ position: 'relative' }}>
          <Typography
            fontFamily="Britannic Bold"
            color="#fff"
            lineHeight={{
              xs: '3rem',
              sm: '4rem',
              md: '4rem',
              lg: '4rem'
            }}
            sx={{
              letterSpacing: '0em',
              fontSize: {
                xs: '43px',
                sm: '65px',
                lg: '79px'
              },
              fontWeight: 400,
              marginBottom: {
                sm: '1rem',
                lg: '1rem'
              }
            }}
          >
            {title}
          </Typography>
          {showDivider && (
            <Box
              sx={{
                width: {
                  xs: '50%',
                  sm: '60%',
                  md: '70%'
                },
                height: '3px',
                background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                margin: 'auto',
                marginTop: {
                  xs: '1rem',
                  sm: '2rem',
                  md: '3rem',
                },
              }}
            />
          )}
        </Box>
      )}
      {subTitle && (
        <Typography
          variant="span"
          color="#9AABDB"
          fontFamily="Lato"
          sx={{
            fontSize: {
              lg: '22px',
              md: '18px',
              xs: '12px',
            }
          }}
        >
          {subTitle}
        </Typography>
      )}
      {
        leftCircle && (
          <Box
            component='img'
            src='/images/HoloCircle.svg'
            position='absolute'
            top='50%'
            left='0%'
            height={{
              xs: '5rem',
              md: '10rem'
            }}
            sx={{
              translate: '-50% -50%'
            }}
          />
        )
      }
      {
        rightCircle && (
          <Box
            component='img'
            src='/images/HoloCircleFilled.svg'
            position='absolute'
            top='50%'
            right='0%'
            height={{
              xs: '5rem',
              md: '10rem'
            }}
            sx={{
              translate: '50% -50%'
            }}
          />
        )
      }
    </Box>
  );
}

export default Headtitle;
