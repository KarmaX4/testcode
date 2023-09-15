import React from "react";
import SectionTitle from "./sectionTitle";
import { Box, Container, Typography } from "@mui/material";
import WhyDevComponent from "../Components/WhyDev.Component";
// import WhyHireDevelopersData from "./data/WhyHireDevelopersData.json";

const HireS5 = ({ data }) => {

  return (
    <Container
      maxWidth={false}
      sx={{
        width: "88vw",
        padding: "0 !important",
        mt: 20,
      }}
    >
      <SectionTitle title={data?.title} subTitle={data?.subTitle} />
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
      {
       data?.card?.map((val, index)=>(
          <WhyDevComponent key={index} title={val?.title} desc={val?.description} index={index}/>
        ))
      }
    </Container>
  );
};

export default HireS5;
