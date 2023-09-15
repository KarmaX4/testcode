import { Box } from '@mui/material'
import React from 'react'
import Portfoliotitle from '../../portfoliotitle'

const SectionDetailContent = ({ index, text, appName, contentWidth = '100%', lastContent }) => {

  const styles = (index == lastContent)? {
    position: "relative",
    left: "50%",
    translate: '-50%',
  }: {}

  return (
    <Box
      my='67px'
      position='relative'
    >
      <Box
        component='img'
        src='/images/portfolio/websiteDetail/AboutX.svg'
        alt='Background About Arrow'
        position='absolute'
        sx={{
          width: '100vw',
          left: '50%',
          translate: '-50%',
          zIndex: -1,
          top: '30rem'
        }}
      />
      <Portfoliotitle number={`0${index}`} text={text} website />
      <Box
        my='123px'
        component='img'
        width={contentWidth}
        src={`/images/portfolio/websiteDetail/${appName}/${text}.svg`}
        alt={text}
        sx={styles}
      />
    </Box>
  )
}

export default SectionDetailContent