"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material';

const MainBanner = dynamic(() => import('@/pages/bannner/mainBanner'))
const Navbar = dynamic(() => import('@/pages/navbar'))
const MainFooter = dynamic(() => import('@/pages/footer/mainFooter'))
const SectionShowCase = dynamic(() => import('./section1'))
const Choose = dynamic(() => import('./section2'))
const HRService = dynamic(() => import('./section3'))

const HRConsultancyPage = () => {

  return (
    <>
      <Navbar />
      <MainBanner title='HR' subtitle='Consultancy' description='Home / Services / HR Consultancy' imageUrl='/Avatar/HRConsultancy.svg' flyBackground />
      <SectionShowCase />
      <Choose />
      <HRService />
      <Box mb={{
        xs: 30,
        sm: 55,
        md: 80
      }} />
      <MainFooter />
    </>
  )
}

export default HRConsultancyPage