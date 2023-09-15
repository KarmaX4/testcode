"use client";
import { useState, useEffect } from "react";
import { Container, Box, Typography, Button, Grid, Link } from "@mui/material";
import FlyingItems from "./BackgroundItems/fly.jsx";
import Image from "next/image.js";

const MainBanner = ({
  title = "",
  subtitle = "",
  buttonText = "",
  description = "",
  imageUrl = "",
  imgBackground = false,
  flyBackground = false,
  hire = false,
}) => {
  const [deg, setDeg] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDeg((prevDeg) => (prevDeg + 2) % 360);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const buttonStyles = {
    padding: "8px 25px",
    fontSize: "18px",
    border: "none",
    cursor: "pointer",
    borderRadius: "30px",
    color: "white",
    background: "linear-gradient(108.46deg, #ED6FCB 38.19%, #8372F2 100%)",
    transition: "background 0.3s ease-in-out",
    transform: "scale(1.02)",
    boxShadow: "rgb(130 106 223) 0px 1px 2px 1px",
    ":hover": {
      background: "linear-gradient(70.46deg, #ED6FCB 38.19%, #8372F2 100%)",
      transform: "scale(1)",
      boxShadow: "rgb(130 106 223) 0px 1px 2px 1px",
    },
  };

  const CustomLink = ({ link, text }) => {
    if (link) {
      const adjustedLink =
        text.toLowerCase() === "services" ? `/${text.slice(0, -1)}` : link;
      return (
        <a
          style={{ textDecoration: "none", color: "#c9c9c9" }}
          href={adjustedLink.toLowerCase()}
        >
          {text}&nbsp;/&nbsp;
        </a>
      );
    } else {
      return text;
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: {
          xs: "center",
          // xs: 'flex-end',
          md: "space-around",
        },
        m: "auto",
        width: {
          xs: "80vw",
          md: "90vw",
        },
        minHeight: {
          sm: "40rem",
          md: "100vh",
          xs: "60vh",
        },
        padding: "0 !important",
      }}
    >
      <Grid container spacing={10} justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            gap: {
              xs: 2,
              sm: 4,
            },
            justifyContent: "center",
          }}
        >
          {title && (
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Britannic Bold",
                fontSize: {
                  xs: '3.5rem',
                  sm: '3.5rem',
                  md:hire?'5.6rem': '6rem'
                },
                fontWeight: 900,
                lineHeight: {
                  xs: "55px",
                  sm: "3rem",
                  md: "11vh",
                },
                letterSpacing: {
                  xs: "1px",
                  md: "1.5px",
                },
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              {title}
              <br />
              {subtitle && (
                <Typography
                  variant="span"
                  sx={{
                    backgroundImage:
                      "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    fontFamily: "Britannic Bold",
                    textTransform: "capitalize",
                    letterSpacing: {
                      xs: "2px",
                      md: "1.5px",
                    },
                  }}
                >
                  {subtitle}
                </Typography>
              )}
            </Typography>
          )}
          {subtitle && !title && (
            <Typography
              variant="span"
              sx={{
                letterSpacing: "0px",
                backgroundImage:
                  "linear-gradient(130deg, #ED6FCB 38.19%, #8372F2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: {
                  xs: "2.5vh",
                  sm: "1.7rem",
                  md: "5vh",
                },
              }}
            >
              {subtitle}
            </Typography>
          )}
          {description && (
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: "Lato",
                marginTop: {
                  xs: "0px",
                  // xs: '16px',
                  md: "0",
                },
                width: "100%",
                color: "#C3C3C3",
                textAlign: "left",
                fontSize: {
                  xs: "18px",
                  sm: "25px",
                },
                overflow: "unset",
              }}
            >
              {description.split(" / ").map((val, index, arr) => {
                return (
                  <CustomLink
                    key={index}
                    link={index !== arr.length - 1 ? `/${val}` : null}
                    text={val}
                  />
                );
              })}
            </Typography>
          )}
          {buttonText && (
            <Button
              style={buttonStyles}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              {buttonText}
            </Button>
          )}
        </Grid>
        {imageUrl && (
          <Grid
            item
            xs={8}
            sm={6}
            sx={{
              paddingTop: "0 !important",
              paddingLeft: "70px !important",
              position: "relative",
              justifyContent: "center",
              left: {
                xs: "0",
                md: flyBackground ? "5%" : "0",
              },
              display: {
                xs: "none",
                sm: "flex",
              },
              mt: {
                xs: 4,
                md: 0,
              },
              transform: flyBackground
                ? "translate(-15%, 0%)"
                : "translate(0%, 0%)",
            }}
          >
            {flyBackground ? (
              ""
            ) : (
              <Grid
                container
                spacing={2}
                gap={2}
                margin="auto"
                sx={{
                  height: "100%",
                  flexDirection: "column",
                  flexWrap: "nowrap",
                  width: { sm: "100%", md: "70%" },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "50%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      width: "16%",
                      height: "100%",
                      background: imgBackground
                        ? `linear-gradient(${deg}deg, #8372F2 38.19%, #ED6FCB 100%)`
                        : "transparent",
                      height: "100%",
                      borderRadius: { sm: `2.5rem`, md: `5rem` },
                      opacity: 0.1,
                    }}
                  />
                  <Box
                    sx={{
                      width: "80%",
                      height: "100%",
                      border: `5px solid ${
                        imgBackground ? "#8372f2" : "transparent"
                      }`,
                      borderRadius: {
                        sm: `0 2.5rem 0 2.5rem`,
                        md: `0 5rem 0 5rem`,
                      },
                      opacity: 0.1,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    height: "50%",
                    background: imgBackground
                      ? `linear-gradient(${deg}deg, #8372F2 38.19%, #ED6FCB 100%)`
                      : "transparent",
                    borderRadius: {
                      sm: `0 2.5rem 0 2.5rem`,
                      md: `0 5rem 0 5rem`,
                    },
                  }}
                />
              </Grid>
            )}

            <Box
              sx={{
                position: flyBackground ? "relative" : "absolute",
                height: "100%",
                bottom: {
                  sm: 0,
                  md: 0,
                },
              }}
            >
              <Image
                src={imageUrl}
                alt={`${title} ${subtitle}`}
                // sizes="(max-width: 320px) 280px, (max-width: 680px) 640px, (max-width: 960px) 920px, 1980px"
                sizes="(max-width: 768px) 200px,
                    (max-width: 1024px) 400px,
                    800px"
                width={400}
                height={358}
                style={{
                  width: "auto",
                  height: "100%",
                }}
              />
              {flyBackground ? <FlyingItems /> : ""}
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default MainBanner;
