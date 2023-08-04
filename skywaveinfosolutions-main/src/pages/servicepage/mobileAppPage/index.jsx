'use client'
import MainBanner from '@/pages/bannner/mainBanner'
import Navbar from '@/pages/navbar'
import React from 'react'
import ServicesSections from './sections'
import mobileSectionsData from './sections/mobileSectionsData'
import ContactBanner from '@/pages/bannner/contactbanner'
import Footer from '@/pages/footer'

const MobileAppPage = () => {
  const totalSections = mobileSectionsData.length;
  return (
    <>
    <Navbar/>
    <MainBanner title='Mobile' subtitle='Apps' description='Home / Services / Mobile Apps' imageUrl='/Avatar/mobileapp.png' flyBackground/>
    {mobileSectionsData.map((sectionData, index) => (
        <ServicesSections key={index} data={sectionData} index={index} totalSections={totalSections} showTopImage />
      ))}
      <ContactBanner/>
      <Footer/>
    </>
  )
}

export default MobileAppPage