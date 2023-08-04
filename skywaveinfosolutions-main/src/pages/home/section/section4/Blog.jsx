import { Box, Button, Container, Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Blog = () => {

    const blogData = [
        {
            imageUrl: '/images/blog/Mask group.png',
            title: 'Skywave Info Solutions Is A Clutch Top Indian Development Company For 2022'
        },
        {
            imageUrl: '/images/blog/Mask group (1).png',
            title: '80% US-based Companies Offering to Employees Permanent Work From Home : Remote Work Survey 2021'
        }
    ]

    const mainTitleStyle = {
        display: 'inline',
        fontSize: {
            xs: '3.8rem',
            md: '6rem'
        }
    };
    return (
        <>
            <Container
                maxWidth={false}
                sx={{
                    m: 'auto',
                    width: {
                        xs: '100%',
                        md: "88.2rem !important"
                    }
                }}>
                <Box>
                    <Typography fontFamily='Britannic Bold' variant='h1' color='white'
                        sx={mainTitleStyle}
                    >
                        From our{' '}
                    </Typography>
                    <Typography fontFamily='Britannic Bold' variant='h1' color='#9AABDB'
                        sx={mainTitleStyle}
                    >
                        blog
                    </Typography>
                </Box>
                <Box sx={{ mb: 10 }}>
                    <Typography
                        variant='body'
                        color='#C3C3C3'
                        sx={{
                            wordWrap: 'break-word',
                            fontFamily: 'Lato',
                            fontSize: {
                                xs: '25px',
                                md: '34px'
                            },
                            fontWeight: 400,
                            lineHeight: '37px',
                            letterSpacing: '-0.005em',
                            textAlign: 'left',
                        }}
                    >
                        Latest news & events
                        <Box display='block'>
                            <a href="#" style={{ display: 'inline-block', marginTop: '10px', borderBottom: '2px solid #9AABDB', textDecoration: 'none' }}>
                                <Typography variant='body' color='white' sx={{
                                    fontFamily: 'Lato',
                                    fontSize: {
                                        xs: '2rem',
                                        md: '3rem'
                                    },
                                    fontWeight: 400,
                                    lineHeight: '38px',
                                    letterSpacing: ' -0.005em',
                                    textAlign: 'left',
                                }}>
                                    See more resources <ArrowForwardIcon sx={{ color: '#9AABDB', fontSize: '3.2rem', verticalAlign: 'middle' }} />
                                </Typography>
                            </a>
                        </Box>
                    </Typography>
                </Box>
                <Grid container spacing={10}>
                    {blogData.map((val, index) => (
                        <Grid item xs={12} md={6}>
                            <Card
                                sx={{
                                    backgroundColor: 'transparent', // Set the card background to transparent
                                    color: 'white', // Set the text color to white
                                }}
                            >
                                <>
                                    <CardMedia
                                        component="img"
                                        height={{
                                            md: '21rem',
                                        }}
                                        image={val.imageUrl}
                                        alt="Blog Image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom component="div" marginTop={'25px'} display={"inline-flex"} >
                                            <Button
                                                variant="contained"
                                                size="l"
                                                sx={{
                                                    background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                                                    borderRadius: '25px',

                                                    '&:after': {
                                                        content: '"\\00BB"',
                                                        marginLeft: '5px',
                                                        fontSize: '1rem',
                                                        opacity: 0,
                                                        transition: 'opacity 200ms ease-in-out',
                                                    },
                                                    '&:hover::after': {
                                                        opacity: 1,
                                                    },
                                                }}
                                            >
                                                Read Article
                                            </Button>
                                            <Box

                                                sx={{
                                                    borderRadius: "25px",
                                                    ml: 2,
                                                    color: '#9AABDB',
                                                    fontWeight: 100,
                                                    height: "44px",
                                                    width: "44px",
                                                    border: '2px solid #9AABDB',
                                                    display: 'flex',

                                                    justifyContent: 'center',
                                                    fontSize: '26px',
                                                }}
                                            >
                                                {/* ➜  */}
                                                &rarr;
                                            </Box>



                                        </Typography>
                                        <Typography color="#fff" sx={{
                                            fontFamily: "Lato",
                                            fontSize: "27px",
                                            fontWeight: 600,
                                            lineHeight: '30px',
                                            letterSpacing: '-0.005em',
                                            textAlign: 'left',
                                            paddingTop: 2

                                        }}>
                                            {val.title}
                                        </Typography>
                                    </CardContent>
                                </>
                            </Card>
                        </Grid>
                    ))}
                    {/* <Grid item xs={12} md={6}> */}
                    {/* <Box style={gridItemStyle}>
                            <Box
                                sx={{
                                    backgroundColor: 'red',
                                    height: '20rem'
                                }}
                            >
                                <img
                                    src="/images/blog/Mask group.png"
                                    alt="Your Image"
                                    style={{
                                        backgroundSize: 'cover'
                                    }}
                                />
                            </Box>
                            <Button variant="contained" style={buttonStyle} >Read Article</Button>
                            <Typography variant="body1" sx={{
                                fontFamily: 'Lato',
                                fontSize: '27px',
                                fontWeight: 600,
                                lineHeight: '30px',
                                letterSpacing: '-0.005em',
                                textAlign: 'left',
                                color: 'white',
                                mt: 2
                            }}>Skywave Info Solutions Is A Clutch Top Indian
                                Development Company For 2022</Typography>
                        </Box> */}
                    {/* <Card
                            sx={{
                                backgroundColor: 'transparent', // Set the card background to transparent
                                color: 'white', // Set the text color to white
                            }}
                            >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height={{
                                        md: '21rem',
                                    }}
                                    image="/images/blog/Mask group.png"
                                    alt="Blog Image"
                                />
                                <CardContent>
                                {/* <Typography gutterBottom variant="h5" component="div">
                                <Button
                                    variant="contained"
                                    size="l"
                                    sx={{
                                        background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                                        borderRadius: '25px',
                                        marginTop: '30px',
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
                                </Typography> */}
                    {/* <Typography variant="body2" color="#fff">
                                Skywave Info Solutions Is A Clutch Top Indian
                                Development Company For 2022
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card>
                    </Grid>  */}
                    {/* <Grid item xs={12} md={6}>
                        <Box style={gridItemStyle}>
                            <img
                                src="/images/blog/Mask group (1).png"
                                alt="Your Image"
                                // style={{ width: '539px', height: '288px' }}
                            />
                            <Button variant="contained" style={buttonStyle}>Read Article</Button>
                            <Typography variant="body1" sx={{
                                fontFamily: 'Lato',
                                fontSize: '27px',
                                fontWeight: 600,
                                lineHeight: '30px',
                                letterSpacing: '-0.005em',
                                textAlign: 'left',
                                color: 'white',
                                mt: 2
                            }}>80% US-based Companies Offering to
                                Employees Permanent Work From Home :
                                Remote Work Survey 2021</Typography>
                        </Box>
                    </Grid> */}
                </Grid>
            </Container >

        </>
    )
}

export default Blog