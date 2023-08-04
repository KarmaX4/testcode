"use client"
import { Grid } from '@mui/material'
import React, {useState, useEffect} from 'react'
import ServicesBobble from './servicesBobble'


const ServiceLeft = () => {
    
    const servicesBobblesData = [
        {
            gridSize: 12,
            icon: "/icons/services/Group5.svg",
            text: "Mobile Apps",
            sx: {
                right: "30%",
            }
        },
        {
            gridSize: 6,
            icon: "/icons/services/Group4.svg",
            text: "UI/UX Design",
            sx: {
                left: "0%",
                top: "25%"
            }
        },
        {
            gridSize: 6,
            icon: "/icons/services/Group3.svg",
            text: "Websites",
            sx: {
                right: "15%",
                top: "25%"
            }
        },
        {
            gridSize: 6,
            icon: "/icons/services/Group2.svg",
            text: "Blockchain",
            sx: {
                left: "15%",
                top: "50%"
            }
        },
        {
            gridSize: 6,
            icon: "/icons/services/Group1.svg",
            text: "SEO Services",
            sx: {
                right: "0%",
                top: "50%"
            }
        },
        {
            gridSize: 12,
            icon: "/icons/services/Group6.svg",
            text: "Odoo ERP",
            sx: {
                left: "30%",
                top: "75%"
            }
        },
    ]
    return (
        <Grid
            container
            spacing={12}
            margin="auto"
            sx={{
                // backgroundColor: "#965416",
                position: 'relative',
                height: '25rem',
                width: {
                    xs: '20rem',
                    md: '50%'
                }
            }}
        >
            {
                servicesBobblesData.map((val, index) => (
                        <ServicesBobble key={val} text={val.text} icon={val.icon} sx={val.sx} />
                ))
            }
        </Grid>
    )
}

export default ServiceLeft