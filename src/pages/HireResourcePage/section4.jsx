import React from 'react';
import SectionTitle from './sectionTitle';
import { Container, Grid, Box, Typography } from '@mui/material';

const HireS4 = ({ data }) => {
    const cardData = [
        {
          title: 'HEALTHCARE AND FITNESS',
          text: 'Our Android development team has delivered IoT based healthcare solutions to check and monitor health records, Android wear applications for fitness enthusiasts, On-demand doctor appointment platform and meditation apps.',
        },
        {
            title: 'TRAVEL & TOURISM',
            text:'Our forte also lies in on demand vacation rental platforms like Airbnb. We have developed travel and booking solutions on web and native iOS/ Android platforms. We help our clients for a booking platform to enhance user experience.'
        },
        {
          title: 'LIFESTYLE & HOSPITALITY',
          text: 'We develop Android applications for hotels and resorts with booking platform, IoT based apps for Smart Home Automation and GPS based apps for child tracking in resorts, AI powered Android apps for media and entertainment.',
        },
        {
            title: 'HEALTHCARE AND FITNESS',
            text: 'Our Android development team has delivered IoT based healthcare solutions to check and monitor health records, Android wear applications for fitness enthusiasts, On-demand doctor appointment platform and meditation apps.',
          },
        {
          title: 'RETAIL & ECOMMERCE',
          text: 'We develop mCommerce and Smart Retail app solutions leveraging Android app development and other cutting edge technologies like AI, IoT, cloud computing and more. We also have PoCs developed on Smart/ Magic Mirror features.',
        },
        {
          title: 'MANUFACTURING & LOGISTICS',
          text: 'We offer smart warehouse solutions on Android platform using IoT, GPS, Geofence and BLE/ iBeacon technology for asset tracking and indoor/ outdoor mapping along with CRM and ERP applications to simplify complex business process.',
        },
        {
          title: 'BANKING & FINANCE',
          text: 'We help our clients to develop insurance aggregator app platform and mobile wallet apps on Android platform. We also use 3rd party integration to accommodate payment gateways like Paypal and Stripe.',
        },
        {
          title: 'REAL ESTATE',
          text: 'We work on multi-technology Android app development projects for Real Estate industry to provide cutting-edge solutions leveraging AR-VR, iBeacon SDK integration, property rental or booking platform development and more.',
        },
        {
          title: 'AUTOMOTIVE & TRANSPORTATION',
          text: 'Our Android development team has delivered IoT based healthcare solutions to check and monitor health records, Android wear applications for fitness enthusiasts, On-demand doctor appointment platform and meditation apps.',
        },
        {
          title: 'EDUCATION & OTHERS',
          text: 'Our Android app developers have delivered unparalleled educational app development solutions to enhance learning interests of students. Our developers can offer mobility solutions to other industries who focus to grow business digitally.',
        },
      ];
      

  const titleStyle = {
    fontFamily: 'Britannic Bold',
    fontSize: '26px',
    fontWeight: 400,
    lineHeight: '30px',
    letterSpacing: '1.4351332187652588px',
    color: '#fff',
  };

  const textStyle = {
    fontFamily: 'Lato',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '29px',
    letterSpacing: '0.08em',
    color: '#C3C3C3',
  };

  return (
    <>
      <Container  maxWidth={false}
                sx={{
                    mt:15,
                    width: '88vw',
                    padding: '0 !important'
                }}>
        <SectionTitle title={data?.title} subTitle={data?.subTitle} />
        <Grid container  mt={15} rowSpacing={5} columnSpacing={10}>
          {cardData.map((content, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <Box bgcolor={'#2B2B2B'} p={"2rem 4rem 3rem 2rem"} display={'flex'} flexDirection={'column'}  gap={3} height={"16rem"} borderRadius={'10px'} 
              sx={{boxShadow: '-7px 8px 5.743589878082275px 0px #00000040 inset',}}> 
               <Box display={'flex'} alignItems={'center'}  gap={2}>
                <Box component={'img'} src={`/images/icons/hireresources/${index}.svg`}/>
                <Typography sx={titleStyle}>{content.title}</Typography>
                </Box>
                <Typography sx={textStyle}>{content.text}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HireS4;
