"use client"
import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImageBanner = () => {
  const [rotation, setRotation] = useState(0);

  const images = Array.from({ length: 7 }, (_, index) => (
    <div className="earth-image" key={index}>
      <img
        alt={`Banner ${index}`}
        src={`/images/circleCard/${index + 1}.png`}
        style={{
          width: '320px',
          height: '236px',
          objectFit: 'cover',
        }}
      />
    </div>
  ));

  const rotateEarth = () => {
    setRotation(rotation + 30); // Rotate by 30 degrees
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    beforeChange: () => {
      rotateEarth(); // Rotate when changing slides
    },
  };

  return (
    <Container
    maxWidth={false}
    style={{
      padding: '0 !important',
      margin: '0 !important',
    }}
    >
      <Slider {...settings}>{images}</Slider>
      <Box
      background='red'
        className="earth-container"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '236px', // Match the image height
          marginTop: '20px', // Adjust as needed
        }}
      >
        <Box
          className="earth"
          sx={{
            width: '100px', // Adjust the size as needed
            height: '100px', // Adjust the size as needed
            backgroundImage: `url('/images/earth.png')`, // Replace with the Earth image
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transformOrigin: 'center center',
            animation: 'rotateEarth 10s linear infinite',
          }}
        ></Box>
      </Box>
    </Container>
  );
};

export default ImageBanner;
