import { Box, Card, CardContent, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import Headtitle from '../titles/headtitle'

const ServiceCards = ({cardsData}) => {
    
    const cardStyle = {
        width: '98%',
        height: '95%',
        borderRadius: '20px',
        background: '#1B1B1B',
    };

    const imageStyle = {
        width: 'inherit',
        height: '60%',
        borderRadius: '20px',
        padding: '8px'
    };

    const logoStyle = {
        width: '30px',
        height: '30px',
        marginRight: '10px',
        borderRadius: '50%',
        padding: '4px',
        background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
    };

    const titleStyle = {
        color: '#FFFFFF',
        fontFamily: 'Lato',
        fontSize: '25px',
        fontWeight: 700,
        lineHeight: '30px',
        letterSpacing: '1.852427363395691px',
        textAlign: 'center',
    };

    const descriptionStyle = {
        fontFamily: 'Lato',
        fontSize: '14px',
        fontWeight: 300,
        lineHeight: '22px',
        letterSpacing: '0.2052535116672516px',
        textAlign: 'center',
        color: '#D4D4D4',
    };
  return (
    <Box
                width='82.2rem'
                margin='auto'
                pt={30}
                // sx={{ gap: '2rem'}}
                sx={{ rowGap: '2rem' }}
            >
                <Headtitle title="Services" subTitle='What we are good at!' />
                <Grid container spacing={1}
                    my={15}
                    sx={{
                        gridRowGap: '4rem'
                    }}
                >
                    {cardsData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} display={'flex'} justifyContent={'center'} textAlign={'center'} position={"relative"}>
                            <Card sx={cardStyle}>
                                <img src={card.imageUrl} alt={`Card ${index + 1}`} style={{ ...imageStyle, objectFit: 'cover' }} />
                                <CardContent>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        mb={1}
                                    >
                                        <div style={logoStyle}>
                                            <img src={card.iconUrl} alt={`Icon ${index + 1}`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                        </div>
                                        <Typography variant="h6" sx={titleStyle}>
                                            {card.title}
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={descriptionStyle}>
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                {/* <CardActions> */}
                                {/* </CardActions> */}
                            </Card>
                            <Button
                            href={card.link}
                                variant="contained"
                                sx={{
                                    position: 'absolute',
                                    bottom: '0',
                                    background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                                    borderRadius: '25px',
                                    '&:after': {
                                        content: '"\\00BB"',
                                        marginLeft: '5px',
                                        fontSize: '1rem',
                                        opacity: 0, // Start with opacity 0 to hide the '»' symbol
                                        // display: 'none',
                                        transition: 'opacity 200ms ease-in-out', // Add smooth transition for opacity changes
                                        
                                    },
                                    '&:hover::after': {
                                        // display: 'inline',
                                        opacity: 1, // On hover, set opacity to 1 to reveal the '»' symbol smoothly
                                    },
                                }}
                                >
                                View More
                                </Button>
                        </Grid>
                    ))}
                </Grid>
            </Box>
  )
}

export default ServiceCards