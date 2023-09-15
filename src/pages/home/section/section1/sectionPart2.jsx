import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import SkywaveContainer from "@/pages/Components/SkywaveContainer";

const SectionPart2 = () => {
  const headerTextStyle = {
    fontFamily: "Britannic Bold",
    fontSize: {
      xs: "3rem",
      md: "4.3rem",
    },
    fontWeight: 400,
    lineHeight: {
      xs: "3.3rem",
      md: "4.3rem",
    },
    textAlign: {
      xs: "center",
      md: "left",
    },
  };

  const bodyTextStyle = {
    fontFamily: "Lato",
    fontSize: "17px",
    fontWeight: 300,
    lineHeight: "24px",
    letterSpacing: "0px",
    textAlign: "left",
    color: "white",
    width: {
      xs: "inherit",
      md: "80%",
    },
    textAlign: "left",
    whiteSpace: "pre-line",
  };

  const similarRect = {
    margin: "0",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(108.46deg, #8372f2, #ed6fcb)",
    width: {
      xs: "100%",
    },
    display: "flex",
    zIndex: -1,
  };

  const winRectangle = {
    top: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(0%, -50%)",
    borderRadius: {
      xs: "50rem 0px 0px 50rem",
      md: "50rem 0px 0px 50rem",
    },
    ...similarRect,
  };

  const rectangle = {
    height: "100%",
    width: "100vw",
    position: "absolute",
    top: 0,
    borderRadius: {
      xs: "50rem 0px 0px 50rem",
      md: "50% 0px 0px 50%",
    },
    ...similarRect,
  };

  return (
    <>
      <SkywaveContainer>
        <Grid
          container
          m={0}
          sx={{
            height: {
              xs: "fit-content",
              md: "80vh",
            },
            alignItems: "center",
            flexDirection: "row",
            overflow: "hidden",
            display: {
              xs: "flex",
              md: "none",
            },
            padding: "0 !important",
            gap: "3rem",
          }}
        >
          <Grid
            item
            xs={12}
            mt={6}
            sx={{
              padding: "0 !important",
              width: {
                xs: "80vw",
                md: "90vw",
              },
            }}
          >
            <Typography variant="h1" sx={headerTextStyle} color="#ffff">
              Skywave
              <br />
              <Typography
                component="span"
                sx={{
                  ...headerTextStyle,
                  backgroundImage:
                    "linear-gradient(335deg, #ED6FCB 0, #8372F2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Info Solution
              </Typography>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            position="relative"
            sx={{
              width: "100vw",
              padding: "40px !important",
            }}
          >
            {/* <Box width='100%'
                            sx={{
                                textAlign: "right"
                            }}
                        > */}
            <Box
              width={"70%"}
              height={"70%"}
              sx={{
                textAlign: "right",
              }}
            >
              <Image
                src="/images/work.png"
                alt="Picture of the author"
                width={1000}
                height={1100}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Box
              height="100%"
              zIndex="1"
              position="absolute"
              sx={{
                ...rectangle,
                textAlign: "center",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            position="relative"
            sx={{
              padding: "0 !important",
              width: {
                xs: "80vw",
                md: "90vw",
              },
            }}
          >
            <Typography
              component="p"
              sx={{
                ...bodyTextStyle,
              }}
            >
              We have a talented team and we work happily all over the day. Our
              developers have multiple skills and can do many things like Mobile
              apps, Web apps, Game development, AR-VR development, Digital
              marketing, and many other things. Our solutions are made in a way
              that it brings success to our clients. We never compromise quality
              and time as well.{"\n\n"}
              Our services are very reasonable and dedicated. Our only profit is
              our client’s satisfaction. We always assist with the best ideas
              and solutions from our experts for free. We never charge for
              consultation. While our technical team works hard to bring all
              dream ideas come true and develop in a way that it meets client’s
              expectations.
            </Typography>
          </Grid>
        </Grid>
      </SkywaveContainer>
      <Box
        position="relative"
        sx={{
          overflowX: "hidden",
          display: {
            xs: "none",
            md: "flex",
          },
          // backgroundColor: 'blue'
        }}
      >
        <Container
          maxWidth={false}
          m={0}
          sx={{
            width: "90vw",
            overflow: "hidden",
            padding: "0 !important",
            // backgroundColor: 'red'
          }}
        >
          <Grid
            container
            spacing={5}
            m={0}
            sx={{
              height: "fit-content",
              width: "inherit",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              my={6}
              sx={{
                padding: "0 !important",
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Typography
                variant="h2"
                sx={{ ...headerTextStyle }}
                color="#ffff"
              >
                Skywave
                <br />
                <Typography
                  component="span"
                  sx={{
                    ...headerTextStyle,
                    backgroundImage:
                      "linear-gradient(335deg, #ED6FCB 0, #8372F2 100%);                                    ",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    width: "6px",
                  }}
                >
                  Info Solution
                </Typography>
              </Typography>
              <Typography sx={bodyTextStyle}>
                We have a talented team and we work happily all over the day.
                Our developers have multiple skills and can do many things like
                Mobile apps, Web apps, Game development, AR-VR development,
                Digital marketing, and many other things. Our solutions are made
                in a way that it brings success to our clients. We never
                compromise quality and time as well.{"\n\n"}
                Our services are very reasonable and dedicated. Our only profit
                is our client’s satisfaction. We always assist with the best
                ideas and solutions from our experts for free. We never charge
                for consultation. While our technical team works hard to bring
                all dream ideas come true and develop in a way that it meets
                client’s expectations.
              </Typography>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              item
              xs={12}
              md={6}
              height="inherit"
              position="relative"
            >
              <Box
                width="75%"
                height="75%"
                style={{
                  zIndex: "3",
                }}
              >
                <Image
                  src="/images/work.png"
                  alt="Picture of the author"
                  width={1000}
                  height={1100}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          height="100%"
          zIndex="1"
          position="absolute"
          sx={{ ...winRectangle, textAlign: "center" }}
        />
      </Box>
    </>
  );
};

export default SectionPart2;
