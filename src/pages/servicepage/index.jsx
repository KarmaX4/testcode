'use client'
import React from 'react'
import Navbar from '../navbar'
import MainBanner from '../bannner/mainBanner'
import SS1 from './section1'
import SS2 from './section2'
import MainFooter from '../footer/mainFooter'



  
 
  
const ServicePage = () => {
    return (
        <>
            <Navbar />
            <MainBanner title='Our' subtitle='Services' description='What we are good at' imageUrl='/Avatar/28523691.png'
                imgBackground />
            <SS1 />
            <SS2 />
            <MainFooter/>
        </>
    )
}

export default ServicePage