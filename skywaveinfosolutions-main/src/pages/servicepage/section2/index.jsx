import NummberCard from '@/pages/home/section/section3/nameBanner';
import Headtitle from '@/pages/titles/headtitle';
import { Box, Container } from '@mui/material';
import React from 'react';
import OverlayBanner from '@/pages/aboutpage/section3/overlayBanner';
import CircleBox from './circleBox';


const SS2 = () => {

    const Background = {
        width: '100vw',
        borderRadius: '50px 50px 0px 0px',
        backgroundColor: 'black',
        marginTop: '20rem',
        position: 'relative',
        paddingBottom: '4rem'
    };

    return (
        <Container maxWidth={false} sx={Background}>
            <Box
                position={'absolute'}
                zIndex={'1'}
                top={-130}
                left={60}
            >
                <OverlayBanner />
            </Box>
            <Box pt={30}>
                <Headtitle title="Why work with us" subTitle='Some interesting facts & numbers.' />
                <Box height={'680px'} width={'100vw'} px={20} pt={15}>
                    <img style={{position:'relative', zIndex:'1',right:"-8%" }} src={'/images/services/Mask group (4).png'} alt={"pic2"} />
                    <img style={{position:'absolute', }} src={'images/services/Mask group (3).png'} alt={"pic1"} />
                </Box>
                <CircleBox />
            </Box>
            <NummberCard />
        </Container>
    )
}

export default SS2;
