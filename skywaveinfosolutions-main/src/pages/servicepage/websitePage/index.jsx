'use client'
import MainBanner from '@/pages/bannner/mainBanner'
import Navbar from '@/pages/navbar'
import React from 'react'
import WebsiteSectionData from './websiteSectionData'
import ServicesSections from '../mobileAppPage/sections'
import MainFooter from '@/pages/footer/mainFooter'

const WebsitePage = () => {
  const totalSections = WebsiteSectionData.length;
  return (
    <>
    <Navbar/>
    <MainBanner title='Websites' description='Home / Services / Websites' imageUrl='/Avatar/website.png' flyBackground/>
    {WebsiteSectionData.map((sectionData, index) => (
        <ServicesSections key={index} data={sectionData} index={index} showTopImage={false} totalSections={totalSections}/>
      ))}
      <MainFooter/>
    </>

  )
}

export default WebsitePage