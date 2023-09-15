"use client"
import React from 'react'
import Navbar from '../navbar'
import MainBanner from '../bannner/mainBanner'
import SolutionsCards from './sections'
import MainFooter from '../footer/mainFooter'
import SS2 from '../servicepage/section2'
import NummberCard from '@/pages/home/section/section3/nameBanner'
import { Box } from '@mui/material'

const SolutionPage
  = () => {
    return (
      <>
        <Navbar />
        <MainBanner title='Our' subtitle='Solutions' description='What we are good at' imageUrl='/Avatar/Solutions.svg' imgBackground />
        <SolutionsCards />
        <Box>
          <SS2 />
        </Box>
        <Box
          sx={{
            paddingBottom: '22rem !important',
            // backgroundColor:'#000',
            backgroundColor: '#18181C',
          }}
        >
          <NummberCard />
        </Box>
        <MainFooter />
      </>
    )
  }

export default SolutionPage