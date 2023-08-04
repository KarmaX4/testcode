import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const SectionPart2 = () => {
    const headerTextStyle = {
        fontFamily: 'Britannic Bold',
        fontSize: '3.3rem',
        fontWeight: 900,
        lineHeight: '51px',
        textAlign: {
            xs: 'center',
            md: 'left'
        },
    };

    const bodyTextStyle = {
        fontFamily: 'Lato',
        fontSize: '15px',
        fontWeight: 300,
        lineHeight: '35px',
        letterSpacing: '0px',
        textAlign: 'left',
        color: 'white',
    };

    const rectangle = {
        margin: '0',
        height: 'inherit',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: {
            xs: '50rem 0px 0px 50rem',
            md: '50% 0px 0px 50%'
        },
        width: {
            xs: '100%'
        },
        background: 'linear-gradient(108.46deg, #8372f2, #ed6fcb)',
    };

    return (
        <>
            <Container
                maxWidth={false}
                m={0}
                sx={{
                    width: {
                        xs: '100vw',
                        md: '88.2rem !important',
                    },
                    overflow: 'hidden',
                }}
            >
                <Grid
                    container
                    spacing={5}
                    m={0}
                    sx={{

                        height: {
                            xs: 'fit-content',
                            md: '80vh',
                        },
                        width: {
                            xs: '100%',
                        },
                        alignItems: 'center',
                        flexDirection: { xs: 'column-reverse', md: 'row' },
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        mt={6}
                        sx={{
                            padding: '0 !important',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 5,
                        }}
                    >
                        <Typography variant='h2' sx={headerTextStyle} color="#ffff">
                            Skywave<br/>
                            <Typography component="span" sx={{...headerTextStyle,
                                backgroundImage: 'linear-gradient(130deg, #ED6FCB 38.19%, #8372F2 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                            }}>
                                Info Solution
                            </Typography>
                        </Typography>
                        <Typography sx={bodyTextStyle}>
                            We have a talented team and we work happily all over the day. Our developers have multiple
                            skills and can do many things like Mobile apps, Web apps, Game development, AR-VR development,
                            digital marketing, and many other things. Our solutions are made in a way that it brings success
                            to our clients. We never compromise quality and time as well.
                        </Typography>
                        <Typography sx={bodyTextStyle}>
                            Our services are very reasonable and dedicated. Our only profit is our client’s satisfaction. We
                            always assist with the best ideas and solutions from our experts for free. We never charge for
                            consultation. While our technical team works hard to bring all dream ideas come true and develop
                            in a way that it meets client’s expectations.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={...rectangle}
                    >
                        <Box width={{ xs: '70%', md: '100%' }} textAlign="center">
                            <Image
                                src="/images/work.svg"
                                width={100}
                                height={100}
                                alt="Picture of the author"
                                layout="responsive"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SectionPart2;
