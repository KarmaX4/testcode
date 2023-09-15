"use client";
import React from "react";
import { Container, Box, Link, Typography } from "@mui/material";
import Image from "next/image";

const blockTitleStyle = "font-bold text-2xl md:text-3xl lg:text-4xl text-white";
const contentStyle =
  "text-xs md:text-md lg:text-lg font-extralight leading-4 md:leading-5 lg:leading-6 text-white";

const footerLinks = [
  {
    src: "/images/icons/Footer/footer1.svg",
    alt: "footer1",
    link: "https://clutch.co/profile/skywave-info-solutions?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo&utm_term=www.skywaveinfosolutions.com",
  },
  {
    src: "/images/icons/Footer/footer2.svg",
    alt: "footer2",
    link: "https://clutch.co/press-releases/awards-india-app-dev-2022",
  },
  {
    src: "/images/icons/Footer/footer3.svg",
    alt: "footer3",
    link: "https://bcert.me/bc/html/show-badge.html?b=uekfuol",
  },
];

const bTitleStyles = {
  fontWeight: "bold",
  fontSize: {
    xs: "2rem",
    md: "2.25rem",
    lg: "2.5rem",
  },
  color: "white",
};

const cStyle = {
  fontSize: {
    xs: "0.75rem",
    md: "1rem",
    lg: "1.125rem",
  },
  fontWeight: "light",
  lineHeight: {
    xs: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
  },
  color: "white",
};

const titleFontSize = {
  fontSize: {
    xs: "1.5rem",
    md: "2rem",
  },
  fontFamily: "Britannic Bold",
};
const FooterBlock = ({ title, items }) => {
  return (
    <Box
      className={`col-span-1 ${contentStyle} content-block`}
      sx={{
        marginInline: "0",
        justifySelf: "left",
      }}
    >
      <Box
        width="fit-content"
        margin={{
          xs: "15px 0",
          md: "auto",
        }}
      >
        <Box position="relative">
          <Typography
            variant="h6"
            sx={{
              ...bTitleStyles,
              ...titleFontSize,
              textShadow: "-4px 4px 0px white",
              color: "#ffffff00",
              WebkitTextStroke: "2px",
              strokeWidth: "1px",
              WebkitTextStrokeColor: "#ffffff20",
            }}
          >
            {title}
          </Typography>
        </Box>
        <div
          style={{
            fontSize: "0.8rem",
            margin: "0",
          }}
        >
          {items.map((val, index) => (
            <Link key={index} href={val.path} underline="none" color="#fff">
              {val.title}
              <br />
            </Link>
          ))}
        </div>
      </Box>
    </Box>
  );
};

const socialMedia = [
  {
    icon: "NewFacebook",
    url: "https://www.facebook.com/SkywaveInfoSolutions/",
  },
  {
    icon: "NewInstagram",
    url: "https://www.instagram.com/skywave_infosolutions/",
  },
  { icon: "NewTwitter", url: "https://twitter.com/SkywavePvt" },
  {
    icon: "NewYoutubeY",
    url: "https://www.youtube.com/@skywaveinfosolutionspvtltd7949",
  },
  {
    icon: "NewDribble",
    url: "https://www.youtube.com/@skywaveinfosolutionspvtltd7949",
  },
  {
    icon: "NewBehanceB",
    url: "https://www.youtube.com/@skywaveinfosolutionspvtltd7949",
  },
  {
    icon: "NewLinkdIn",
    url: "https://in.linkedin.com/company/skywave-infotech",
  },
];

const FooterSocial = () => {
  return (
    <Box
      width={{
        xs: "80vw",
        md: "-webkit-fill-available",
      }}
      margin={{
        xs: "auto",
        md: "inherit",
      }}
      sx={{
        justifySelf: "left",
      }}
    >
      <div className={`col-span-1 ${contentStyle} content-block w-[8rem]`}>
        <div>
          <h6
            className={`${blockTitleStyle}`}
            style={{
              ...bTitleStyles,
              ...titleFontSize,
              textShadow: "-4px 4px 0px white",
              color: "#ffffff00",
              WebkitTextStroke: "2px",
              strokeWidth: "1px",
              WebkitTextStrokeColor: "#ffffff20",
              marginBottom: "1.5rem",
            }}
          >
            Social
          </h6>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4 items-center place-items-center">
          {socialMedia.map((platform, index) => (
            <Box
              key={index}
              href={platform.url}
              sx={{
                width: "2rem",
                height: "2rem",
              }}
            >
              <Image
                key={index}
                width={1000}
                height={1000}
                src={`/images/icons/${platform.icon}.png`}
                alt={platform.icon}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          ))}
        </div>
      </div>
    </Box>
  );
};

