import { Box } from '@mui/material'
import React from 'react'

const ServicesBobble = ({ icon, text, sx }) => {


    return (
        <Box
            component="div"
            color="#fff"
            sx={{
                width: "94px",
                background: "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)",
                borderRadius: "100px 100px 0px",
                padding: "15px 17px",
                position: "absolute",
                textAlign: "center",
                ...sx
            }}
        >
            <Box component="div"
            sx={{
                height: '25px',
            }}
            
            >
                <img
                    src={icon}
                    alt={text}
                    style={{
                        height: "25px"
                    }}
                />
            </Box>
            <Box
                component="div"
            >
                {text}
            </Box>
        </Box>
    )
}

export default ServicesBobble