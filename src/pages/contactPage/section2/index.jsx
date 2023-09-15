import React from 'react'
import { Container, Grid, Box } from '@mui/material';
import LocatedUsCard from './card'
import Headtitle from '@/pages/titles/headtitle';

const locatedUsData = [
    {
        icon: '/images/icons/Contactus/india.svg',
        flag: '/images/icons/flags/flag_of_india.svg',
        country: 'INDIA (HQ)',
        branch: 'Head Quarter',
        address: 'C – 602, Ganesh Glory11',
        address1: 'Godrej Garden City Road',
        address2: 'Gujarat 382470, India',
        contactNumber: '+91 94277-22776'
    },
    {
        icon: '/images/icons/Contactus/dallas.svg',
        flag: '/images/icons/flags/Flag_of_Dallas 1.svg',
        country: 'DALLAS',
        branch: 'Digital Transformation Director',
        address: '3010 LBJ Freeway',
        address1: 'Suite 1200 Dallas',
        address2: 'TX 75234'
    },
    {
        icon: '/images/icons/Contactus/georgia.svg',
        flag: '/images/icons/flags/Flag_of_Georgia.svg',
        country: 'GEORGIA',
        branch: 'Sales Office',
        address: '1700 Northside Drive',
        address1: 'Suite A7 PMB Atlanta',
        address2: 'GA 30318',
        contactNumber: '+995 855-573-5992'
    },
]

const LocatedUs = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                width: '90vw',
                margin: 'auto',
                position: 'relative'
            }}
        >
            <Box
                component={'img'} src='/images/HoloCirclefilled.svg' alt="Holo Circle"
                style={{
                    position: 'absolute',
                    top: '-5rem',
                    right: '-12.8rem',
                    height:'32%'
                }}
            />
            <Headtitle title='Located Us' />
            <Grid container spacing={5} my={5}>
                {
                    locatedUsData?.map((val, index) => (
                        <Grid key={index} item xs={12} md={4}><LocatedUsCard
                            icon={val.icon}
                            flag={val.flag}
                            country={val.country}
                            branch={val.branch}
                            address={val.address}
                            address1={val.address1}
                            address2={val.address2}
                            contactNumber={val.contactNumber}
                            index={index}
                        /></Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default LocatedUs