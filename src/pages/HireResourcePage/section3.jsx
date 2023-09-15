import React, { useState } from "react";
import SectionTitle from "./sectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import StaffingData from "./data/StaffingData.json";

const listStyle = {
  fontFamily: "Britannic Bold",
  fontSize: "29px",
  fontWeight: 400,
  lineHeight: "41px",
  letterSpacing: "2.935133218765259px",
  textAlign: "left",
  color: "#fff",
  whiteSpace: "pre-line",
};

const HireS3 = ({ data }) => {
  const [activeId, setActiveId] = useState('Onsite Staffing');
  
  const handleClick = (id) => {
    setActiveId(id);
   

  };

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "88vw",
        padding: "0 !important",
        mt: 20,
      }}
    >
      {data && <SectionTitle title={data?.title} subTitle={data?.subTitle} />}
      <Box mb={10}>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "29px",
            letterSpacing: "0.08em",
            color: "#C3C3C3",
          }}
        >
          {data?.description}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {data?.list?.map((item, index) => (
          <Grid item key={index} xs={12} sm={6}>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              gap={2}
              pl={"22%"}
            >
              <Box
                component="img"
                src={"/images/icons/hireresources/checkMark.svg"}
                alt={item}
                height={"8vh"}
                width={"4vw"}
              />
              <Typography sx={listStyle}>{item}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container mb={20}>
        <Grid item xs={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: {
                xs: "80%",
                md: "60%",
              },
            }}
          >
            {StaffingData?.map((val, index) => (
              <StaffingRect
                key={index}
                text={val?.title}
                id="A"
                isActive={activeId === val?.title}
                color={activeId}
                handleClick={() => handleClick(val?.title)}
              />
            ))}
          </Box>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"center"}>
          {StaffingData?.map(
            (val, index) =>
              val.title === activeId && (
                <Box
                  key={index}
                  p={"2rem 4rem 3rem 2rem"}
                  borderRadius={"10px"}
                  position={"relative"}
                  sx={{
                    background: activeId
                      ? "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)"
                      : "#fff",
                    boxShadow:
                      "-7px 8px 5.743589878082275px 0px #00000040 inset",
                    color: "#fff",
                  }}
                >
                  <Box display={"flex"} flexDirection={'column'} gap={3}>
                  <Typography
                    fontFamily={"Britannic Bold"}
                    fontSize={"50px"}
                    fontWeight={400}
                    lineHeight="50px"
                    letterSpacing="2.935133218765259px"
                    color={"#FFFFFF"}
                  >
                    {val?.title}
                  </Typography>
                  <Typography
                    fontFamily={"Lato"}
                    fontSize={"20px"}
                    fontWeight={700}
                    lineHeight={"29px"}
                    letterSpacing={"0.08em"}
                    color={"#fff"}
                  >
                    {val?.desc}
                  </Typography>
                  </Box>
                </Box>
              )
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default HireS3;

const StaffingRect = ({ text, id, isActive, color, handleClick }) => (
  <Typography
    fontFamily={"Britannic Bold"}
    fontSize={"28px"}
    fontWeight={400}
    lineHeight="41px"
    letterSpacing="2.935133218765259px"
    color={"#FFFFFF"}
    borderRadius={"10px"}
    sx={{
      background: isActive
        ? "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)"
        : "#2B2B2B",
      p: 5,
      boxShadow: "-7px 8px 5.743589878082275px 0px #00000040 inset",
      "&:hover": {
        background: isActive
          ? "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)"
          : "#2B2B2B99",
      },
    }}
    onClick={handleClick}
    position={"relative"}
    p={"2rem 4rem 3rem 2rem"}
  >
    {text}
  </Typography>
);
