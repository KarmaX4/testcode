import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import Image from "next/image";

const ProcessesIcon = ({ num }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 !important",
        m: num % 2 === 0 ? "0 2rem 0rem 0" : "0 0rem 0rem 2rem",
      }}
      order={num % 2 === 0 ? 1 : 2}
    >
      <Typography
        component="div"
        sx={{
          border: "3px solid #fff",
          width: "5rem",
          height: "5rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          height={45}
          sx={{
            width: "inherit !important",
          }}
        >
          <Image
            src={`/images/icons/ProcessIcon/Group${num + 1}.svg`}
            alt={`ProcessIcon${num}`}
            width={1000}
            height={1000}
            style={{
                width: '100%',
                height: '100%'
            }}
          />
        </Box>
      </Typography>
    </Box>
  );
};

export default ProcessesIcon;
