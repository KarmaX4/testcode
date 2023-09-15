import React from 'react'
import { Box, Typography } from '@mui/material'


const ServiceRight = () => {

    return (
        <>
            <Typography
                variant="h3"
                fontFamily="Britannic Bold"
                color="#fff"
                textAlign='left'
                fontSize={{
                    xs: '23px',
                    md: '3rem'
                }}
                marginBottom='1rem'
            >
                Small or Big Business,{' '}
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            lg: 'block'
                        }
                    }}
                >{'\n'}</Box>
                <Typography
                    variant="span"
                    fontFamily="inherit"
                    color="#9AABDB"
                    textAlign='inherit'
                >
                    We are there for you!
                </Typography>
            </Typography >
            <Typography
                component="h4"
                fontFamily="Lato"
                textAlign='left'
                letterSpacing={0}
                fontSize={'17px'}
                fontWeight={300}
                lineHeight={'24px'}
                color={'white'}
            >
                Skywave Info Solutions is a trusted IT services provider for businesses. They have a dedicated team that assists in bringing your dream project to life. Their services include designing, development, marketing and sales helping transform business applications to meet future needs.
            </Typography>
        </>
    )
}

export default ServiceRight