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
                    // width: {
                    //     lg: '100%',
                    //     xl: '88.2rem'
                    // }
                    width: '100%',
                    marginBottom: '11.7rem'
                }}
            >
                <Box position={'relative'}>
                    <img
                        src={'/images/about/hand.png'}
                        alt={'handhake'}
                        height={"521px"}
                        style={{
                            position: 'absolute',
                            zIndex: '-1',
                            // left: '-3rem'
                        }}
                    />
                    <Box margin="8rem"
                        // backgroungColor='#984165'
                        sx={{
                            marginRight: '19.4rem'
                        }}
                    >
                        <Typography
                            varient='div'
                            sx={{
                                fontFamily: 'Britannic Bold',
                                fontSize: '79px',
                                fontWeight: 400,
                                lineHeight: '65px',
                                letterSpacing: '3px',
                                textAlign: 'right',
                                color: 'white'
                            }}
                            noWrap
                        >
                            <Typography
                                component="span"
                                style={{
                                    fontFamily: 'Britannic Bold',
                                    fontSize: '79px',
                                    fontWeight: 400,
                                    lineHeight: '65px',
                                    letterSpacing: '2px',
                                    width: '163px',
                                    height: '66px',
                                    color: 'transparent',
                                    // position: 'absolute',
                                    zIndex: '2',
                                    // top: 45,
                                    WebkitTextStroke: '2px #FFFFFF',
                                    // left: "26.8%"
                                }}
                            >
                                Trus
                            </Typography>
                            t our experience!
                        </Typography>
                        <Typography
                            component='div'
                            sx={{
                                fontFamily: 'Lato',
                                fontSize: '28px',
                                fontWeight: 300,
                                lineHeight: '65px',
                                letterSpacing: '0em',
                                textAlign: 'right',
                                color: 'white'
                            }}
                            noWrap
                        >
                            Check out some interesting facts about our team.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            // backgroundColor: '#941265'
                        }}
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
