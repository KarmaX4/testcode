import React from 'react'
import { Box, Grid, Typography } from '@mui/material';

const AboutDetailContent = ({
    content,
    imageUrl
}) => {
    return (
        <Grid
            container
        >
            <Grid
                item
                xs={12}
            // backgroundColor='red'
            >
                <Typography
                    variant='h1'
                    sx={{
                        fontFamily: "Lato",
                        fontSize: "55px",
                        fontWeight: 700,
                        lineHeight: "60px",
                        // lineHeight: "7rem",
                        letterSpacing: "0.08em",
                        textAlign: "left",
                        backgroundImage: 'linear-gradient(180.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                    }}
                >
                    About
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={8}
            >
                <Typography
                    variant='h6'
                    color='#D4D4D4'
                    pt={4}
                    sx={{
                        fontFamily: "Lato",
                        fontSize: "28px",
                        fontWeight: 500,
                        lineHeight: "32px",
                        textAlign: "left",
                    }}
                >
                    {content}
                </Typography>
            </Grid>
            <Grid
                item
                xs={12}
                md={4}
                // backgroundColor='yellow'
                textAlign="center"
            >
                <Box component='img' src={imageUrl} alt='Website Detail Page About' />
            </Grid>
        </Grid>
    )
}

export default AboutDetailContent