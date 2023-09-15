import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Container, Box, Divider, Chip } from '@mui/material';
import React, { Fragment } from 'react'
import SectionTitle from './sectionTitle';

const HireS2 = ({ data }) => {
    const dataList = [
        {
            title: 'HIGHLIGHTS',
            points: [
                "Resource effort",
                "Resource allocation",
                "Support",
                "Working Days",
                "Min. Hiring Term",
                "Billing Cycle",
                "Reporting"
            ],
        },
        {
            title: 'HOURLY',
            points: ["4 hours/day",
                "Shared",
                "Chat/Email/VoIP",
                "5 days/week",
                "40 hours/month",
                "Weekly advance",
                "Upon completion"],
        },
        {
            title: 'PART TIME',
            points: ["Shared/Dedicated",
                "Chat/Email, VoIP",
                "5 days/week",
                "80 hours/month",
                "Bi-Weekly advance",
                "Daily/Weekly"],
        },
        {
            title: 'FULL TIME DEDICATED',
            points: ["8 hours/day",
                "Dedicated",
                "Chat, Email, VoIP",
                "5 days/week",
                "160 hours/month",
                "Weekly advance",
                "Daily"],
        },
    ];
    const typographyStyle = {
        fontFamily: 'Britannic Bold',
        fontSize: {
            xs: '40px',
            sm: '67px'
        },
        fontWeight: 400,
        lineHeight: { xs: '3rem', sm: '3.8rem' },
        letterSpacing: '1.7190937995910645px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        // whiteSpace: 'nowrap',
    };
    const titleStyles = {
        fontFamily: 'Britannic Bold',
        fontSize: '20px',
        fontWeight: 400,
        lineHeight: '29px',
        letterSpacing: '2.0441105365753174px',
        textAlign: 'left',
        backgroundImage: 'linear-gradient(316deg, #ED6FCB 50.19%, #8372F2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    };
    const PointStyles = {
        fontFamily: 'Lato',
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '26px',
        letterSpacing: '0.08em',
        textAlign: 'left',
        color: "#C3C3C3"
    };


    return (
        <>
            <Container

                maxWidth={false}
                sx={{
                    width: '88vw',
                    padding: '0 !important',
                    //    marginBottom: {
                    //      xs: 45,
                    //      sm: 40,
                    //      md: 25
                    //    },
                    marginTop: "6rem"
                }}
            >
<SectionTitle title={data?.title} subTitle={data?.subTitle}/>
{/* 
                <Box
                    position="relative"
                    margin={{
                        xs: '5rem auto 0rem',
                        sm: '5rem auto'
                    }}
                    width='fit-content'
                    sx={{
                        // backgroundColor: 'red'
                    }}
                >
                    <Typography
                        sx={{
                            ...typographyStyle
                        }}
                    >{data?.title}</Typography>
                    <Typography sx={{
                        ...typographyStyle,
                        backgroundImage: 'linear-gradient(316deg, #ED6FCB 0.19%, #8372F2 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent', pb: '0.5rem'
                    }}>{data?.subTitle}</Typography>
                    <Box px='15%' mt={"12px"}>
                        <Divider sx={{ color: 'white', borderWidth: '2px', borderColor: 'white' }} />
                    </Box>
                    <Box
                        component='img'
                        src='/Background/Fly/fly3.svg'
                        height={{
                            xs: '30%',
                            sm: '40%',
                        }}
                        sx={{
                            position: 'absolute',
                            top: {
                                xs: '0rem',
                                sm: '0.7rem',
                            },
                            left: {
                                xs: '-2rem',
                                sm: '-6rem',
                            },
                            filter: 'drop-shadow(10px 10px 1px #ffffff63)'
                        }} />
                    <Box component='img' src='/Background/Fly/fly2.svg' sx={{
                        position: 'absolute',
                        transform: 'rotate(53deg)',
                        bottom: '-1.2rem',
                        right: {
                            xs: '-1.6rem',
                            sm: '-6rem'
                        },


                    }} />
                </Box> */}
                <Box mb={10}>
                    <Typography sx={{
                        fontFamily: 'Lato',
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight: '29px',
                        letterSpacing: '0.08em',
                        color:'#C3C3C3'
                    }} >
                        {data?.description}
                    </Typography>
                </Box>

                <Grid container border={'1px solid grey'} borderRadius={'15px'}  >
                    {dataList?.map((item, index) => (
                        <Grid item xs={12} md={3} key={index} 
                        sx={{ diaplay: "flex", gap: 4 }} borderRight={index === 3 ? 'none' : '1px solid grey'} p={4} position={'relative'}>
                            <Chip color='secondary' size="small" variant={'filled'}
                             sx={{position:'absolute', zIndex:1, top:'-5.2%', left:'16%', color:'#fff' ,
                              rotate:'90deg', height: '36px',width: '6px',background: 'linear-gradient(310deg, #8372F2 38.57%, #ED6FCB 97.89%)' }}  />
                            <Box mb={'8%'}>
                                <Typography variant="h6" sx={titleStyles}>
                                    {item?.title}
                                </Typography>
                            </Box>
                            {item?.points?.map((point, pointIndex) => (
                                <Box key={pointIndex} pb={"3%"}>

                                    <Typography sx={PointStyles}>
                                        {point}
                                    </Typography>
                                </Box>
                            ))}
                        </Grid>
                    ))}
                    
                </Grid>
            </Container>
        </>
    )
}
export default HireS2