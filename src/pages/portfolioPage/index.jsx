"use client"
import React from 'react'
import MainBanner from '../bannner/mainBanner'
import Navbar from '../navbar'
import CardContainer from './sections/cardContainer'
import MainFooter from '../footer/mainFooter'

const PortFolioPage = () => {
  return (
    <>
    <Navbar/>
    <MainBanner title='Our' subtitle='Portfolio'  description='Check out our projects!' imageUrl='/Avatar/portfolio.svg' imgBackground/>    
    <CardContainer/>
    <MainFooter/>
    </>
  )
}

export default PortFolioPage