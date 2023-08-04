import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'

const bulletStyles = `
  .swiper-pagination-bullet {
    width: 25px;
    height: 12px;
    background-color: #fff;
    opacity: 0.7;
    border-radius: 301.65570068359375px;
  }

  .swiper-pagination-bullet-active {
    background: linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%);
  }

  @media (min-width: 768px) {
    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
    }
  }
`;

const cardData = [
    {
        title: 'Our Services',
        description:
            'We offer end to end services and solutions for almost all industries. We offer dedicated team or individual developer who only work for your project.',
        imageUrl: '/images/section1/1.png',
    },
    {
        title: 'About Us',
        description:
            'Skywave Info Solutions is a well-known mobile app development company in Ahmedabad, India. It is also known best for crafting innovative applications and software.',
        imageUrl: '/images/section1/2.png',
    },
    {
        title: 'Key Features',
        description:
            'We take care of agile development and take all decisions in a client-centric way. Our data backups and excellent support make our clients happier.',
        imageUrl: '/images/section1/3.png',
    },
];

export default function BubbleCard() {
    return (
        <Container
            maxWidth={false}
            sx={{
                width: {
                    xs: '100%',
                    md: '88.2rem'
                },
                height: {
                    xs: '60vh',
                    md: '100vh'
                },
                alignItems: 'center',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Box
                className="gradient-container"
                sx={{
                    background: 'linear-gradient(174deg ,#8372F2, #ED6FCB)',
                    height: {
                        xs: '250px',
                        md: '272px'
                    },
                    borderRadius: {
                        xs: '0px 130px',
                        md: '0px 160px'
                    },
                    display: {
                        xs: 'flex',
                        md: 'none'
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                }}
            >
                <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]}>
                    {cardData.map((card, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                height={'26rem'}
                                display='flex'
                                alignItems='flex-end'
                                justifyContent='center'
                            >
                                <Card sx={{ width: '330px', height: '350px', borderRadius: '20px', background: '#18181C', overflow: 'visible' }}>
                                    <CardContent >
                                        <Box sx={{ height: '100px', width: "260px", position: 'relative' }}>
                                            <CardMedia sx={{ height: '139px', width: "260px", position: 'absolute', borderRadius: '20px', bottom: '2rem', left: '1.2rem' }} image={card.imageUrl} title="green iguana" />
                                        </Box>
                                        <Typography gutterBottom variant="h5" component="div" fontFamily={'Lato'} color={'#FFFFFF'} px={2}>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" fontSize={"13.5px"} color={'#9E9E9E'} textAlign="left" fontFamily={'Lato'} position={"relative"}  px={2}>
                                            {card.description}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                                                borderRadius: '25px',
                                                width: '45px',
                                                height: '45px',
                                                marginLeft: '14rem',
                                                lineHeight: 1,
                                                '&:after': {
                                                    content: '"\\00BB"',
                                                    fontSize: '3rem',
                                                    paddingBottom: 1,
                                                    fontWeight: 100,
                                                },
                                                minWidth: '0 !important'
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* <style>
                    {`
    
                   .swiper-pagination-bullet {
                       width: 25px;
                       height: 12px;
                       background-color: #fff;
                       opacity: 0.7;
                       border-radius: 301.65570068359375px;
                     }
                     .swiper-pagination-bullet-active {
                        background: linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%);
                       
                      }
                 
                     @media (min-width: 768px) {
                       .swiper-pagination-bullet {
                         width: 16px;
                         height: 16px;
                       }
                     }
                     `}
                </style> */}
                 <style jsx>{bulletStyles}</style>
            </Box>
            <Box
                sx={{
                    background: 'linear-gradient(174deg ,#8372F2, #ED6FCB)',
                    height: '272px',
                    borderRadius: '0px 160px',
                    display: {
                        xs: 'none',
                        md: 'flex'
                    },
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100vw',
                }}
            >
                <Grid container display={'flex'} justifyContent={'space-between'} px={10}>
                    {cardData.map((card, index) => (
                        <Grid key={index} item xs={12} sm={4} pt="30px" style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Box height={'390px'} position={"relative"}>
                                <Card sx={{ width: '330px', height: '350px', borderRadius: '19px', background: '#18181C' }}>
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'center', height: '100%', paddingLeft: "15%", paddingTop: "10%" }}>
                                        <CardMedia sx={{ height: '139px', width: "260px", borderRadius: "12px", zIndex: 1, position: "absolute", bottom: "75%", left: "11%" }} image={card.imageUrl} title="green iguana" />
                                        <Typography gutterBottom variant="h5" component="div" color={'#FFFFFF'}>
                                            {card.title}
                                        </Typography>
                                        <Typography variant="body2" fontSize={"13.5px"} color={'#9E9E9E'} textAlign="left" fontFamily={'Lato'} paddingRight='16%' position={"relative"}>
                                            {card.description}

                                        </Typography>
                                        <Button
                                            variant="contained"
                                            sx={{
                                                background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                                                borderRadius: '25px',
                                                width: '45px',
                                                height: '45px',
                                                marginLeft: '14rem',
                                                position: 'absolute',
                                                bottom: "20%",
                                                lineHeight: 1,
                                                '&:after': {
                                                    content: '"\\00BB"',
                                                    fontSize: '3rem',
                                                    paddingBottom: 1,
                                                    fontWeight: 100,
                                                },
                                                minWidth: '0 !important'
                                            }}
                                        />
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}
