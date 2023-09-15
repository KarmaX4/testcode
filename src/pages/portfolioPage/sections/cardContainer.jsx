"use client";
import React, { useState } from "react";
import PortFolioCard from "./Cards";
import { Box, Container, Grid, Typography } from "@mui/material";
import cardData from "./cardData.json";
import Topbar from "./topbar";

const CardContainer = () => {
  const [selectedItem, setSelectedItem] = useState("Mobile Apps");

  const handleDataSelected = (data) => {
    setSelectedItem(data);
  };

  const filteredData = cardData[selectedItem] || [];

  return (
    <>
      <Topbar onDataSelected={handleDataSelected} />
      <Container
        maxWidth={false}
        sx={{ width: "90vw", mb: "12rem", mt: "5rem" }}
      >
        <Box>
          <Typography
            mb={10}
            sx={{
              fontFamily: "Britannic Bold",
              fontSize: {
                xs: '50px',
                md: "79px"
              },
              fontWeight: 400,
              lineHeight: {
                xs: '50px',
                md: "65px"
              },
              letterSpacing: "2px",
              textAlign: "center",
              color: "#FFF",
            }}
          >
            {selectedItem}
          </Typography>
        </Box>
        <Grid container spacing={5}>
          {filteredData.map((val, index) => (
            <Grid key={index} item xs={12} md={6}>
              <PortFolioCard
                imageUrl={`/images/portfolio/${selectedItem}/${val.title}.svg`}
                blogUrl={val.blogUrl}
                title={val.title}
                description={val.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CardContainer;
