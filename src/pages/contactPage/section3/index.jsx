import React from 'react'
import { Box, Avatar, Typography, Button, Container } from '@mui/material';

const SkywaveMail
    = () => {
        return (
            <Container
                maxWidth={false}
                sx={{
                    position: 'relative',
                    mt:'12rem'
                }}
            >
                <Box
                    component={'img'} src="/images/HoloCircle.svg"
                    style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-10rem',
                        height: '65%',
                    }}
                />
                <Button href='mailto:info&#64;skywaveinfosolutions.com'
                sx={{
                    width: '95vh',
                    display: 'flex',
                    background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                    borderRadius: '2.5rem',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem 3rem 4rem 3rem',
                    margin: '5rem auto',
                    gap: '3.3rem'
                }}
            >
                <Avatar sx={{
                    width: '6rem',
                    bgcolor: '#fff',
                    height: '6rem',
                }}>
                    <Box
                    component={'img'} src="/images/icons/mail.svg" alt='Mail Icon' style={{ height: '2rem' }} />
                </Avatar>
                <Typography
                    sx={{
                        fontFamily: 'Lato',
                        fontWeight: 700,
                        fontSize: '43.48px',
                        lineHeight: '36.26px',
                        letterSpacing: '1.11px',
                        color:'#fff'
                    }}
                >
                    email Us
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Lato',
                        fontSize: '29px',
                        fontWeight: 400,
                        lineHeight: '38px',
                        letterSpacing: '-0.005em',
                        textTransform: 'lowercase',
                        fontWeight: '400',
                        
                        color: '#fff',
                        border: '1px solid #fff',
                        padding: '.3rem 1rem',
                        borderRadius: '2rem',
                    }}
                >
                    info&#64;skywaveinfosolutions.com
                </Typography>
            </Button>
            </Container>
        )
    }

export default SkywaveMail