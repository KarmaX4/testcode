import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import TextSplitter from "../Components/TextSplitter";

const SectionTitle = ({ title, subTitle }) => {
  const typographyStyle = {
    fontFamily: "Britannic Bold",
    fontSize: {
      xs: "40px",
      sm: "67px",
    },
    fontWeight: 400,
    letterSpacing: "1.7190937995910645px",
    textAlign: "center",
    color: "white",
    position: "relative",
    // whiteSpace: 'nowrap',
  };
  return (
    <Box
      position="relative"
      margin={{
        xs: "5rem auto 0rem",
        sm: "5rem auto",
      }}
      width="fit-content"
      sx={
        {
          // backgroundColor: 'red'
        }
      }
    >
      <Typography
        sx={{
          ...typographyStyle,
          lineHeight: { xs: "3rem", sm: "3.8rem" },
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          ...typographyStyle,
          backgroundImage:
            "linear-gradient(316deg, #ED6FCB 0.19%, #8372F2 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          lineHeight: {
            sm: '3rem',
            md: "5rem"
          },
          whiteSpace: 'pre-line'
        }}
      >
        <TextSplitter titleText={subTitle} count={24} />
      </Typography>
      <Box px="15%" mt={"12px"}>
        <Divider
          sx={{ color: "white", borderWidth: "2px", borderColor: "white" }}
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
          top: {
            xs: "0rem",
            sm: "0.7rem",
          },
          left: {
            xs: "-2rem",
            sm: "-6rem",
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
          bottom: "-1.2rem",
          right: {
            xs: "-1.6rem",
            sm: "-6rem",
          },
        }}
      />
    </Box>
  );
};

export default SectionTitle;
