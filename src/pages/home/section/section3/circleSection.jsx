import React, { useState, useEffect, useRef } from 'react';
import { Box, Container } from '@mui/material';
import ImageBanner from './ImageBanner';
import TextComp from './Textpart';

const ellipseDivStyle = {
  borderRadius: '50%',
  background: 'radial-gradient(50% 50% at 50% 50%, rgb(25 40 121) 43.02%, rgb(21 36 119 / 98%))',
  filter: 'blur(20px)',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 2,
};

const CirclesSection = () => {
  const [borderSize, setBorderSize] = useState(25);
  const [sliderPosition, setSliderPosition] = useState({ x: 0, y: 0 });
  const [containerPosition, setContainerPosition] = useState(0);
  const containerRef = useRef();

  const calculateSliderPosition = (angle) => {
    const radius = 338;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  const handleScroll = () => {
    if (!containerRef.current) return; // Check for null before proceeding
    const scrollPercentage = (containerRef.current.scrollTop / containerRef.current.scrollHeight) * 100;
    setBorderSize(scrollPercentage * 3.6);

    // Check if one full rotation is completed (360 degrees) by checking the scroll position
    if (scrollPercentage >= 100) {
      setContainerPosition(100);
    } else {
      setContainerPosition(scrollPercentage);
    }
  };

  useEffect(() => {
    const angle = ((360 * borderSize) / 100 + 45) * (Math.PI / 180);
    const newPosition = calculateSliderPosition(angle);
    setSliderPosition(newPosition);
  }, [borderSize]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return; // Check for null before adding the event listener
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        height: {
          xs: '50vh',
          md: '100vh'
        },
        position: containerPosition >= 100 ? 'relative' : 'sticky',
        width: '100%',
        display: 'flex',
        WebkitBoxAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '10rem 0',
        overflow: 'hidden',
      }}
      ref={containerRef}
    >
      <Box display="flex" justifyContent="center" position="sticky" top="0">
        <Box
          sx={{
            position: 'relative',
            width: {
              xs: '350px',
              md: '677px'
            },
            height: {
              xs: '350px',
              md: '677px'
            },
            borderRadius: '50%',
            border: '1px solid white',
            animation: 'rotate 6s linear infinite',
            zIndex: 1,
          }}
        >
          <Box sx={{ position: 'relative', display: 'flex', height: '100%' }}>
            <TextComp />
            <Box sx={ellipseDivStyle} />
          </Box>
          <Box
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'white',
              position: 'absolute',
              top: `calc(50% + ${sliderPosition.y}px)`,
              left: `calc(50% + ${sliderPosition.x}px)`,
              transform: 'translate(-50%, -50%)',
              zIndex: 3,
              cursor: 'grab',
            }}
          />
        </Box>
      </Box>
      <Box justifyContent="center" sx={{ position: 'absolute', right: 0, left: 0, zIndex: -1 }}>
        <ImageBanner />
      </Box>
    </Container>
  );
};

export default CirclesSection;
