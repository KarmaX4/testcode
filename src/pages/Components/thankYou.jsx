import React from 'react'
import { Button, Box, Typography } from '@mui/material';

const ThankYou = () => {
  return (
    <Button
        sx={{
            background: "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)",
            height: '30rem',
            width: '100vw',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
      <Box
        sx={{
          // backgroundColor: '#955664',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "3.5rem"
        }} 
      >
        <Box 
          width='7.5vw'
          component='img'
          src='/images/icons/ThankYouHeart.svg'
          alt='Thank You Heart'
        />
        <Typography
          variant='h1'
          color='#FFFFFF'
          sx={{
            fontFamily: "Britannic Bold",
            fontSize: "90px",
            fontWeight: 400,
            lineHeight: "35px",
            letterSpacing: "1.0833286046981812px",
            textTransform: "capitalize"
          }}
        >
          Thank you for watching!
        </Typography>
      </Box>
    </Button>
  )
}

export default ThankYou