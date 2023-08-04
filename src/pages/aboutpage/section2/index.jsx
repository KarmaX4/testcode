import NummberCard from '@/pages/home/section/section3/nameBanner';
import Headtitle from '@/pages/titles/headtitle';
import { Box, Container, Grid, Button, Card, CardContent, CardActions, Typography } from '@mui/material';
import React from 'react';
import OverlayBanner from '../section3/overlayBanner';
import ServiceCards from '@/pages/Card'

const AS2 = () => {

    const Background = {
        width: '100%',
        height: '1966px',
        borderRadius: '50px 50px 0px 0px',
        backgroundColor: 'black',
        marginTop: '20rem',
        position: 'relative',
        padding: '0 !important',
    };

    const cardsData = [
        {
            title: 'Website',
            description: 'Custom Web Application Development Services for customers',
            imageUrl: '/images/ourServices/website.png',
            iconUrl: '/icons/services/Group3.svg'
        },
        {
            title: 'UI/UX Design',
            description: 'We offer design services to build engaging user experiences',
            imageUrl: '/images/ourServices/UIUX.png',
            iconUrl: '/icons/services/Group4.svg'
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
            iconUrl: '/icons/services/Group5.svg  '
        },
    ];

    return (
        <Container maxWidth={false} sx={Background}>
            <Box

                position={'absolute'}
                zIndex={'1'}
                width={{
                    lg: '100%',
                    xl: '88.2rem'
                }}
                top={0}
                left='calc(100vw*50/100)'
                sx={{
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <OverlayBanner />
            </Box>
            <ServiceCards cardsData={cardsData} />
            <NummberCard />
        </Container>
    )
}

export default AS2;
