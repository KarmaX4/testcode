import Headtitle from '@/pages/titles/headtitle';
import { Box, Container } from '@mui/material';
import React from 'react';
import OverlayBanner from '@/pages/aboutpage/section3/overlayBanner';
import CircleBox from './circleBox';
import NummberCard from '@/pages/home/section/section3/nameBanner';


const SS2 = ({ solBanner = false }) => {

    const descOverlayBanner = 'Our highly motivated team of experts come with unique and creative ideas for business upliftment. We completely go through our client’s demand and that is why we are liked by most of the industries as a tech partner.';
    const leftOverlayBanner = 'We are full of interesting creative idea';
    const descSolBanner = 'Our price is the most reasonable one and we provide value more than price taken. With our expert technology consultants, your business will get boosted up and able to compete in the cut-throat market.'

    const Background = {
        width: '100vw',
        borderRadius: '50px 50px 0px 0px',
        backgroundColor: '#18181C',
        // backgroundColor: 'black',
        marginTop: '20rem',
        position: 'relative',
        paddingBottom: '5rem',
    };

    return (
        <Container maxWidth={false} sx={Background}>
            <Box
                sx={{
                    margin: 'auto',
                    width: '90vw'
                }}
            >
                <Box
                    position={'absolute'}
                    zIndex={'1'}
                    left='50%'
                    sx={{
                        transform: 'translate(-50%, -50%)'
                    }}
                >
                    {
                        solBanner
                            ? <OverlayBanner solBtn rightValue={descSolBanner} />
                            : <OverlayBanner leftValue={leftOverlayBanner} rightValue={descOverlayBanner} />
                    }
                </Box>
                <Box pt={30}>
                    <Headtitle title="Why work with us" subTitle='Some interesting facts & numbers.' />
                    <Box
                        height="auto"
                        py={{
                            xs: 10,
                            sm: 15,
                            md: 18
                        }}
                        position="relative"
                        sx={{
                            '& img:nth-of-type(1)': {
                                padding: {
                                    xs: '5px 5px 0 0',
                                    md: '10px 10px 0 0'
                                },
                                position: 'relative',
                                zIndex: '1',
                                right: { xs: '-10%', md: '-20%' },
                                width: {
                                    xs: '50%',
                                    xs: '40%',
                                    md: '30%'
                                },
                                rotate: '-10.56deg',
                                borderTop: '2px solid transparent',
                                borderRight: '2px solid transparent',
                                background: `linear-gradient(#000, #000) padding-box,linear-gradient(141deg, #fff, #fff0) border-box`,
                                // borderRadius: '50%',
                                // border: '4px solid transparent',
                            },
                            '& img:nth-of-type(2)': {
                                padding: {
                                    xs: '5px 5px 0 0',
                                    sm: '10px 10px 0 0'
                                },
                                right: { xs: '10%', md: '20%' },
                                position: 'absolute',
                                width: {
                                    xs: '50%',
                                    xs: '40%',
                                    md: '30%'
                                },
                                rotate: '15.24deg',
                                borderTop: '2px solid transparent',
                                borderRight: '2px solid transparent',
                                background: `linear-gradient(#18181C, #18181C) padding-box,linear-gradient(141deg, #fff, #fff0) border-box`,
                            },
                        }}
                    >
                        <Box component='img' src={'/images/services/Mask group (4).png'} alt={"pic2"} />
                        <Box component='img' src={'/images/services/Mask group (3).png'} alt={"pic2"} />
                    </Box>
                    <CircleBox />
                </Box>
            </Box>
        </Container>
    )
}

export default SS2;
