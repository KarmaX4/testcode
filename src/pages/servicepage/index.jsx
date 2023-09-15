'use client'
import React from 'react'
import { Box } from '@mui/material';
import Navbar from '../navbar'
import MainBanner from '../bannner/mainBanner'
import SS1 from './section1'
import SS2 from './section2'
import MainFooter from '../footer/mainFooter'
import NummberCard from '@/pages/home/section/section3/nameBanner';

const ServicePage = () => {
    return (
        <>
            <Navbar />
            <MainBanner title='Our' subtitle='Services' description='What we are good at' imageUrl='/Avatar/28523691.png' imgBackground />
            <SS1 />
            <SS2 />
            <Box
                sx={{
                    paddingBottom: '5rem',
                    background: '#000'
                }}
            >
                <Box sx={{
                    paddingTop: '6rem',
                    paddingBottom: '15rem',
                    background: '#18181C'
                }}>
                    <NummberCard />
                </Box>
            </Box>
            <></>
            <MainFooter />
        </>
    )
}

export default ServicePage