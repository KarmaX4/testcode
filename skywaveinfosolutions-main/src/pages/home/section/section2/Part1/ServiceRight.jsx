import React from 'react'
import { Typography } from '@mui/material'


const ServiceRight = () => {

    return (
        <>
            <Typography
                component="div"
            >
                <Typography
                    variant="h3"
                    fontFamily="Britannic Bold"
                    color="#fff"
                    textAlign='left'
                    fontSize={{
                        xs: '2rem',
                        md: '4rem'
                    }}
                >
                    Small or Big Business,{' '}
                    <Typography
                        variant="span"
                        fontFamily="Britannic Bold"
                        color="#9AABDB"
                        textAlign='left'
                        // display={{
                        //     xs: 'inline',
                        //     md: 'none'
                        // }}
                        >
                        We are there for you!
                    </Typography>
                </Typography>
            </Typography>
            <Typography
                component="div"
                fontFamily="Britannic Bold"
                color="#D4D4D4"
                textAlign='left'
            >
                Skywave Info Solutions is a trusted IT services provider for businesses. They have a dedicated team that assists in bringing your dream project to life. Their services include designing, development, marketing, and sales, helping transform business applications to meet future needs.
            </Typography>
        </>
    )
}

export default ServiceRight