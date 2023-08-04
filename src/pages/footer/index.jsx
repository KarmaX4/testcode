"use client"
import React from 'react';
import { Container, Box } from '@mui/material';

const blockTitleStyle = "font-bold text-2xl md:text-3xl lg:text-4xl text-white";
const contentStyle = "text-xs md:text-md lg:text-lg font-extralight leading-4 md:leading-5 lg:leading-6 text-white";

const FooterBlock = ({ title, items }) => {

  const titleFontSize = {
    fontSize: {
      xs: '1.5rem',
      md: '2rem'
    },
  }

  return (
    <div className={`col-span-1 ${contentStyle} content-block`}>
      <Box
        width='fit-content'
        margin={{
          xs: '15px 0',
          md: 'auto'
        }}
      >
      <div className="relative">
        <h6 className={`${blockTitleStyle} absolute`}
          style={{
            ...titleFontSize,
            margin: '13px 0px'
          }}
        >{title}</h6>
        <h6 className={`${blockTitleStyle}`}
          style={{
            ...titleFontSize,
            WebkitTextStroke: '2px #595959',
            margin: '0 0 40px 17px',
            color: 'transparent',
          }}
        >{title}</h6>
      </div>
      <div style={{
        fontSize: '.8rem',
        margin: '0'
      }}>
        {items.map((val, index) => (
          <p key={index}>{val}</p>
        ))}
      </div>
      </Box>
    </div>
  );
};

const socialMedia = [
  { icon: "Facebook", url: "https://www.facebook.com/your-facebook-page" },
  { icon: "Twitter", url: "https://twitter.com/your-twitter-profile" },
  { icon: "Instagram", url: "https://www.instagram.com/your-instagram-profile" },
  { icon: "Linkedin", url: "https://www.linkedin.com/in/your-linkedin-profile" },
  { icon: "Youtube", url: "https://www.youtube.com/in/your-linkedin-profile" }
];

const FooterSocial = () => {
  return (
    <Box
      width='auto'
      margin={{
        xs: 'initial',
        md: 'inherit'
      }}
    >
      <div className={`col-span-1 ${contentStyle} content-block w-[8rem]`}>
        <div className="relative">
          <h6 className={`${blockTitleStyle} absolute`}
            style={{
              fontSize: '2rem',
              margin: '13px 0px'
            }}
          >Social</h6>
          <h6 className={`${blockTitleStyle}`}
            style={{
              WebkitTextStroke: '2px #595959',
              margin: '0 0 40px 17px',
              fontSize: '2rem',
              color: 'transparent',
            }}
          >Social</h6>
        </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4 items-center place-items-center">
          {socialMedia.map((platform, index) => {
            return (
              <a key={index} href={platform.url}>
                <img src={`/icons/${platform.icon}.png`} alt="" />
              </a>
            );
          })}
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
        "Mobile App Development",
        "Web Application Development",
        "UI/UX Design Analysis",
        "SEO Services",
        "Odoo ERP Development",
        "Blockchain Development",
      ],
    },
    {
      title: "Solutions",
      items: [
        "GPS Tracking Solutions",
        "IOT Solutions",
        "Beacon Solutions",
        "On Demand Marketplace",
        "Catalogue Solutions",
        "Automotive and Logistics Solutions",
      ],
    },
    // {
    //   title: "Technologies",
    //   items: [
    //     "Android",
    //     "iOS",
    //     "Flutter",
    //     "Laravel",
    //     "YII",
    //     "Wordpress",
    //     "NodeJS",
    //     "Angular",
    //   ],
    // },
    {
      title: "Hire Resources",
      items: [
        "Hire Android App Developers",
        "Hire Remote Kotlin Developers",
        "Hire Dedicated iOS developers",
        "Hire Chatbot developers",
        "Hire WordPress developers",
        "Hire Alexa Skills Developers",
        "Hire PHP developers",
        "Hire Laravel Developers",
        "Hire Java Developers",
      ],
    },
    {
      title: "About Us",
      items: [
        "Company Overview",
        "Our Team",
        "Mission and Vision",
        "Values and Culture",
        "Client Testimonials",
      ],
    },
  ];

  return (
    <>
      <div style={{ background: "#05011C", }}>
        <Container
          maxWidth={false}
          sx={{
            width: {
              xs: '100%',
              md: "88.2rem !important"
            },
            margin: "auto",
            background: "#05011C",
          }}
        >
          <Box className="pb-[3rem] mx-auto grid md:grid-cols-4 lg:grid-cols-5 gap-2 gap-y-0"
            sx={{
              paddingTop: {
                xs: '22.5rem',
                md: '10rem'
              }
            }}
          >
            {footerDetails.map((block, index) => (
              <FooterBlock key={index} title={block.title} items={block.items} />
            ))}
            <FooterSocial />
            <Box
              mt='3rem'
              sx={{
                display: 'flex',
                height: {
                  xs: '3.5rem',
                  md: '4rem'
                },
                gap: '2rem',
              }}
            >
              <img src='/icons/Footer/footer1.svg' alt='footer1' />
              <img src='/icons/Footer/footer2.svg' alt='footer2' />
              <img src='/icons/Footer/footer3.svg' alt='footer3' />
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Footer;
