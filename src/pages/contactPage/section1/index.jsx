"use client"
import React, { useState } from 'react';
import { Container, Grid, Box, Typography, Button, Snackbar, Alert } from '@mui/material';
import Headtitle from '@/pages/titles/headtitle';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateForm = () => {
        if (!name.trim() || !email.trim() || !company.trim() || !message.trim())  {
            setErrorMessage('Please fill out all required fields.');
            return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setErrorMessage('Please enter a valid email address.');
            return false;
        }
        setErrorMessage('');
        return true;
    };

    // const handleSendClick = async () => {
    //     if (!validateForm()) {
    //         return;
    //     }

    //     try {
    //         const response = await fetch('/api/contact', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ name, email, company, message }),
    //         });

    //         const data = await response.json();
    //         console.log(data);

    //         // Reset form fields
    //         setName('');
    //         setEmail('');
    //         setCompany('');
    //         setMessage('');
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //     }
    // };

    const sendMail = async (e) => {
        e.preventDefault();
        if (!validateForm()) { return; }

        try {
            setIsLoading(true);
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, company, message })
        })
        if (response.status === 200) {
            setOpenSnackbar(true);
            setName("")
            setEmail("")
            setCompany("")
            setMessage("")
        }
    } catch (error) {
        console.error('Error sending email:', error);
    } finally {
        setIsLoading(false);
    }

    }


    const inputStyle = {
        color: '#fff',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '2px solid #fff',
        width: '100%',
        padding: '.4rem 0',
        outline: 'none',
    };
    const labelStyle = {
        color: '#fff',
        width: '75%',
        marginBottom: '1.5rem',
        fontFamily: 'Lato',
        fontWeight: 700,
        lineHeight: '22px',
       letterSpacing: '0.08em',
    };



    const getTouch = 'Get in touch!';

    const FormTitle = {
        fontFamily: 'Britannic Bold',
        fontWeight: '400',
        whiteSpace: 'pre-wrap',
        fontSize: '61.45px'
    }

    return (
        <Container
            maxWidth={false}
            mb={15}
            sx={{ position: 'relative', width: '90vw', padding: '5rem auto' }}
        >
            {/* Don't Touch */}
            <Box
                component={'img'}
                src="/images/HoloCircle.svg"
                style={{
                    position: 'absolute',
                    top: '-5rem',
                    height: '25%',
                    left: '-14rem',
                }}
                id='contact-form'
            />

            {/* Don't Touch */}
            <Headtitle title='CONTACT US' subTitle='And we will get back to you ASAP'  />
            <Grid container my={10} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6} sx={{ position: 'relative', zIndex: 2 }}>
                    <Box
                        sx={{
                            background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                            width: '85%',
                            padding: '5rem',
                            borderRadius: '1rem'
                        }}
                    >
                        <Box sx={{ position: 'relative' }}>
                            <Typography sx={{
                                ...FormTitle,
                                position: 'absolute',
                                WebkitTextStroke: '1px #ffffff20',
                                color: 'transparent',
                                top: '-10px',
                                left: '10px',
                            }}>{getTouch}</Typography>
                            <Typography sx={{
                                ...FormTitle,
                                color: '#fff',
                                position: 'absolute',
                                top: '0px',
                            }}>{getTouch}</Typography>
                            <Typography sx={{
                                ...FormTitle,
                                color: 'transparent',
                            }}>{getTouch}</Typography>
                        </Box>
                        <Typography color='#fff' fontSize='25px'>We greatly appreciate your interest in reaching out to us, please fill in the form below or mail us your requirements on <Typography component='a' href='mailto:info@skywaveinfosolutions.com' sx={{ textDecoration: 'none', color: '#06021C', font: 'Lato', fontSize: '25px' }}>info@skywaveinfosolutions.com</Typography></Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} position='relative'>
                    <Box                         
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            backgroundColor: '#18181C',
                            padding: '4rem 4rem 8rem',
                            borderRadius: '1rem',
                            alignItems: 'center',
                            left: '1rem',
                            zIndex: 0,
                        }}
                    >
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        <label style={labelStyle}>Name*
                            <input
                                type="text"
                                style={inputStyle}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
                        <label style={labelStyle}>Email*
                            <input
                                type="email"
                                style={inputStyle}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label style={labelStyle}>Company*
                            <input
                                type="text"
                                style={inputStyle}
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </label>
                        <label style={labelStyle}>Message*
                            <textarea
                                rows={6}
                                style={{
                                    backgroundColor: 'transparent',
                                    borderColor: '#000',
                                    border: '2px solid #fff',
                                    borderRadius: '10px',
                                    width: '100%',
                                    marginTop: '1.5rem',
                                    color: '#fff',
                                    padding: '10px',
                                }}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </label>

                        <Button
                            onClick={sendMail}
                            variant="contained"
                            size="large"
                            sx={{
                                padding:"9px 2rem",
                                fontFamily:"Lato",
                                fontWeight:600,
                                fontSize:'1.3rem',
                                textTransform: 'none',
                                color: '#fff !important',
                                background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                                borderRadius: '25px',
                                // marginTop: '30px',
                                // '&:after': {
                                //     content: '"\\00BB"',
                                //     marginLeft: '5px',
                                //     fontSize: '1.6rem',
                                //     mb:'6px',
                                //     opacity: 0,
                                //     transition: 'opacity 200ms ease-in-out',
                                // },
                                // '&:hover::after': {
                                //     opacity: 1,
                                // },
                            }}
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </Button>
                        <Box
                            component={'img'}
                            src='/images/Contact/formSideImage.svg'
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                height: '100%',
                            }}
                        />
                        {/* Plane Image */}
                        <Box
                            component={'img'}
                            src='/images/icons/Contactus/Plane.svg'
                            style={{
                                position: 'absolute',
                                bottom: '2.35rem',
                                height: '3rem',
                                rotate: '45deg',
                                left: '21.4rem',
                            }}
                        />
                        <Box
                            component={'img'}
                            src='/images/icons/Contactus/planePath.svg'
                            style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '15rem',
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                onClose={() => setOpenSnackbar(false)}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Message Sent Successfully
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default ContactForm;
