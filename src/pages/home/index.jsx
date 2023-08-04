"use client"
import React from 'react'
import Navbar from '../navbar'
import HeroBanner from '../bannner'
import ConatctBanner from '../bannner/contactbanner'
import Footer from '../footer'
import CopyRight from '../CopyRight'
import Section1 from './section/section1'
import Section2 from './section/section2'
import Section5 from './section/section5'
import Section4 from './section/section4'
import Section3 from './section/section3'
import Animation from '@/Animation/page'

export const Homepage = () => {
  return (
    <>
      {/* <Animation /> */}
      <Navbar />
      <HeroBanner />
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4 />
      <Section5/>
      <ConatctBanner />
      <Footer />
      <CopyRight />
    </>
  )
}