const Footer = () => {
  const footerDetails = [
    {
      title: "Services",
      items: [
        {
          title: "Mobile App Development",
          path: "/service/mobile-apps",
        },
        {
          title: "Web Application Development",
          path: "/service/websites",
        },
        {
          title: "UI/UX Design Analysis",
          path: "/service/ui-ux-design-analysis",
        },
        {
          title: "SEO Services",
          path: "/service/seo-services",
        },
        {
          title: "Odoo ERP Development",
          path: "/service/odoo-erp",
        },
        {
          title: "Blockchain Development",
          path: "/service/blockchain",
        },
      ],
    },
    {
      title: "Solutions",
      items: [
        {
          title: "GPS Tracking Solutions",
          path: "/solutions/gps-tracking-solutions",
        },
        {
          title: "IOT Solutions",
          path: "/solutions/iot-solutions",
        },
        {
          title: "Beacon Solutions",
          path: "/solutions/beacon-solutions",
        },
        {
          title: "On Demand Marketplace",
          path: "/solutions/on-demand-marketplace",
        },
        {
          title: "Catalogue Solutions",
          path: "/solutions/catalogue-solutions",
        },
        {
          title: "Automotive and Logistics Solutions",
          path: "/solutions/automotive-and-logistics-solutions",
        },
        {
          title: "Lifestyle and Hospitality",
          path: "/solutions/lifestyle-and-hospitality-solutions",
        },
        {
          title: "Integrated Chatbot",
          path: "/solutions/integrated-chatbot-solutions",
        },
        {
          title: "Voice Enabled",
          path: "/solutions/voice-enabled-solutions",
        },
        {
          title: "Healthcare Solutions",
          path: "/solutions/healthcare-solutions",
        },
      ],
    },
    {
      title: "Hire Resources",
      items: [
        {
          title: "Hire Android App Developers",
          path: "/hire-android-app-developers",
        },
        {
          title: "Hire Remote Kotlin Developers",
          path: "/hire-remote-kotlin-developers",
        },
        {
          title: "Hire Dedicated iOS developers",
          path: "/hire-dedicated-ios-developers",
        },
        {
          title: "Hire Chatbot developers",
          path: "/hire-chatbot-developers",
        },
        {
          title: "Hire WordPress developers",
          path: "/hire-wordpress-developers",
        },
        {
          title: "Hire Alexa Skills Developers",
          path: "/hire-alexa-skills-developers",
        },
        {
          title: "Hire PHP developers",
          path: "/hire-php-developers",
        },
        {
          title: "Hire Laravel Developers",
          path: "/hire-laravel-developers",
        },
        {
          title: "Hire Java Developers",
          path: "/hire-java-developers",
        },
      ],
    },
    {
      title: "Know Us",
      items: [
        {
          title: "Testimonials",
          path: "/testimonials",
        },
        {
          title: "Careers",
          path: "/career",
        },
        {
          title: "Privacy Policy",
          path: "/privacy-policy",
        },
        {
          title: "Terms and Conditions",
          path: "/terms-and-conditions",
        },
        {
          title: "Disclaimer",
          path: "/disclaimer",
        },
        {
          title: "Blog",
          path: "/blog",
        },
      ],
    },
  ];

  return (
    <Box sx={{ background: "#05011C" }}>
      <Container
        maxWidth={false}
        sx={{
          margin: "auto",
          background: "#05011C",
          padding: "0 !important",
          width: {
            xs: "80vw",
            md: "90vw",
          },
        }}
      >
        <Box
          className="pb-[3rem] mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-2 gap-y-0"
          sx={{
            paddingTop: {
              xs: "15rem",
              md: "10rem",
            },
          }}
        >
          {footerDetails.map((block, index) => (
            <FooterBlock key={index} title={block.title} items={block.items} />
          ))}
          <FooterSocial />
          <Box
            mt="3rem"
            sx={{
              display: "flex",
              height: {
                xs: "2.5rem",
                md: "4rem",
              },
              gap: "2rem",
            }}
            ml={{
              xs: "10vw",
              md: "0",
            }}
          >
            {footerLinks.map((link, index) => (
              <Image
                key={index}
                component={"img"}
                width={500}
                height={500}
                src={`/images/icons/Footer/footer${index + 1}.svg`}
                alt={link.alt}
                style={{
                  cursor: "pointer",
                  width: "100%",
                  height: "100%",
                }}
                onClick={() => window.open(link.link, "_blank")}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
