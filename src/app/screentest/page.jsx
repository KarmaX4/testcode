"use client"
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red, green, blue, yellow, purple } from '@mui/material/colors';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.only('xs')]: {
    backgroundColor: green[500],
  },
  [theme.breakpoints.between('sm', 'md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.between('md', 'lg')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    backgroundColor: yellow[500],
  },
  [theme.breakpoints.up('xl')]: {
    backgroundColor: purple[500],
  },
}));

export default function MediaQuery() {
  const [screenWidth, setScreenWidth] = useState(null);
  const [screenHeight, setScreenHeight] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);

      function handleResize() {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <Root>
      {screenWidth !== null && (
        <Typography color="white">Screen width: {screenWidth}px</Typography>
      )}
      {screenHeight !== null && (
        <Typography color="white">Screen height: {screenHeight}px</Typography>
      )}
      <Typography>Screen below 600: green - xs</Typography>
      <Typography>Screen within 601 - 900: blue - sm</Typography>
      <Typography>Screen within 901-1200: red - md </Typography>
      <Typography>Screen within 1200-1535: yellow - lg</Typography>
      <Typography>Screen above 1535: purple - xl (up)</Typography>
    </Root>
  );
}
