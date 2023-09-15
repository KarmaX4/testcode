import React, { useState, useEffect } from 'react';
import Portfoliotitle from '../portfoliotitle';
import { Box, Container, Grid, Typography } from '@mui/material';

const fontM = {
    fontFamily: 'Lato',
    fontSize: '70px',
    fontWeight: 500,
    lineHeight: '4.7rem',
    letterSpacing: '0.08em',
    color: '#fff',
}

const animationStyles = {

    animation: 'moveRightToLeft 30s linear infinite',
    '@keyframes moveRightToLeft': {
        '0%': {
            transform: 'translateX(100%)',
        },
        '100%': {
            transform: 'translateX(-100%)',
        },
    },
};

const circleStyle = {
    width: '200px',
    margin: '10px',
    height: '200px',
    display: 'flex',
    borderRadius: '50%',
    position: 'relative',
    alignItems: 'center',
    border: '4px dashed',
    justifyContent: 'center',
};

const innerCircleStyle = {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
};

const typoStyle = {
    fontFamily: 'Lato',
    lineHeight: '59px',
    letterSpacing: '0.08em',
    color: 'white',
    textAlign: 'left'

}
const baseWeight = 400

const texts = ['Regular', 'Medium', 'Semibold', 'Bold']

const CircleColor = ({ bgColor }) => {
    return (
        <Grid item xs={12} md={2.8}>
            <Box
                sx={{
                    ...circleStyle,
                    background: 'linear-gradient(#000, #000) padding-box, linear-gradient(201deg, ' + bgColor + ', #ffffff15) border-box',
                }}>
                <Box
                    sx={{
                        ...innerCircleStyle,
                        backgroundColor: bgColor,
                    }}
                />
                <Typography
                    component='span'
                    color='#fff'
                    backgroundColor='#888'
                    position='absolute'
                    sx={{
                        fontFamily: "Lato",
                        fontSize: "13px",
                        fontWeight: 500,
                        lineHeight: "14px",
                        letterSpacing: "0.08em",
                        top: "45px",
                        padding: "5px 10px",
                        left: "-32px",
                    }}
                >
                    {bgColor}
                </Typography>
            </Box>
        </Grid>
    )
}


const ColorSection = ({ data }) => {
    const [deg, setDeg] = useState('0%')
    useEffect(() => {

        setTimeout(() => {
            setDeg('50%')
        }, 14000)

    }, [])

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = alphabet.toUpperCase();
    const combinedAlphabet = alphabet.split('').map((char, index) => {
        return upperCase[index] + char;
    });

    return (
        <>
            <Box sx={{ backgroundImage: "url('/images/portfolio/background1.svg')", backgroundSize: 'cover' }} pb={1}  >
                <Container sx={{ width: '90vw', p: '0!important', mt: 10 }}>
                    <Box display={'flex'} justifyContent={'center'} pt={10} my={10} >
                        <Portfoliotitle number='02' text='Colors & Typography' />
                    </Box>
                    <Grid container>
                        {/* main Grid */}
                        <Grid item>
                            {/* 1st Grid */}
                            <Grid container spacing={24} >
                                {data?.c1?.map((bgColor, index) => (
                                    <CircleColor key={index} bgColor={bgColor} />
                                ))}
                                <Grid item xs={12} md={6} display={'flex'} alignItems={'center'} justifyContent='center'>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Lato',
                                            fontSze: '20px',
                                            fontWeight: 500,
                                            lineHeight: '22px',
                                            letterSpacing: '0.08em',
                                            textAlign: 'right',
                                            color: "#D4D4D4",
                                            // width: '100%'

                                        }}
                                        noWrap
                                    >
                                        Primary & secondary colors
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {/* 2nd Grid */}
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={3.5} display={'flex'} alignItems={'center'} justifyContent='flex-end'>
                                <Typography
                                    sx={{
                                        fontFamily: 'Lato',
                                        fontSze: '20px',
                                        fontWeight: 500,
                                        lineHeight: '22px',
                                        letterSpacing: '0.08em',
                                        textAlign: 'right',
                                        color: "#D4D4D4"
                                    }}>
                                    Additional colors
                                </Typography>
                            </Grid>
                            {data?.c2?.map((bgColor, index) => (
                                <CircleColor key={index} bgColor={bgColor} />
                            ))}
                        </Grid>
                    </Grid>
                </Container >
                <Box
                    sx={{
                        position: 'relative',
                    }}
                >

                    <Box
                        sx={{

                            ...animationStyles,
                            animationDelay: '0s',

                        }}>

                        <svg viewBox="0 0 960 100"
                            style={{
                                ...fontM,
                                position: 'absolute',
                                top: '0',
                                left: '0px',
                                fill: 'none',
                                stroke: 'white',
                                strokeWidth: '1px',
                                strokeDasharray: '4',
                                strokeDashoffset: '0',
                                textAnchor: 'end',

                            }}
                        >
                            <text textAnchor="end" x="50%" y="50%">
                                {data?.font}
                            </text>
                        </svg>
                    </Box>
                    <Box
                        sx={{

                            ...animationStyles,
                            animationDelay: '15s',

                        }}>

                        <svg viewBox="0 0 960 100"
                            style={{
                                ...fontM,
                                position: 'absolute',
                                top: '0',
                                left: '0px',
                                fill: 'none',
                                stroke: 'white',
                                strokeWidth: '1px',
                                strokeDasharray: '4',
                                strokeDashoffset: '0',
                                textAnchor: 'end',

                            }}
                        >
                            <text textAnchor="end" x={deg} y="50%">
                                {data?.font}
                            </text>
                        </svg>

                    </Box>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={' column'}
                        sx={{

                            width: '50rem',
                            alignItems: 'left',
                            margin: "120px auto",
                            gap: '2rem',

                        }}
                    >
                        <Typography
                            sx={{
                                position: 'relative',
                                zIndex: 1,
                                ...fontM,
                                fontSize: '108px'
                            }}>
                            {data?.font}
                        </Typography>
                        <Grid container justifyContent={'flex-start'}
                            sx={{
                                gap: '4.5rem'
                            }}
                        >
                            {texts?.map((text, index) => (
                                <Grid item key={index} md={1.7}>
                                    <Typography
                                        sx={{
                                            ...typoStyle,
                                            fontSize: '54px',
                                            fontWeight: baseWeight + index * 100,
                                        }}
                                    >
                                        Aa
                                    </Typography>
                                    <Typography
                                        sx={{
                                            ...typoStyle,
                                            fontWeight: baseWeight + index * 100,
                                            fontSize: '24px',
                                            backgroundImage: 'linear-gradient(130deg, #ED6FCB 38.19%, #8372F2 100%)',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent',
                                        }}
                                    >
                                        {text}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Typography
                            sx={{
                                fontFamily: 'Lato',
                                fontSize: '33px',
                                fontWeight: 500,
                                lineHeight: '32px',
                                letterSpacing: '0.09em',
                                color: '#888888',
                            }}
                        >
                            {combinedAlphabet.join(' ')}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default ColorSection;
