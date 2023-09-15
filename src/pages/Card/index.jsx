import { Box, Card, CardContent, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import Headtitle from '../titles/headtitle'

const cardsData = [
    {
        title: 'Website',
        description: 'Custom Web Application Development Services for customers',
        imageUrl: '/images/ourServices/website.png',
        iconUrl: '/images/icons/about/s1/Website.svg',
        link: '/service/websites'
    },
    {
        title: 'UI/UX Design',
        description: 'We offer design services to build engaging user experiences',
        imageUrl: '/images/ourServices/UIUX.png',
        iconUrl: '/images/icons/about/s1/UIUXDesign.svg',
        link: '/service/ui-ux-design-analysis'

    },
    {
        title: 'Odoo ERP',
        description: 'We build custom and scalable software in Odoo as per the requirement.',
        imageUrl: '/images/ourServices/odoo.png',
        iconUrl: '/images/icons/about/s1/OdooERP.svg'
    },
    {
        title: 'BlockChain',
        description: 'We offer reliable Blockchain development & consulting services',
        imageUrl: '/images/ourServices/BlockChain.png',
        iconUrl: '/images/icons/about/s1/Blockchain.svg',
        link: '/service/blockchain'
    },
    {
        title: 'Mobile App',
        description: 'Best Mobile Application Development Services for Enterprise',
        imageUrl: '/images/ourServices/Mobile.png',
        iconUrl: '/images/icons/about/s1/MobileApp.svg',
        link: '/service/mobile-apps'
    },
    {
        title: 'SEO Services',
        description: 'We work to bring your business digitally up by using latest marketing tactics on the internet',
        imageUrl: '/images/ourServices/Seo.png',
        iconUrl: '/images/icons/about/s1/SEOServices.svg',
        link: '/service/mobile-apps'
    },
    {
        title: 'HR Consultancy',
        description: 'Guiding Your Workforce Towards Success: HR Consultancy Excellence',
        imageUrl: '/images/ourServices/HR.png',
        iconUrl: '/images/icons/about/s1/HRConsultancy.svg',
        link: '/service/mobile-apps'
    },
];;

const ServiceCards
    = () => {
        const cardStyle = {
            width: '100%',
            height: 'inherit',
            borderRadius: '20px',
            background: '#1B1B1B',
        };

        const imageStyle = {
            width: '100%',
            height: '60%',
            borderRadius: 'inherit',
            // padding: '8px'
        };

        const logoStyle = {
            width: '30px',
            height: '30px',
            marginRight: '10px',
            borderRadius: '50%',
            padding: '4px',
            // background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
        };

        const titleStyle = {
            color: '#FFFFFF',
            fontFamily: 'Lato',
            fontSize: '23px',
            fontWeight: 700,
            lineHeight: '30px',
            letterSpacing: '1.852427363395691px',
            textAlign: 'center',
        };

        const descriptionStyle = {
            fontFamily: 'Lato',
            fontSize: '14px',
            fontWeight: 300,
            lineHeight: '21px',
            letterSpacing: '0.19575048983097076px',
            textAlign: 'center',
            color: '#D4D4D4',
            paddingBottom: {
                xs: '0px',
                // sm: '80px',
            }
        };
        return (
            <Box
                width='90vw'
                margin='auto'
                sx={{ rowGap: '2rem' }}
            >
                <Headtitle title="Services" subTitle='What we are good at!' />
                <Grid container
                    sx={{
                        mt: '3rem',
                        mb: 8,
                        gridRowGap: '4rem'
                    }}
                >
                    {cardsData.map((card, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index} display={'flex'} style={{ width: '100%' }} justifyContent={'center'}
                            sx={{
                                textAlign: 'center',
                                padding: '0rem 1rem 0 1rem',
                            }}
                            position={"relative"}>
                            <Card sx={cardStyle}>
                                <CardContent
                                    sx={{
                                        padding: '16px !important',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1rem'
                                    }}
                                >
                                    <Box component={'img'} src={card?.imageUrl} alt={`Card ${index + 1}`} style={{ ...imageStyle, objectFit: 'cover' }} />
                                    <Box>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            mb={1}
                                        >
                                            <Box sx={logoStyle}>
                                                <Box component={'img'} src={card?.iconUrl} alt={`Icon ${index + 1}`} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                                            </Box>
                                            <Typography variant="h6" sx={titleStyle}>
                                                {card?.title}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" sx={descriptionStyle}>
                                            {card?.description}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ padding: '10px 40px' }} />
                                </CardContent>
                            </Card>
                            <Button
                                href={card?.link}
                                variant="contained"
                                fontSize='2rem'
                                sx={{
                                    padding: '8px 40px',
                                    textTransform: 'none',
                                    background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                                    borderRadius: '25px',
                                    marginTop: '30px',
                                    position: 'absolute',
                                    bottom: 0,
                                    bottom: {
                                        xs: '-1.25rem',
                                        sm: '-1.25rem',
                                        md: '-1.25rem'
                                    },
                                    '&:after': {
                                        content: '"\\00BB"',
                                        position: "absolute",
                                        fontSize: '2rem',
                                        right: '17px',
                                        bottom: '-3.5px',
                                        opacity: 0,
                                        transition: 'opacity 200ms ease-in-out',
                                    },
                                    '&:hover::after': {
                                        opacity: {
                                            xs: 0,
                                            md: 1
                                        },
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