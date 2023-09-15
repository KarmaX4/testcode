"use client";
import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import Image from "next/image";

const assetsArray = [
  {
    title: "Mobile Development",
    description:
      "Top-notch mobile app development services provider in India, ranked as #1 mobile development company in clutch.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Highly automated and Al based software development company which focuses on developing scalable softwares.",
  },
  {
    title: "Business Consultation",
    description:
      "Our experts have year of experience in helping business grow exponentially by proven tactics which ultimately gives you a hike in revenue.",
  },
  {
    title: "Digital Marketing",
    description:
      "Top SEO developement team which helps your business to grow online by every aspect and reach your real target audience.",
  },
  {
    title: "Web Development",
    description:
      "Most Promising Web Development Services Provider in India. Best PHP framework development and highly skilled web weavers.",
  },
];

const HeroBanner = () => {
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAssetIndex((prevIndex) => (prevIndex + 1) % assetsArray.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const buttonStyles = {
    padding: "8px 25px",
    fontSize: {
      xs: "1.5vh",
      md: "2vh",
    },
    border: "none",
    cursor: "pointer",
    borderRadius: "30px",
    color: "white",
    background: "linear-gradient(108.46deg, #ED6FCB 38.19%, #8372F2 100%)",
    transition: "background 0.3s ease-in-out",
    transform: "scale(1.02)",
    boxShadow: "rgb(130 106 223) 0px 1px 2px 1px",
    "&:hover": {
      background: "linear-gradient(70.46deg, #ED6FCB 38.19%, #8372F2 100%)",
      transform: "scale(1)",
      boxShadow: "rgb(130 106 223) 0px 1px 2px 1px",
    },
  };

  const currentAsset = assetsArray[currentAssetIndex];
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: {
          // xs: 'center',
          xs: "flex-end",
          md: "center",
        },
        width: {
          xs: "80vw",
          md: "90vw",
        },
        height: {
          xs: "30rem",
          sm: "40rem",
          md: "100vh",
        },
        padding: {
          sx: "0 !important",
        },
        marginBottom: {
          xs: "5rem !important",
          sm: ".5rem !important",
        },
        // backgroundColor: 'blue'
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-around"
        alignContent="center"
        sx={{
          width: "inherit",
          height: "20rem",
          // backgroundColor: 'red'
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "inherit",
            height: "18rem",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "3rem",
                  sm: "5vh",
                  md: "75px",
                },
                fontWeight: 400,
                lineHeight: {
                  xs: "50px",
                  md: "50px",
                },
                letterSpacing: "1.5px",
                textAlign: "left",
                color: "#FFFFFF",
                fontFamily: "Britannic Bold",
              }}
            >
              {currentAsset.title.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  {index === 1 ? (
                    <Typography
                      component="span"
                      sx={{
                        backgroundImage:
                          "linear-gradient(130deg, #ED6FCB 38.19%, #8372F2 100%)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        fontSize: {
                          xs: "3rem",
                          sm: "5vh",
                          md: "75px",
                        },
                        fontFamily: "Britannic Bold",
                        fontWeight: 400,
                        letterSpacing: "1px",
                        lineHeight: {
                          xs: "1px",
                          md: "5rem",
                        },
                      }}
                    >
                      {word}
                    </Typography>
                  ) : (
                    word
                  )}
                  {index !== currentAsset.title.split(" ").length - 1 && <br />}
                </React.Fragment>
              ))}
            </Typography>
            <Typography
              variant="body1"
              width="inherit"
              sx={{
                fontFamily: "Lato",
                fontWeight: 400,
                marginTop: {
                  xs: "16px",
                  md: "0",
                },
                width: {
                  xs: "100%",
                  md: "370px",
                },
                color: "#fff",
                textAlign: {
                  xs: "left",
                  md: "center",
                  lg: "left",
                },
              }}
            >
              {currentAsset.description}
            </Typography>
          </Box>
          <Button href={"/service"} sx={buttonStyles}>
            Discover More
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: "50vw",
              aspectRatio: 2 / 1,
              display: {
                xs: "none",
                sm: "flex",
              },
              justifyContent: "center",
              mt: {
                xs: 4,
                md: 0,
              },
            }}
          >
            <Image
              src={`/images/Home/${currentAsset.title}.png`}
              alt={currentAsset.title}
              width={1000}
              height={1100}
              style={{
                width: "auto",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroBanner;
