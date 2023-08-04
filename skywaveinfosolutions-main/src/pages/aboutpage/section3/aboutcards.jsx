'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

const cardData = [
  {
    logo: '/icons/about/s2/Fexibility.png',
    title: 'Flexibility',
    description:
      'We offer full flexibility to our employees in work hours and also allow them to work from home for real reasons.',
  },
  {
    logo: '/icons/about/s2/leader.png',
    title: 'Strong Leaders',
    description:
      'Our technical and business leaders are super active and are able to carry any load with ease to build a strong environment.',
  },
  {
    logo: '/icons/about/s2/education.png',
    title: 'Best Education',
    description:
      'Sessions for skill development and other curricular activities are held for overall development of an employee.',
  },
  {
    logo: '/icons/about/s2/client.png',
    title: 'Client Oriented',
    description:
      'All our project cycles and engagement with clients are based on trust and honesty. We believe in serving best with ethics.',
  },
  {
    logo: '/icons/about/s2/vector.png',
    title: 'Rich Experience',
    description:
      'We provide rich experience to both our clients and our team, working hard to accomplish their projects.',
  },
];

const AboutCardsBanner = () => {

  const cardStyle = {
    width: '448px',
    height: '486px',
    borderRadius: '14px',
    margin: '10px',
    backgroundColor: '#1B1B1B',
    boxShadow: '10px 10px 15px 0px #00000040',
  };

  const logoStyle = {
    height: '80px',
    width: '86px',
    marginBottom: '4rem',
  };

  const titleStyle = {
    fontFamily: 'Lato',
    fontSize: '42px',
    fontWeight: 700,
    lineHeight: '50px',
    letterSpacing: '1.852427363395691px',
    textAlign: 'center',
    color: '#FFFFFF',
  };

  const descriptionStyle = {
    fontFamily: 'Lato',
    fontSize: '22px',
    fontWeight: 300,
    lineHeight: '26px',
    letterSpacing: '0em',
    textAlign: 'center',
    color: '#FFFFFF',
    marginTop: '4rem',
  };
  
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
        slidesPerView={3}
      >

        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card style={{
              ...cardStyle,
              marginLeft: '10px'
            }}
            >
              <CardContent
                style={{
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
                  style={logoStyle}
                />
                {/* Title */}
                <Typography variant="h5" component="h2" style={titleStyle}>
                  {card.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={descriptionStyle}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
  // );
};

export default AboutCardsBanner;
