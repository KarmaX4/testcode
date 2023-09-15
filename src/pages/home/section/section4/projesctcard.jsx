"use client";
import React, { useState, useEffect } from "react";
import { Typography, Grid, Container, Button, Box } from "@mui/material";
import Swiper from "swiper";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import SkywaveButton from "@/pages/Components/ButtonComponent";
import Image from "next/image";

const LaptopImageGrid = () => {
  const imageStyles = {
    // height: {
    //   xs: '17rem',
    //   sm: '14rem',
    //   md: '25rem'
    // },
    width: {
      xs: "11rem",
      sm: "20vw",
      md: "18rem",
    },
    transformOrigin: "center bottom",
    borderRadius: "10px",
    backgroundSize: "cover",
    // backgroundColor: 'red',
    position: "absolute",
  };

  const imagePositions = [
    { rotate: "-17deg", src: "/procjectcard/Mask group-4.svg" },
    { rotate: "-4.82deg", src: "/procjectcard/Mask group-3.svg" },
    { rotate: "6.61deg", src: "/procjectcard/Mask group-2.svg" },
    { rotate: "17.61deg", src: "/procjectcard/Mask group-1.svg" },
  ];

  const rotationStep = (25 - -17) / 4;

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box
      sx={{
        height: {
          xs: "25rem",
          md: "37rem",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        // backgroundColor: 'blue',
      }}
    >
      <style>
        {`
          @keyframes blinking {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
      <Typography
        variant="body2"
        sx={{
          marginBottom: 1,
          fontSize: "2.875rem",
          display: {
            xs: "none",
            md: "block",
          },
          zIndex: 1,
          color: "azure",
          fontFamily: "Britannic Bold",
          animation: hoveredIndex ? "none" : "blinking 2s infinite",
        }}
      >
        {hoveredIndex ? "" : "Hover Me!"}
      </Typography>
      {imagePositions.map(({ src }, index) => (
        <Box
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          sx={{
            ...imageStyles,
            transform: {
              xs: `rotate(${(index * rotationStep - 17).toFixed(2) + "deg"})`,
              md: `rotate(${
                hoveredIndex
                  ? (index * rotationStep - 17).toFixed(2) + "deg"
                  : 0
              })`,
            },
            transition: "transform 200ms",
            "&:hover": {
              transform: `rotate(${
                (index * rotationStep - 17).toFixed(2) + "deg"
              })`,
            },
          }}
        >
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            height={1000}
            width={1000}
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      ))}
    </Box>
  );
};

const ProjectCard = () => {
  const imagePositions = [
    "/procjectcard/Mask group-1.svg",
    "/procjectcard/Mask group-2.svg",
    // '/procjectcard/Mask group-3.svg',
  ];

  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      modules: [EffectCards],
    });
  }, []);

  const similarFontStyle = {
    color: "#C3C3C3",
    fontFamily: "Lato",
    fontWeight: "400",
    lineHeight: "1.1",
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        width: {
          xs: "80vw",
          md: "90vw",
        },
        padding: "0px !important",
        mb: 10,
        // backgroundColor: 'blue'
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={12} sm={6} width={"inherit"}>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: { xs: "43px", md: "78px" },
              fontFamily: "Britannic Bold",
              fontWeight: "400",
              display: "inline",
            }}
          >
            Our{" "}
            <Typography variant="span" sx={{ color: "#9AABDB" }}>
              Projects
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              ...similarFontStyle,
              fontSize: { xs: "17px" },
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            Our portfolio speaks better than words!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              ...similarFontStyle,
              fontSize: {
                sm: 25,
                md: 34,
              },
              pr: 0,
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            Our portfolio speaks better
            <br /> than words!
          </Typography>
          <SkywaveButton placeholder={"View More"} link="/portfolio" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LaptopImageGrid />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProjectCard;
