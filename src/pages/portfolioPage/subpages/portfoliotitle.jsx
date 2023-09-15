import { Typography, Box, Divider, Chip } from '@mui/material';
import React from 'react';

const Portfoliotitle = ({ number, text, website = false }) => {
    return (
        <>
            <Box display={'flex'} alignItems={website ? 'flex-end' : 'center'}>
                <Typography
                    sx={{
                        fontFamily: 'Lato',
                        fontSize: '123px',
                        fontWeight: 300,
                        lineHeight: website ? '7rem' : '148px',
                        letterSpacing: '0em',
                        textAlign: 'left',
                        backgroundImage: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        paddingRight: '2rem',

                    }}
                >
                    {number}{website ? '.' : ''}
                </Typography>

                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: 'Lato',
                        fontWeight: 500,
                        fontSize: '42.02px',
                        lineHeight: '45.8px',
                        letterSpacing: '8%',
                        color: '#D4D4D4'
                    }}
                >
                    {text}
                </Typography>
            </Box>
            {
                website
                ?   <Divider
                        sx={{
                            my:'1.5rem',
                            height: '3px',
                            background: 'linear-gradient(129deg, #8372F2 0%, #ed6fcb00 70%)'
                        }}
                    />
                : ''
            }
        </>
    );
};

export default Portfoliotitle;
