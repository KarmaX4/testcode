import { Container, Grid, Typography, Button } from '@mui/material';
import React from 'react';

const OverlayBanner = ({ leftValue = '', rightValue = '', solBtn = false }) => {
    return (
        // <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container
            maxWidth={false}
            sx={{
                width: {
                    xs: '80vw',
                    md: '90vw'
                },
                margin: "auto",
                position: "relative",
                py: 13,
                background: 'linear-gradient(162.78deg, #8372F2 35.17%, #ED6FCB 91.89%)',
                borderRadius: {xs: '1rem', md: '2rem'},
                padding: '2rem'
            }}
        >
            <Grid
                container
                width="100%"
                spacing={4}
                gap={{ xs: '1rem', md: 0 }}
                p={{ sm: '1.5rem 4rem', xs: '0' }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={"center"}
                margin={0}
            >
                <Grid item xs={12} sm={12} md={6} p={{
                    xs: '0 !important',
                    md: '0 23% 0 0!important',
                }}
                    sx={{
                        textAlign: {
                            xs: 'center',
                            md: 'left',
                        }
                    }}
                >
                    {
                        solBtn
                            ? <Button
                                sx={{
                                    color: '#fff',
                                    border: '2px solid',
                                    borderRadius: '2rem',
                                    fontFamily: 'Britannic Bold',
                                    fontSize: {
                                        xs: '1.5vh',
                                        md: '3vh'
                                    },
                                    padding: '.4rem 2rem',
                                    textTransform: 'none'
                                }}
                            >Contact Us Today &#xbb;</Button>
                            : <Typography
                                sx={{
                                    textAlign: { xs: "center", md: "left" },
                                    padding: '0 !important',
                                    color: 'white',
                                    fontFamily: 'Britannic Bold',
                                    fontSize: { xs: '32px', sm: '28px', md: '28px', lg: '40px' },
                                    fontWeight: 400,
                                    lineHeight: { xs: '2.4rem', sm: '2.5rem', md: '2rem', lg: '3rem' },
                                    letterSpacing: '0em',
                                }}
                            >
                                {leftValue}
                            </Typography>
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={6} p={'0 !important'}>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{
                            textAlign: { xs: "center", md: "left" },
                            color: 'white',
                            fontFamily: 'Lato',
                            fontSize: { xs: '16px', sm: '18px', md: '18px', lg: '22px' },
                            fontWeight: 300,
                            padding: '0 !important',
                            lineHeight: { xs: '24px', sm: '26px', md: '2rem' },
                            letterSpacing: '0',
                            textDecoration: 'none',
                        }}
                    >
                        {rightValue}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
        // </Box>
    );
};

export default OverlayBanner;
