import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  ListItemText,
  ListItem,
  List,
} from "@mui/material";
import React from "react";
import TextSplitter from "./TextSplitter";

const typographyStyle = {
  fontFamily: "Britannic Bold",
  fontSize: {
    xs: "28px",
    sm: "45px",
    md: "67px",
  },
  fontWeight: 400,
  lineHeight: {
    xs: "35px",
    sm: "48px",
    md: "3.8rem",
  },
  letterSpacing: {
    xs: "0.8622281551361084px",
    sm: "1.7190937995910645px",
  },
  textAlign: "center",
  color: "white",
  position: "relative",
  whiteSpace: "pre",
};

const typographyStyleGrid = {
  fontFamily: "Britannic Bold",
  // whiteSpace: 'pre-line',
  fontSize: {
    xs: "21px",
    md: "33px",
  },
  lineHeight: {
    xs: "21px",
    md: "45px",
  },
  textAlign: "left",
  color: "white",
};

const typographyStyle2 = {
  whiteSpace: "pre-line",
  fontFamily: "Lato",
  fontSize: {
    xs: "12px",
    md: "14px",
  },
  fontWeight: 700,
  lineHeight: {
    xs: "17px",
    md: "21px",
  },
  letterSpacing: "0.08em",
  color: "#C3C3C3",
};

const ListStyle = {
  fontFamily: "Lato",
  fontSize: {
    xs: "12px",
    md: "12px",
  },
  textAlign: "left",
  color: "#C3C3C3",
  // marginLeft: '1rem',
  listStyle: {
    xs: "",
    md: 'url("/images/icons/listIcon.svg")',
  },
  lineHeight: {
    xs: "1rem",
    md: "1.5rem",
  },
};

