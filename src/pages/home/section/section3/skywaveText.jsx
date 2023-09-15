import React from "react";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

const SkywaveText = () => {
  const characters = ["s", "k", "y", "w", "a", "v", "e"];
  const images = characters.map((char) => `images/Skywave/${char}.svg`);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        mb: 10,
      }}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          // <React.Fragment key={index} sx={{ padding: "0" }}>
          <Box
            key={index}
            sx={{
              width: {
                md: "300px",
                xs: "110",
              },
              height: {
                md: "236px",
                xs: "90px",
              },
              objectFit: "revert",
            }}
          >
            {/* <Image
              src={image}
              alt={`Character ${characters[index]}`}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: "100%",
              }}
            /> */}
          </Box>
          // </React.Fragment>
        ))}
      </Slider>
    </Box>
  );
};

export default SkywaveText;
