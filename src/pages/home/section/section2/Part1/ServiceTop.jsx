import { Typography } from '@mui/material'
import React from 'react'

const ServiceTop = () => {
    return (
        <>
            <Typography
                variant="h3"
                fontSize="large"
                fontFamily={"Britannic Bold !important"}
                color="#fff"
                sx={{
                    fontSize: "64px"
                }}
            >
                Service
            </Typography>
            <Typography
                variant="span"
                color="#9AABDB"
                fontFamily={"Lato"}
            >
                We love & know what we do!
            </Typography>
        </>
    )
}

export default ServiceTop