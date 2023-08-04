
import ServiceCards from '@/pages/Card';
import Headtitle from '@/pages/titles/headtitle';
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const SS1 = () => {


    const cardsData = [
        {
            title: 'Website',
            description: 'Custom Web Application Development Services for customers',
            imageUrl: '/images/ourServices/website.png',
            iconUrl: '/icons/services/Group3.svg',link:'/service/websites'
            
        },
        {
            title: 'UI/UX Design',
            description: 'We offer design services to build engaging user experiences',
            imageUrl: '/images/ourServices/UIUX.png',
            iconUrl: '/icons/services/Group4.svg',
            
        },
        {
            title: 'SEO Service',
            description: 'We work to bring your business digitally up by using the latest marketing tactics on the internet.',
            imageUrl: '/images/ourServices/Seo.png',
            iconUrl: '/icons/services/Group1.svg'
        },
        {
            title: 'Odoo ERP',
            description: 'We build custom and scalable software in Odoo as per the requirement.',
            imageUrl: '/images/ourServices/odoo.png',
            iconUrl: '/icons/services/Group6.svg'
        },
        {
            title: 'BlockChain',
            description: 'We offer reliable Blockchain development & consulting services',
            imageUrl: '/images/ourServices/BlockChain.png',
            iconUrl: '/icons/services/Group2.svg'
        },
        {
            title: 'Mobile App',
            description: 'Best Mobile Application Development Services for Enterprise',
            imageUrl: '/images/ourServices/Mobile.png',
            iconUrl: '/icons/services/Group5.svg  ',
            link:'/service/mobile-apps'
        },
    ];

    return (
      <Container maxWidth={false} sx={{mt:"-16%"}}>
        <ServiceCards cardsData={cardsData} />
      </Container>
  )
}

export default SS1;
