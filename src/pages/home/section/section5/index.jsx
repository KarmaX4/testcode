import React from 'react';
import Taboptions from './tabs';
import { Box, Container, Divider, Typography } from '@mui/material';
import Testimonials from './testimonials';

const Section5 = () => {
    return (
        <>
            <Container
                maxWidth={false}
                sx={{
                    width: '90vw',
                    marginBottom: {
                        xs: '22.7rem',
                        md: '12rem'
                    },
                    padding: '0px !important',
                    // backgroundColor: '#752221'
                }}
            >
                <Taboptions />
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography
                        variant='h1'
                        sx={{
                            fontFamily: 'Britannic Bold',
                            fontSize: {
                                xs: '43px',
                                md: '64px'
                            },
                            fontWeight: 400,
                            letterSpacing: '-0.005em',
                            color: 'white',
                            marginBottom:"40px"
                        }}
                    >
                        What They Say
                    </Typography>
                </Box>
                <Testimonials/>
                </Container>
        </>
    );
};

export default Section5;
