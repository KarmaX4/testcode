import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const ServicesBobble = ({ icon, text, sx }) => {
  const bounceAnimation = `
        @keyframes bounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-5px);
            }
        }
    `;

  return (
    <Box
      component="div"
      color="#fff"
      sx={{
        width: "94px",
        background: "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)",
        borderRadius: "100px 100px 0px",
        padding: "15px 17px",
        position: "absolute",
        textAlign: "center",
        animation: "bounce 2s infinite",
        ...sx,
      }}
    >
      <style>{bounceAnimation}</style>
      <Box
        component="div"
        sx={{
          height: "25px",
        }}
      >
        <Box
          sx={{
            height: "25px",
            aspectRatio: 1/1,
            margin: 'auto'
          }}
        >
          <Image
            src={icon}
            alt={text}
            height={1000}
            width={1000}
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      </Box>
      <Box
        component="div"
        fontFamily="Lato"
        sx={{
          textWrap: "nowrap",
        }}
      >
        {text}
      </Box>
    </Box>
  );
};

export default ServicesBobble;
