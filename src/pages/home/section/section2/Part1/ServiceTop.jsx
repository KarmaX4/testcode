import { Typography } from '@mui/material'
import React from 'react'

const ServiceTop = () => {
    return (
        <>
            <Typography
                variant="h1"

                fontFamily={"Britannic Bold !important"}
                color="#fff"
                sx={{
                    // fontFamily: 'Britannic Bold',
                    fontSize: '79px',
                    fontWeight: 400,
                    lineHeight: '65px',
                    letterSpacing: '2px',
                }}
            >
                Services
            </Typography>
            <Typography
                variant="h6"
                fontSize="20px"
                color="#9AABDB"
                fontFamily={"Lato"}
                sx={{
                    
                  
                    fontWeight: 400,
                    lineHeight: '24px',
                    letterSpacing: '0em',
                }}
            >
               We love & know what we do!
            </Typography>
        </>
    )
}

export default ServiceTop