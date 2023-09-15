import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

const Blog = () => {
  const blogData = [
    {
      imageUrl: "/images/blog/Mask group.png",
      title:
        "Skywave Info Solutions Is A Clutch Top Indian Development Company For 2022",
    },
    {
      imageUrl: "/images/blog/Mask group (1).png",
      title:
        "80% US-based Companies Offering to Employees Permanent Work From Home : Remote Work Survey 2021",
    },
  ];

  const mainTitleStyle = {
    display: "inline",
    fontSize: {
      xs: "3.8rem",
      md: "78px !important",
    },
  };
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          width: {
            xs: "80vw",
            md: "90vw",
          },
          padding: "0px !important",
          // backgroundColor: 'blue'
        }}
      >
        <Box>
          <Typography
            fontFamily="Britannic Bold"
            variant="h1"
            color="white"
            sx={mainTitleStyle}
          >
            From our{" "}
          </Typography>
          <Typography
            fontFamily="Britannic Bold"
            variant="h1"
            color="#9AABDB"
            sx={mainTitleStyle}
          >
            blogs
          </Typography>
        </Box>
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="body"
            color="#C3C3C3"
            sx={{
              wordWrap: "break-word",
              fontFamily: "Lato",
              fontSize: {
                xs: "20px",
                md: "34px",
              },
              fontWeight: 400,
              lineHeight: "37px",
              letterSpacing: "-0.005em",
              textAlign: "left",
            }}
          >
            Latest news & events
          </Typography>
          <Box
            display="block"
            mt={{
              xs: 0,
              sm: 2,
            }}
            sx={
              {
                // backgroundColor: '#458963'
              }
            }
          >
            <a
              href="/blog"
              style={{
                display: "inline-block",
                marginTop: "10px",
                borderBottom: "2px solid #9AABDB",
                textDecoration: "none",
              }}
            >
              <Typography
                variant="body"
                color="white"
                sx={{
                  fontFamily: "Lato",
                  fontSize: {
                    xs: "2rem",
                    md: "3rem",
                  },
                  fontWeight: 400,
                  lineHeight: "38px",
                  letterSpacing: " -0.005em",
                  textAlign: "left",
                  mb: 5,
                }}
              >
                See more resources{" "}
                <ArrowForwardIcon
                  sx={{
                    color: "#9AABDB",
                    fontSize: "inherit",
                    // fontSize: '3.2rem',
                    verticalAlign: "middle",
                  }}
                />
              </Typography>
            </a>
          </Box>
        </Box>
        <Grid container spacing={10}>
          {blogData.map((val, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={6}
              sx={{
                pt: "3rem !important",
                paddingBottom: "0rem !important",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  border: "none",
                  // backgroundColor: index === 1? '#152365': 'green',
                }}
              >
                <>
                  <Box
                    sx={{
                        width: '100%',
                        aspectRatio: 2 / 1,
                    }}
                  >
                    <Image
                      src={val.imageUrl}
                      alt="Blog Image"
                      width={400}
                      height={450}
                      style={{
                        width: "100%",
                        height: '100%',
                      }}
                    />
                  </Box>
                  <CardContent
                    sx={{
                      padding: "0 !important",
                    }}
                  >
                    <Typography
                      component="div"
                      marginTop={"25px"}
                      display={"inline-flex"}
                    >
                      <Button
                        variant="contained"
                        size="l"
                        sx={{
                          background:
                            "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)",
                          borderRadius: "25px",
                          marginRight: "2px",
                          "&:hover + #arrowBox": {
                            opacity: 1,
                            transform: "translateX(50%)",
                          },
                        }}
                      >
                        Read Article
                      </Button>
                      <Box
                        id="arrowBox"
                        sx={{
                          borderRadius: "25px",
                          color: "#9AABDB",
                          fontWeight: 100,
                          height: "44px",
                          width: "44px",
                          border: "2px solid #9AABDB",
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "26px",
                          opacity: 0,
                          transition: "transform 0.2s ease-in-out",
                        }}
                      >
                        &rarr;
                      </Box>
                    </Typography>
                    <Typography
                      color="#fff"
                      sx={{
                        fontFamily: "Lato",
                        fontSize: {
                          xs: "15px",
                          md: "24px",
                        },
                        fontWeight: 600,
                        lineHeight: "30px",
                        letterSpacing: "-0.005em",
                        textAlign: "left",
                        paddingTop: 2,
                      }}
                    >
                      {val.title}
                    </Typography>
                  </CardContent>
                </>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Blog;
