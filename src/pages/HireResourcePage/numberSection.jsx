import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';

const NummberSection = () => {
    const finalValues = [21, 128, 900, 6];
    const [counts, setCounts] = useState(Array(4).fill(0));

    useEffect(() => {
        const animationDuration = 2000;
        const step = 50;
        const totalSteps = animationDuration / step;
        const countSteps = finalValues.map(value => value / totalSteps);

        let currentCounts = Array(4).fill(0);

        const timer = setInterval(() => {
            currentCounts = currentCounts.map((count, index) => Math.min(count + countSteps[index], finalValues[index]));
            setCounts(currentCounts);

            if (currentCounts.every((count, index) => count >= finalValues[index])) {
                clearInterval(timer);
            }
        }, step);

        return () => clearInterval(timer);
    }, []);

    const nameBannerStyles = {
        position: 'relative',
        width: {
            xs: '100%',
            md: '100%',
        },
        overflow: 'hidden',
        display: 'flex',
        zIndex: 1,
        mb:20
    };

    const nameBannerNumberStyles = {
        fontSize: {
            xs: '2.3rem',
            md: '71.06px'
        },
        letterSpacing: '0.06em',
        lineHeight: '111.5%',
        fontWeight: 800,
        fontFamily: 'Lato',
        color: '#fff',
        textAlign: 'center',
        margin: "auto",
    };

    const nameBannerTextStyles = {
        position: 'relative',
        fontSize: {
            xs: '1rem',
            sm: '1.5vh',
            md: '28px',
            lg: '33.33px',
        },
        letterSpacing: '1.26px',
        lineHeight: {
            xs: '15px',
            sm: '1.5vh',
            md: '35px'
        },
        fontFamily: 'Britannic Bold',
        color: '#b8ceff',
        textAlign: 'center',
        whiteSpace: 'pre-line',
        
    };

    return (
        <Container maxWidth={false} sx={nameBannerStyles} >
            <Box
                sx={{
                    backgroundColor: "#fff",
                    position: 'relative',
                    width: 'inherit',
                    height: {
                        xs: 'auto',
                        md: '281px'
                    },
                    // ml: {
                    //     xs: 0,
                    //     md: 6
                    // },
                    display: 'flex',
                    alignItems: 'center',
                    placeContent: 'center',
                    justifyContent: 'center',
                    padding: {
                        xs: '2rem 2rem',
                        md: 0
                    },
                    background: '#fff0'
                }}
            >
                <Grid
                    container
                    spacing={2}
                    flexWrap={{
                        xs: 'wrap !important',
                        md: 'nowrap !important'
                    }}
                    width='90vw'
                    sx={{
                        margin: '0 !important'
                    }}
                >
                    {counts.map((count, index) => (
                        <React.Fragment key={index}>
                            <Grid item xs={6} sm={3}
                                sx={{
                                    paddingBlock: {
                                        xs: '1.5rem',
                                        sm: '0'
                                    },
                                    display: 'flex',
                                    justifyContent: {
                                        xs: 'space-between',
                                        sm: 'space-around'
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: {
                                            xs: 'flex',
                                            // sm: 'block'
                                        },
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: {
                                            xs: '5rem',
                                            md: '17rem'
                                        },
                                        mr: 0,
                                        width: '100%',
                                        // gap: '0'
                                    }}
                                >
                                     <Box component={'img'} src={`/images/icons/hireresources/${['DEVELOPERS', 'PROJECT DELIVERED', 'HOURS OF DEVELOPMENT', 'SDKs DEVELOPED'][index]}.svg`} />
                                    <Typography variant="h1" sx={nameBannerNumberStyles}>
                                        {Math.round(count)}{index === 0 ? '+' : '+'}
                                    </Typography>
                                    <Box display={'flex'}>
                                    <Typography sx={nameBannerTextStyles} p={index === 0 ? "5% 0 8% 0" : 0}>
                                        {['DEVELOPERS', 'PROJECT DELIVERED', 'HOURS OF DEVELOPMENT', 'SDKs\nDEVELOPED'][index]}
                                    </Typography>
                                    </Box>
                                </Box>
                                <Box display={'flex'} justifyContent={'flex-end'}
                                    alignItems={"center"}
                                    flexWrap={'nowrap'}
                                    flexDirection={"column"}
                                    pb={'15%'}
                                >
                                    {index < counts.length - 1 && (
                                        <Divider
                                            sx={{
                                                height: '35%',
                                                width: '6px',
                                                display: {
                                                    xs: index === 1 ? 'none' : 'block',
                                                    sm: 'block'
                                                },
                                                background: 'linear-gradient(90deg, #8372F2 38.19%, #ED6FCB 100%)'
                                            }}
                                            orientation="vertical"
                                            flexItem
                                        />
                                    )}
                                </Box>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </Box>
            <Box
                sx={{
                    zIndex: '-1',
                    position: 'absolute',
                    //   height: '100%',
                    //   width: '100%',
                    //   borderRadius: {
                    //     xs: '10rem 0px 0px 10rem',
                    //     sm: '160px 0px 0px 160px'
                    //   },
                    //   background: 'linear-gradient(106.84deg, #9257AF -40%, #191249 99.25%)',
                }}
            />
        </Container>
    );
};

export default NummberSection;
