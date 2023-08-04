import React from 'react';
import { Box, Container } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const SkywaveText = () => {
  const characters = ['s', 'k', 'y', 'w', 'a', 'v', 'e'];
  const images = characters.map((char) => `images/Skywave/${char}.svg`);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3.5, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    draggable: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth={false} sx={{ mb: 20 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ padding: '0' }}>
            <img
              alt={`Character ${characters[index]}`}
              src={image}
              style={{ width: '302.44px', height: '236.29px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default SkywaveText;
