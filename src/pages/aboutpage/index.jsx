import React from 'react'
import Navbar from '@/pages/navbar'
import MainBanner from '@/pages/bannner/mainBanner'
import AS1 from './section1'
import AS2 from './section2'
import AS3 from './section3'
import MainFooter from '@/pages/footer/mainFooter'
import NummberCard from '@/pages/home/section/section3/nameBanner'
import { Box } from '@mui/material';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <MainBanner
        title="About"
        subtitle="Skywave"
        description="Who we are & what we do"
        imageUrl={"/Avatar/peep-bg 1.png"}
        imgBackground
      />
      <AS1 />
      <AS2 />
      <Box
        sx={{
          padding: {
            xs: '3rem 0',
            md: '5rem 0'
          },
          backgroundColor: '#000',
        }}
      >
        <NummberCard />
      </Box>
      <AS3 />
      <MainFooter />
    </>


  )
}

export default AboutPage