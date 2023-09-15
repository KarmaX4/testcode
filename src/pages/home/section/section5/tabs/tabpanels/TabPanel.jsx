import React from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

const TabPanel = ({ tab, count }) => {
  const logos = Array.from(
    { length: count },
    (_, index) => `/images/icons/tabs/${tab}/download (${index + 1}).svg`
  );

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ display: "flex", flexWrap: "wrap" }}
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
            maxWidth: "calc(100% / 3)", // Show 3 items per row on mobile
            "@media (min-width: 960px)": {
              maxWidth: "calc(100% / 7)", // Show 7 items per row on larger screens
            },
          }}
        >
          <Box style={{ width: "65%", height: "85px" }}>
            <Image src={logo} alt={`Logo ${index}`} 
              width={1000}
              height={1000}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TabPanel;
