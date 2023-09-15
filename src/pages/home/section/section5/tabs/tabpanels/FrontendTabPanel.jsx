import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const FrontendTabPanel = () => {
  const logos = Array.from(
    { length: 7 },
    (_, index) => `/images/icons/tabs/frontend/download (${index + 4}).svg`
  );

  return (
    <Grid
      container
      spacing={2}
      justifyContent={{
        xs: "flex-start",
        sm: "center",
      }}
    >
      {logos.map((logo, index) => (
        <Grid
          item
          padding="0 !important"
          key={index}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          xl={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "calc(100% / 3)",
            "@media (min-width: 700px)": {
              maxWidth: "calc(100% / 4)",
            },
            "@media (min-width: 960px)": {
              maxWidth: "calc(100% / 7)",
            },
          }}
        >
          <Box style={{ width: "65%", height: "85px" }}>
            <Image
              src={logo}
              alt={`Logo ${index}`}
              width={1000}
              height={1000}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FrontendTabPanel;
