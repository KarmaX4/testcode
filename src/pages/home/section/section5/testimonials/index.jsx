import React, { useState } from 'react';
import { Box } from '@mui/material';
import TestimonialCard from './cards/testimonialCard';
const testimonialsData = [
  {
    id: 1,
    name: 'Stuart',
    text:
      'Skywave Info Solutions is great. My working experience with them is amazing. They response to his client very fast and quick and completed work before due time. I’ll recommended Skywave to everyone. Thanks for your hard work.',
    image: 'icons/testimonials/Mask group.png',
  },
  {
    id: 2,
    name: 'Ashish Malaviya',
    text:
      'Working with Skywave has been amazing. Very knowledgeable and rely on in case of urgencies. Very patient with us throughout the project. Strongly recommend hime for Yll, Codeignitor and Laraval Projects.',
    image: 'icons/testimonials/Mask group-1.png',
  },
  {
    id: 3,
    name: 'Anha',
    text:
      'It’s always a pleasure to work with someone as reliable and helpful as Skywave.',
    image: 'icons/testimonials/Mask group.png',
  },
  {
    id: 4,
    name: 'Brain',
    text: 'Great work in the realm for php was done here.',
    image: 'icons/testimonials/Mask group.png-1',
  },
  {
    id: 5,
    name: 'David',
    text:
      'Skywave team is easy to talk to and can finish work on time and with quality. Always ready to lend a helping hand!',
    image: 'https://example.com/david-lee.jpg',
  },
  {
    id: 6,
    name: 'Henry',
    text:
      'Skywave Info Solutions is an excellent developers. I highly recommend that services. They provides top-notch code.',
    image: 'https://example.com/sophia-brown.jpg',
  },
];


const dotsContainerStyles = {
  // width: 249,
  height: 26,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,
  marginTop: 6,
};

const dotStyles = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  cursor: 'pointer',
  border: '2px solid #FFFFFF',
  background: '#FFFFFF'
};

const activeDotStyles = {
  background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
  width: 18,
  height: 18,
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        width: {
          md: '60%',
        },
      }}
    >
      <TestimonialCard testimonial={testimonialsData[activeIndex]} />
      <Box sx={dotsContainerStyles}>
        {Array.from({ length: 6 }).map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              ...dotStyles,
              ...(activeIndex === index ? activeDotStyles : {}),
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;
