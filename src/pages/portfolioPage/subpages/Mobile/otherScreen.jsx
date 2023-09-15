import { Box, Container } from '@mui/material'
import React from 'react'
import Portfoliotitle from '../portfoliotitle'
import SkywaveContainer from '@/pages/Components/SkywaveContainer';

const EllipsePositions = [
  { top: '15%', left: '-30%', rotate: '30deg' },
  { bottom: '-3%', left: '-30%', rotate: '30deg' },
  { top: '10%', right: '-35%', rotate: '0deg'},
  { bottom: '5%', right: '-35%', rotate: '0deg'},
]

const OtherScreen = ({ appName }) => {
  return (
    <SkywaveContainer
      sx={{
        py: 10,
        my: 30,
        position: 'relative',
        backgroundImage:"url('/images/portfolio/background1.svg')",
        // backgroundColor: 'blue'
      }}
    >
      <Box position='relative' display={'flex'} justifyContent={'center'} mb={10} sx={{zIndex: 1}}>
        <Portfoliotitle number='04' text='Other Screens' />
      </Box>
      {
        EllipsePositions?.map((val, index) => (
          <Box
            key={index}
            component={'img'}
            src={`/images/portfolio/EllipseBackground.svg`}
            sx={{
              position: 'absolute',
              zIndex: 0,
              ...val
            }}
          />
        ))
      }
      <Box position='relative' component={'img'} src={`/images/portfolio/${appName}/Other Screens.svg`} sx={{zIndex: 1, width: '100vw'}}/>
    </SkywaveContainer>
  )
}

export default OtherScreen