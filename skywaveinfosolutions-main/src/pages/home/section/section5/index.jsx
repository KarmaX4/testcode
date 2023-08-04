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
                    width: {
                        xs: '100%',
                        md: "88.2rem !important"
                    },
                    marginBottom: {
                        xs: '22.7rem',
                        md: '11.7rem'
                    }
                }}
            >
                <Taboptions />
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography
                        variant='h1'
                        sx={{
                            fontFamily: 'Britannic Bold',
                            fontSize: {
                                xs: '60px',
                                md: '64px'
                            },
                            fontWeight: 400,
                            lineHeight: '0px',
                            letterSpacing: '-0.005em',
                            color: 'white',
                            marginBottom:"100px"
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
