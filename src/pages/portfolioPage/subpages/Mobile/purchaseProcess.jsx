import { Container, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Portfoliotitle from '../portfoliotitle';



const PurchaseProcess = ({ itemTitles, appName }) => {

  return (
    <>
      <Container maxWidth={false} sx={{ width: '90vw', p: '0 !important', mt: 10 }}>
        <Box display={'flex'} justifyContent={'center'} my={10}>
          <Portfoliotitle number='03' text='Purchase Process' />
        </Box>
        {itemTitles?.map((title, index) => (
          <Grid container key={index}>
            <Grid item xs={12} md={6} position={'relative'} order={index % 2 === 0 ? 1 : 2}>
              <Box
                component={'img'}
                src={`/images/portfolio/${appName}/${title}.svg`}
                position={'absolute'}
                zIndex={1}
                top={0}
                left='50%'
                sx={{
                  translate: index % 2 === 0 ? '-75%' : '-25%',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} py={15} order={index % 2 === 0 ? 2 : 1}>
              <Box
                sx={{
                  position: 'relative',
                  height: '25rem',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Box
                  component={'img'}
                  src='/images/portfolio/element.svg'
                  position={'absolute'}
                  right={index % 2 === 0 ? 'auto' : '0'}
                  left={index % 2 === 0 ? '0' : 'auto'}
                  sx={{ rotate: index % 2 === 0 ? '0deg' : '180deg' }}
                />
                <Typography
                  sx={{
                    fontSize: '54px',
                    backgroundImage: 'linear-gradient(130deg, #ED6FCB 38.19%, #8372F2 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                  {title}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
};

export default PurchaseProcess;
