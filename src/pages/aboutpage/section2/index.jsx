import { Box, Container, Grid, Button, Card, CardContent, CardActions, Typography } from '@mui/material';
import React from 'react';
import OverlayBanner from '../section3/overlayBanner';
import ServiceCards from '@/pages/Card'

const leftOverlayBanner = 'We are full of interesting creative ideas!';
const descOverlayBanner = 'Our highly motivated team of experts come with unique and creative ideas for business upliftment. We completely go through our client’s demand and that is why we are liked by most of the industries as a tech partner.';

const AS2 = () => {

    const Background = {
        width: '100%',
        height: '100%',
        borderRadius: '50px 50px 0px 0px',
        backgroundColor: 'black',
        marginTop: {
            xs: '17rem',
            sm: '16rem',
            md: '7rem'
        },
        position: 'relative',
        paddingBottom: {
            xs: '0rem',
            md: '0rem'
        },

    };

    return (
        <Container maxWidth={false} sx={Background}>
            <Box

                position={'absolute'}
                zIndex={'1'}
                width={'90vw'}
                top={{ xs: '-6rem', sm: 0 }}
                left='50%'
                sx={{
                    transform: 'translate(-50%, -50%)'
                }}
            >
                {/* <OverlayBanner  /> */}
                <OverlayBanner leftValue={leftOverlayBanner} rightValue={descOverlayBanner} />
            </Box>
            <Box
                pt={{
                    xs: '10rem',
                    md: '15rem'
                }}
            >
                <ServiceCards />
            </Box>
        </Container>
    )
}

export default AS2;
