import React from 'react'
import SkywaveContainer from '@/pages/Components/SkywaveContainer';
import Headtitle from '@/pages/titles/headtitle';
import { Box, Grid, Typography } from '@mui/material';
import chooseData from './chooseData.json';

const ChooseCard
  = ({ title, desc, index }) => (
    <Box
      sx={{
        width: {
          md: '30rem'
        },
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        m: '3rem 1rem'
      }}
    >
      <Box
        component={'img'}
        src={`/images/services/HRConsultancy/Icons/${title}.svg`}
        my={5}
        sx={{
          width: '137.91px',
          aspectRatio: '1/1'
        }}
      />
      <Typography
        variant='h1'
        color='#fff'
        sx={{
          fontFamily: 'Lato',
          fontSize: '35px',
          fontWeight: 700,
          lineHeight: '42px',
          letterSpacing: '2.656407594680786px',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant='body1'
        color='#D4D4D4'
        sx={{
          fontFamily: 'Lato',
          fontSize: '21px',
          fontWeight: 300,
          lineHeight: '29px',
          letterSpacing: '0.2943364977836609px',
        }}
      >
        {desc}
      </Typography>
    </Box>
  )

const Choose = () => {
  return (
    <>
      <SkywaveContainer
        sx={{
          py: 10,
          position: 'relative',
          backgroundImage: "url('/images/portfolio/background1.svg')",
          // backgroundColor: 'blue'
        }}
      >
        <Box
          py={{
            xs: '2rem',
            md: '3rem'
          }}
        >
          <Headtitle title='Why Choose?' rightCircle />
        </Box>
        <Box>
          <Grid
            container
            sx={{
              // padding: '0 !important'
            }}
          >
            {
              chooseData.services?.map((val, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  md={6}
                  sx={{
                    // backgroundColor: `#${Math.floor(Math.random() * 1000001)}`
                  }}
                >
                  <ChooseCard title={val?.title} desc={val?.desc} index={index + 1} />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </SkywaveContainer>
    </>
  )
}

export default Choose