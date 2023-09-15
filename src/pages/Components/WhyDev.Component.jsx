import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const WhyDevComponent = ({ title, desc, index }) => {
  return (
    <Grid
      container
      justifyContent={"center"}
      textAlign={"center"}
      alignItems={"center"}
      my={10}
    >
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        justifyContent="center"
        order={index % 2 ? 2 : 1}
      >
        <Box
          width="60%"
          borderRadius="50%"
          p={5}
          sx={{
            backgroundImage: `url('https://source.unsplash.com/random/?${title}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            aspectRatio: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontFamily={"Britannic Bold"}
            fontSize={"64px"}
            fontWeight={400}
            lineHeight={"64px"}
            letterSpacing={"1.4351332187652588px"}
            sx={{
              textShadow: "-4px 4px 0px white",
              color: "#ffffff00",
              WebkitTextStroke: "2px",
              strokeWidth: "1px",
              WebkitTextStrokeColor: "#ffffffa3",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} textAlign={"left"} order={index % 2 ? 1 : 2}>
        <Typography
          fontFamily={"Britannic Bold"}
          fontSize={"36px"}
          fontWeight={400}
          lineHeight={"4rem"}
          letterSpacing={"1.4351332187652588px"}
          color="#fff"
        >
          {title}
        </Typography>
        <Typography
          fontFamily={"Lato"}
          fontSize={"20px"}
          fontWeight={700}
          lineHeight={"29px"}
          letterSpacing={"0.08em"}
          color="#fff"
        >
          {desc}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default WhyDevComponent;
