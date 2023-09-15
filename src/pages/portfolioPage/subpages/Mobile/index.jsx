"use client"
import MainBanner from '@/pages/bannner/mainBanner'
import Navbar from '@/pages/navbar'
import React from 'react'
import MainFooter from '@/pages/footer/mainFooter'
import { Box } from '@mui/material'
import ThankYou from '@/pages/Components/thankYou'
import Aboutproject from './section1';
import ColorSection from './colorSection';
import PurchaseProcess from './purchaseProcess';
import OtherScreen from './otherScreen'

const MobilePortfolio = ({ data }) => {
  return (
    <>
      <Navbar />
      {
        data?.map((data, index) => (
          <React.Fragment key={index}>
            <MainBanner title={data?.banner?.title} subtitle={data?.banner?.subTitle} description={data?.banner?.description} imageUrl={data?.banner?.imageUrl} flyBackground />
            <Aboutproject about={data?.about} appName={data?.folderName} />
            <ColorSection data={data?.colorSection} />
            <PurchaseProcess appName={data?.folderName} itemTitles={data?.purchaseProcess?.itemTitles} />
            <OtherScreen appName={data?.folderName} />
          </React.Fragment>
        ))
      }
      <ThankYou />
      <Box mb={30} />
      <MainFooter />
    </>

  )
}

export default MobilePortfolio
