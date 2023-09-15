"use client"
import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import AboutCardsBanner from './aboutcards';

const AS3 = () => {
    return (
        <>
            <Container
                maxWidth={false}
                sx={{
                    margin: 'auto',
                    padding: '0px !important',
                    width: '100%',
                    marginBottom: { md: '11.7rem', sm: '23rem', xs: "20rem" }
                }}
            >
                <Box position={'relative'}>
                    <Box
                        component='img'
                        src={'/images/about/hand.png'}
                        alt={'handhake'}
                        sx={{
                            height: { xs: "50.8%", sm: "60%", md: "521px" },
                            position: 'absolute',
                            zIndex: '0',
                            top: {
                                lg: '-3rem',
                                md: '-2rem',
                                xs: '-1rem',
                            },
                            left: {
                                xs: '-5.6rem',
                                sm: '0'
                            }
                        }}
                    />
                    <Box
                        sx={{
                            marginLeft: { xs: '7.5rem', md: '25.5rem', sm: "15.4rem" },
                            marginBlock: '4rem',
                            width: 'fit-content',
                            position: 'relative',
                            zIndex: '1'
                        }}
                    >
                        <Typography
                            varient='div'
                            sx={{
                                fontFamily: 'Britannic Bold',
                                fontSize: { xs: "43px", md: '65px', lg: '79px' },
                                fontWeight: 400,
                                lineHeight: { xs: "43px", md: '65px' },
                                letterSpacing: '3px',
                                textAlign: { xs: "left", md: 'left' },
                                color: 'white',
                                overflow: 'unset',
                            }}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    fontFamily: 'Britannic Bold',
                                    fontSize: 'inherit',
                                    fontWeight: 400,
                                    lineHeight: '65px',
                                    letterSpacing: '2px',
                                    width: '163px',
                                    height: '66px',
                                    color: 'transparent',
                                    zIndex: '2',
                                    WebkitTextStroke: '2px #FFFFFF',
                                    overflow: 'unset',
                                }}
                            >
                                Trus
                            </Typography>
                            t our experience!
                        </Typography>
                        <Typography
                            component='div'
                            sx={{
                                display: { xs: 'none', sm: 'block' },
                                fontFamily: 'Lato',
                                fontSize: { md: '28px', xs: '20px', sm: '15px' },
                                fontWeight: 300,
                                lineHeight: '65px',
                                letterSpacing: '0em',
                                textAlign: 'right',
                                color: 'white',
                                overflow: 'unset',
                            }}
                            noWrap
                        >
                            Check out some interesting facts about our team.
                        </Typography>
                    </Box>
                    <Box
                        position={'relative'}
                        zIndex={'1'}
                        width='inherit'
                    >
                        <AboutCardsBanner />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default AS3;