const ShowCase = ({ data, index = 0, totalSections, mob = false }) => {
  const isLastSection = index === totalSections - 1;
  const isFisrstSection = index === 0;
  const isOddSection = index % 2 === 0;

  return (
    <Container
      maxWidth={false}
      sx={{
        width: {
          xs: "80vw",
          sm: "80vw",
          md: "90vw",
        },
        padding: "0 !important",
        marginBottom: {
          xs: isLastSection ? 38 : 0,
          sm: isLastSection ? 40 : 0,
          md: isLastSection ? 25 : 0,
        },
        marginTop: isFisrstSection ? "-4.5rem" : 0,
      }}
    >
      <Grid container my={5}>
        <Grid
          item
          xs={12}
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100vw",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              margin: "0 !important",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {isOddSection ? (
              <Box
                component="img"
                src="/images/HoloCircle.svg"
                alt="HoloCircle"
                sx={{
                  position: "absolute",
                  height: "fit-content",
                  top: "50%",
                  left: "0%",
                  translate: "-50% -50%",
                  width: {
                    xs: "5rem",
                    sm: "8rem",
                  },
                }}
              />
            ) : (
              <Box
                component="img"
                src="/images/HoloCirclefilled.svg"
                alt="HoloCirclefilled"
                sx={{
                  position: "absolute",
                  height: "fit-content",
                  top: "50%",
                  right: "0%",
                  translate: "50% -50%",
                  width: {
                    xs: "5rem",
                    sm: "8rem",
                  },
                }}
              />
            )}
            <Box
              position="relative"
              margin={{
                xs: "1rem auto 0rem",
                sm: "6rem auto",
                md: "auto",
              }}
              width={{
                xs: "min-content !important",
                sm: "fit-content",
              }}
              sx={{}}
            >
              <Typography
                sx={{
                  ...typographyStyle,
                }}
              >
                <TextSplitter titleText={data?.title} count={18} />
              </Typography>
              <Typography
                sx={{
                  ...typographyStyle,
                  backgroundImage:
                    "linear-gradient(316deg, #ED6FCB 0.19%, #8372F2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  pb: "0.5rem",
                }}
              >
                {/* {data?.subTitle} */}
                <TextSplitter titleText={data?.subTitle} count={16} />
              </Typography>
              <Box px="15%" mt={"5px"}>
                <Divider
                  sx={{
                    color: "white",
                    borderWidth: "2px",
                    borderColor: "white",
                  }}
                />
              </Box>
              <Box
                component="img"
                src="/Background/Fly/fly3.svg"
                alt="fly3"
                height={{
                  xs: "30%",
                  sm: "40%",
                }}
                sx={{
                  position: "absolute",
                  width: {
                    xs: "1rem",
                    sm: "2rem",
                    // md: '3rem'
                  },
                  top: {
                    xs: "0rem",
                    sm: "0.7rem",
                  },
                  left: {
                    // xs: '0',
                    xs: "-1rem",
                    sm: "-2rem",
                    md: "-6rem",
                  },
                  filter: "drop-shadow(10px 10px 1px #ffffff63)",
                }}
              />
              <Box
                component="img"
                src="/Background/Fly/fly2.svg"
                alt="fly2"
                sx={{
                  position: "absolute",
                  transform: "rotate(53deg)",
                  bottom: "-0.2rem",
                  width: {
                    xs: "1rem",
                    sm: "2rem",
                    // md: '3rem'
                  },
                  right: {
                    // xs: '0',
                    xs: "-1rem",
                    sm: "-2rem",
                    md: "-3rem",
                  },
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            sx={{
              gap: {
                xs: "2rem",
                sm: "0rem",
              },
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              order={{
                xs: 2,
                sm: isOddSection ? 1 : 2,
              }}
              sx={{
                height: {
                  xs: "inherit",
                  sm: "fit-content",
                  md: "80vh",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              {data?.description && (
                <Typography sx={typographyStyleGrid}>
                  {data?.description}
                </Typography>
              )}
              {data?.subdescription && (
                <Typography sx={typographyStyle2}>
                  {data?.subdescription}
                </Typography>
              )}

              {data?.listData && (
                <Box sx={ListStyle}>
                  {/* <ul>
                    {data?.listData?.sort().map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul> */}
                  <List>
                    {data?.listData?.sort().map((item, itemIndex) => (
                      <ListItem
                        key={itemIndex}
                        sx={{
                          padding: "0",
                        }}
                      >
                        {/* <FiberManualRecordIcon
                          sx={{
                            height: '1rem',
                            background: 'linear-gradient(316deg, #ED6FCB 0.19%, #8372F2 100%)',
                          }}
                        /> */}
                        <Box
                          component={"img"}
                          src="/images/icons/listIcon.svg"
                          mr="5px"
                        />
                        {item}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              order={{
                xs: 1,
                sm: isOddSection ? 2 : 1,
              }}
              // ml={isOddSection?'30px':'40px'}
              sx={{
                height: {
                  xs: "18rem",
                  sm: "initial",
                  md: "80vh",
                },
                display: "flex",
                justifyContent: {
                  xs: isOddSection ? "right" : "left",
                },
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "50%",
                  aspectRatio: "1/1",
                  border: "2px solid #fff",
                  borderRadius: "20px",
                  position: "relative",
                  rotate: "10.45deg",
                  right: isOddSection ? "80px" : "-80px",
                  left: isOddSection ? "-80px" : "80px",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    aspectRatio: "1/1",
                    background:
                      "linear-gradient(316deg, #ED6FCB 0.19%, #8372F2 100%)",
                    top: "5%",
                    left: "6%",
                    borderRadius: "20px",
                  }}
                />
                <Box
                  component={"img"}
                  src={`/Background/Fly/fly${isOddSection ? 3 : 1}.svg`}
                  sx={{
                    width: {
                      xs: "1.5rem",
                      md: "2rem",
                    },
                    position: "absolute",
                    bottom: {
                      xs: "-3rem",
                      sm: `-6rem`,
                    },
                    left: {
                      xs: `-1rem`,
                      sm: `-2rem`,
                    },
                    filter: "drop-shadow(8px 7px 1px  #ffffff63)",
                  }}
                />
                <Box
                  component={"img"}
                  src={`/Background/Fly/fly${isOddSection ? 1 : 3}.svg`}
                  sx={{
                    width: {
                      xs: "1.5rem",
                    },
                    position: "absolute",
                    transform: "rotate(53deg)",
                    top: {
                      xs: "-3rem",
                      sm: "-6rem",
                    },
                    right: {
                      xs: "-1rem",
                      sm: `-2rem`,
                    },
                    filter: "drop-shadow(8px 7px 1px  #ffffff63)",
                  }}
                />
                <Box
                  component={"img"}
                  src={data?.imageSrc}
                  alt="mobile"
                  zIndex={1}
                  sx={{
                    rotate: `${mob ? "324" : "342"}deg`,
                    position: "absolute",
                    width: mob ? "150%" : "145%",
                    aspectRatio: "1/1",
                    left: mob ? "-21%" : "-25%",
                    top: mob ? "-13%" : "-20%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShowCase;
