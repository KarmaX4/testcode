'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const cardData = [
  {
    logo: '/images/icons/about/s2/Fexibility.png',
    title: 'Flexibility',
    description:
      'We offer full flexibility to our employees in work hours and also allow them to work from home for real reasons.',
  },
  {
    logo: '/images/icons/about/s2/leader.png',
    title: 'Strong Leaders',
    description:
      'Our technical and business leaders are super active and are able to carry any load with ease to build a strong environment.',
  },
  {
    logo: '/images/icons/about/s2/education.png',
    title: 'Best Education',
    description:
      'Sessions for skill development and other curricular activities are held for overall development of an employee.',
  },
  {
    logo: '/images/icons/about/s2/client.png',
    title: 'Client Oriented',
    description:
      'All our project cycles and engagement with clients are based on trust and honesty. We believe in serving best with ethics.',
  },
  {
    logo: '/images/icons/about/s2/vector.png',
    title: 'Rich Experience',
    description:
      'We provide rich experience to both our clients and our team, working hard to accomplish their projects.',
  },
];

const AboutCardsBanner = () => {

  const cardStyle = {
    width: {
      xs: '290px',
      sm: '18rem',
      md: "28rem",
      lg: "30rem",
      xl: "35rem"
    },
    height: {
      xs: '350px',
      sm: '300px',
      md: "400px",
      xl: '486px',
      lg: '486px',
    },
    marginLeft: {
      lg: '9rem',
      md: '8rem',
      xs: '2rem'
    },
    borderRadius: '14px',
    margin: '10px',
    backgroundColor: '#1B1B1B',
    boxShadow: '10px 10px 15px 0px #00000040',
  };

  const logoStyle = {
    height: '80px',
    width: '86px',
    marginBottom: {
      xs: '0rem',
      md: '2rem',
      lg: '4rem',
    },
    objectFit: "none"
  };

  const titleStyle = {
    fontFamily: 'Lato',
    fontSize: {
      xs: '18px',
      md: '22px',
      lg: '42px'
    },
    fontWeight: 700,
    lineHeight: '50px',
    letterSpacing: '1.852427363395691px',
    textAlign: 'center',
    color: '#FFFFFF',
  };

  const descriptionStyle = {
    fontFamily: 'Lato',
    fontWeight: 300,
    lineHeight: '26px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#FFFFFF',
    margin: {
      xs: '1rem 1rem 0rem 1rem',
      md: '2rem 2rem 0rem 2rem',
      lg: '4rem 4rem 0rem 4rem',
    },
    fontSize: {
      xs: '14px',
      md: '18px',
      lg: '22px',
    },
  };

  const breakpoints = {};
  const increment = (1450 - 400) / 12;

  for (let i = 0; i < 12; i++) {
    const screenWidth = 400 + i * increment;
    const slidesPerView = 1.3 + (i * 0.1);
    breakpoints[Math.round(screenWidth)] = { slidesPerView };
  }

  breakpoints[1450] = { slidesPerView: 3 };

  const sortedBreakpoints = Object.keys(breakpoints)
    .sort((a, b) => a - b)
    .reduce((obj, key) => {
      obj[key] = breakpoints[key];
      return obj;
    }, {});

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
        animation: 'scrollBanner 20s linear infinite',
      }}
    >
      <Swiper
        effect="fade"
        breakpoints={sortedBreakpoints}
      >
        <div>
          {cardData?.map((card, index) => (
            <SwiperSlide key={index}>
              <Card sx={cardStyle} >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                  }}
                >
                  {/* Image */}
                  <CardMedia
                    component="img"
                    image={card.logo}
                    alt={`Logo ${index + 1}`}
                    sx={logoStyle}
                  />
                  {/* Title */}
                  <Typography variant="h5" component="h2" sx={titleStyle}>
                    {card.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    sx={descriptionStyle}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </Box >
  );
  // );
};

export default AboutCardsBanner;
