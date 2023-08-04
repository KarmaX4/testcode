import { Container, Grid, Typography,Box } from '@mui/material';
import React from 'react';

const OverlayBanner = () => {
    return (
        // <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Container
                maxWidth={false}
                sx={{
                    width: {
                        xs: '100%',
                        md: "88.2rem !important"
                    },
                    margin: "auto",
                    position: "relative",
                    py: 13,
                    background: 'linear-gradient(162.78deg, #8372F2 35.17%, #ED6FCB 91.89%)',
                    borderRadius: '3rem',
                    padding: '3rem',
                }}
            >
                <Grid 
                container 
                spacing={4} 
                py={3} 
                display={'flex'} 
                justifyContent={'center'}
                >
                    <Grid item xs={12} sm={6} >
                        <Typography
                            variant="h4"
                            sx={{
                                color: 'white',
                                fontFamily: 'Britannic Bold',
                                fontSize: '40px',
                                fontWeight: 400,
                                lineHeight: '40px',
                                letterSpacing: '0em',
                            }}
                        >
                            We are full of
                            <br />
                            interesting
                            <br />
                            creative ideas!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography
                            variant="body1"
                            component="a"
                            href="tel:9427722776"
                            sx={{
                                color: 'white',
                                fontFamily: 'Lato',
                                fontSize: '22px',
                                fontWeight: 400,
                                lineHeight: '26px',
                                letterSpacing: '-0.005em',
                                textDecoration: 'none',
                            }}
                        >
                            Our highly motivated team of experts come with
                            unique and creative ideas for business upliftment.
                            We completely go through our client’s demand
                            and that is why we are liked by most of the
                            industries as a tech partner.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        // </Box>
    );
};

export default OverlayBanner;
