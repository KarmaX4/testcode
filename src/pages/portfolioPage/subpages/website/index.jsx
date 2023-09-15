"use client"
import React from 'react'
import MainFooter from '@/pages/footer/mainFooter';
import MainBanner from '@/pages/bannner/mainBanner';
import Navbar from '@/pages/navbar';
import AboutDetailPage from './About';
import WebsiteD_Section from './Section';
import ThankYou from '@/pages/Components/thankYou';
import { Box } from '@mui/material';

const WebsiteSolutionPage = ({ data }) => {
    return (
        <>
            <Navbar />
            {
                data?.map((val, index) => (
                    <React.Fragment key={index}>
                        <MainBanner title={val?.banner?.title} subtitle={val?.banner?.subTitle} description={val?.banner?.description} imageUrl={val?.banner?.imageUrl} flyBackground />
                        <AboutDetailPage about={val?.about} />
                        <WebsiteD_Section screens={val?.screens} folderName={val?.folderName}/>
                    </React.Fragment>
                ))
            }
            <ThankYou />
            <Box mb={30} />
            <MainFooter />
        </>
    )
}

export default WebsiteSolutionPage