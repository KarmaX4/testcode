import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import TestimonialCard from './cards/testimonialCard';
import testimonialsData from './cards/testimonialsData';

const dotsContainerStyles = {
  width: 249,
  height: 26,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
  marginTop: 80,
};

const dotStyles = {
  width: 24,
  height: 24,
  borderRadius: '50%',
  cursor: 'pointer',
  color: '#D9D9D9',
};

const activeDotStyles = {
  background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)',
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        width: {
          md: '70%'
        }
      }}>
      <TestimonialCard testimonial={testimonialsData[activeIndex]} />
      <Box style={dotsContainerStyles}>
        {Array.from({ length: 6 }).map((_, index) => (
          <CircleOutlinedIcon
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{ ...dotStyles, ...(activeIndex === index ? activeDotStyles : {}) }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
