import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const bulletStyles = `
  .swiper-pagination-bullet {
    width: 20px;
    height: 12px;
    background-color: #fff;
    opacity: 0.7;
    border-radius: 301.65570068359375px;
    transition: width 0.3s ease-in-out;
  }

  .swiper-pagination-bullet-active {
    background: linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%);
    width: 30px;
    transition: width 0.3s ease-in-out;
  }

  @media (min-width: 768px) {
    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
    }
  }
`;

const cardData = [
  {
    title: "Our Services",
    description:
      "We offer end to end services and solutions for almost all industries. We offer dedicated team or individual developer who only work for your project.",
    imageUrl: "/images/section1/1.png",
    url: "/service",
  },
  {
    title: "About Us",
    description:
      "Skywave Info Solutions is a well-known mobile app development company in Ahmedabad, India. It is also known best for crafting innovative applications and software.",
    imageUrl: "/images/section1/2.png",
    url: "/about",
  },
  {
    title: "Key Features",
    description:
      "We take care of agile development and take all decisions in a client-centric way. Our data backups and excellent support make our clients happier.",
    imageUrl: "/images/section1/3.png",
    url: "/portfolio",
  },
];

export default function BubbleCard() {
  return (
    <Container
      maxWidth={false}
      sx={{
        // backgroundColor: 'aquamarine',
        width: "100vw",
        height: {
          xs: "40rem",
          sm: "40rem",
          md: "40rem",
        },
        alignItems: "center",
        margin: "auto auto 5rem auto",
        display: "flex",
        justifyContent: "center",
        padding: "0 !important",
      }}
    >
      <Box
        className="gradient-container"
        sx={{
          position: "relative",
          display: {
            xs: "flex",
            sm: "none",
          },
          justifyContent: "center",
          alignItems: "center",
          width: "inherit",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "80vw",
              md: "90vw",
            },
            position: "absolute",
            background: "linear-gradient(174deg ,#8372F2, #ED6FCB)",
            height: {
              xs: "250px",
              md: "272px",
            },
            borderRadius: {
              xs: "0px 130px",
              md: "0px 160px",
            },
          }}
        />
        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index}>
              <Box
                height={"26rem"}
                display="flex"
                alignItems="flex-end"
                justifyContent="center"
              >
                <Card
                  sx={{
                    width: "300px",
                    height: "350px",
                    borderRadius: "20px",
                    background: "#18181C",
                    overflow: "visible",
                    // backgroundColor: '#941544',
                    position: "relative",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        height: "100px",
                        width: "230px",
                        position: "relative",
                      }}
                    >
                      <Box
                        sx={{
                          height: "139px",
                          width: "inherit",
                          position: "absolute",
                          borderRadius: "20px",
                          bottom: "2rem",
                          left: "1.2rem",
                          //   backgroundColor: '#962625'
                        }}
                      >
                        <Image
                          src={card?.imageUrl}
                          alt={card?.title}
                          width={1000}
                          height={1100}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </Box>
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      fontFamily={"Lato"}
                      color={"#FFFFFF"}
                      px={2}
                    >
                      {card?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={"13.5px"}
                      color={"#9E9E9E"}
                      textAlign="left"
                      fontFamily={"Lato"}
                      position={"relative"}
                      px={2}
                    >
                      {card?.description}
                    </Typography>
                  </CardContent>
                  <Button
                    href={card?.url}
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)",
                      borderRadius: "25px",
                      width: "45px",
                      height: "45px",
                      // marginLeft: '14rem',
                      margin: "0 !important",
                      position: "absolute",
                      right: "10%",
                      bottom: "10%",
                      lineHeight: 1,
                      "&:after": {
                        content: '"\\00BB"',
                        fontSize: "3rem",
                        paddingBottom: 1,
                        fontWeight: 100,
                      },
                      minWidth: "0 !important",
                    }}
                  />
                </Card>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <style jsx>{bulletStyles}</style>
      </Box>
      <Box
        sx={{
          background: "linear-gradient(174deg ,#8372F2, #ED6FCB)",
          height: {
            sm: "12rem",
            md: "272px",
          },
          borderRadius: {
            sm: "0px 5rem",
            md: "0px 160px",
          },
          display: {
            xs: "none",
            sm: "flex",
            md: "flex",
          },
          justifyContent: "center",
          alignItems: "center",
          width: "90vw",
        }}
      >
        <Grid container display={"flex"} justifyContent={"space-between"}>
          {cardData.map((card, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={4}
              pt="30px"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                height={{
                  sm: "15rem",
                  md: "20rem",
                  // lg: '',
                  xl: "25rem",
                }}
                position={"relative"}
              >
                <Card
                  sx={{
                    width: {
                      xs: "28vw",
                      md: "17rem",
                      lg: "20rem",
                      xl: "24rem",
                    },

                    height: "inherit",
                    borderRadius: "19px",
                    background: "#18181C",
                  }}
                >
                  {/* // <Card sx={{ width: '330px', height: '350px', borderRadius: '19px', background: '#18181C' }}> */}
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "left",
                      justifyContent: "flex-start",
                      height: "inherit",
                      padding: "10%",
                    }}
                  >
                    <Box
                      sx={{
                        height: {
                          sm: "40%",
                          ms: "139px",
                          md: "165px",
                        },
                        width: {
                          sm: "22vw",
                          md: "13.4rem",
                          lg: "16rem",
                          xl: "19rem",
                        },
                        borderRadius: "20px",
                        zIndex: 1,
                        position: "absolute",
                        bottom: "75%",
                        left: "11%",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={card?.imageUrl}
                        alt={card?.title}
                        width={1000}
                        height={1100}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h1"
                      component="div"
                      color={"#FFFFFF"}
                      mt={{
                        sm: "3em",
                        md: "3em",
                      }}
                      fontSize={{
                        xs: "1.15rem",
                        md: "1.3rem",
                        lg: "1.5rem",
                        xl: "2rem",
                      }}
                    >
                      {card?.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontSize={{
                        sm: "10px",
                        md: "11px",
                        lg: "13px",
                        xl: "17px",
                      }}
                      color={"#9E9E9E"}
                      textAlign="left"
                      fontFamily={"Lato"}
                      paddingRight="16%"
                      position={"relative"}
                    >
                      {card?.description}
                    </Typography>
                    <Button
                      variant="contained"
                      href={card?.url}
                      sx={{
                        background:
                          "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)",
                        borderRadius: "25px",
                        width: {
                          sm: "30px",
                          md: "45px",
                          lg: "45px",
                          xl: "45px",
                        },
                        height: {
                          sm: "30px",
                          md: "45px",
                          lg: "45px",
                          xl: "45px",
                        },
                        position: "absolute",
                        delay: "200ms",
                        right: "8%",
                        bottom: "8%",
                        lineHeight: 1,
                        "&:after": {
                          content: '"\\00BB"',
                          fontSize: {
                            sm: "1.5rem",
                            md: "3rem",
                          },
                          paddingBottom: {
                            sm: 0.4,
                            md: 1,
                          },
                          fontWeight: 100,
                        },
                        minWidth: "0 !important",
                      }}
                    />
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
