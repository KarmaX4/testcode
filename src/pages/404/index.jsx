import { Box, Typography } from '@mui/material'
import React from 'react'

const _404 = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: {
          md: '8rem 0  8rem 0',
          sm: '8rem 0 18rem 0'
        }
      }}>
        <Box
          component={"img"}
          src={'/images/404/404.svg'}
          alt='404'
          sx={{
            height: '60vh',
            width: {
              xs: '50vh',
              sm: 'auto'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        /></Box>
    </>
  )
}

export default _404