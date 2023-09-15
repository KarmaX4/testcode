/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  Drawer,
  Toolbar,
  Typography,
  Avatar,
} from "@mui/material";
import serviceNavData from "./servicesNav.json";
import solutionsNavData from "./solutionsNav.json";

import ServiceMenu from "./serviceMenu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const navItems = [
  "Home",
  "About",
  "Services",
  "Solutions",
  "Portfolio",
  "Blog",
  "Contact",
];
const mobileItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/service",
    subMenu: serviceNavData,
  },
  {
    title: "Solutions",
    path: "/solutions",
    subMenu: solutionsNavData,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  const [showBackground, setShowBackground] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleNavItems, setVisibleNavItems] = useState(navItems);
  const [activeTab, setActiveTab] = useState(pathname.split("/")[1]);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [subMenuIndex, setSubMenuIndex] = useState(0);
  const [hoveredItems, setHoveredItems] = useState({});

  // const handleResize = () => {
  //   setIsMobileScreen(window.innerWidth < 1000);
  //   setIsMobileScreenDrawer(window.innerWidth < 700);
  // };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackground(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setVisibleNavItems(navItems);
  }, []);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavItemClick = (item) => {
    setActiveTab(item);
    handleMobileMenuClose();
  };
  let leaveTimeouts = {};

  const handleHover = (item) => {
    clearTimeout(leaveTimeouts[item]);
    setHoveredItems((prevState) => ({ ...prevState, [item]: true }));
  };

  const handleHoverEnd = (item) => {
    leaveTimeouts[item] = setTimeout(() => {
      setHoveredItems((prevState) => ({ ...prevState, [item]: false }));
    }, 50);
  };

  const handleSubMenuToggle = (subItems) => {
    setIsSubMenuOpen(!isSubMenuOpen);
    setActiveSubMenu(subItems);
    setSubMenuIndex(0);
  };

  useEffect(() => {
    if (isSubMenuOpen && activeSubMenu) {
      const timer = setInterval(() => {
        setSubMenuIndex((prevIndex) => {
          if (
            prevIndex <
            mobileItems.find((item) => item.title === activeSubMenu).subMenu
              .length -
              1
          ) {
            return prevIndex + 1;
          } else {
            clearInterval(timer);
            return prevIndex;
          }
        });
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isSubMenuOpen, activeSubMenu]);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          width: {
            xs: "80vw",
            sm: "85vw",
            md: "90vw",
          },
        }}
      >
        <AppBar
          sx={{
            backgroundColor: showBackground ? "#00000099" : "transparent",
            border: "none",
            boxShadow: "none",
            backdropFilter: "blur(5px)",
          }}
        >
          <Toolbar
            sx={{
              padding: "0 !important",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "0.8rem auto",
              transition: "margin 0.5s ease-in-out",
              width: {
                xs: "80vw",
                md: "90vw",
              },
            }}
          >
            <Link href="https://www.skywaveinfosolutions.com/" underline="none">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: '3rem'
                }}
              >
                <Image
                  width={1000}
                  height={1100}
                  src="/Logo/SkywaveLogo.png"
                  alt="Logo"
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                />
              </Box>
            </Link>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="#FFFFFF"
                aria-label="menu"
                onClick={handleMobileMenuOpen}
                sx={{
                  color: "#fff",
                  fontSize: "3rem",
                  transition: "color 0.5s ease-in-out",
                }}
              >
                {/* <MenuIcon /> */}
                <Box
                  component={"img"}
                  src="/images/icons/Menu Sort.svg"
                  alt="Menu Icon"
                  position={"fixed"}
                />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: ".6rem",
              }}
            >
              {visibleNavItems.map((item) => (
                <Link
                  key={item}
                  href={
                    item.toLowerCase().trim() === "home"
                      ? "/"
                      : item.toLowerCase().trim() === "services"
                      ? "/service"
                      : `/${item.split(" ").join("").toLowerCase()}`
                  }
                  underline="none"
                  sx={{
                    color: "#FFFFFF",
                    // fontSize: '2.5vh',
                    fontSize: {
                      xs: 10,
                      sm: 14,
                      md: 18,
                    },
                    padding: ".5rem 1rem",
                    borderRadius: "2rem",
                    lineHeight: "normal",
                    background: "none",
                    fontFamily: "Lato",
                    transition:
                      "background 0.5s ease-in-out, color 0.5s ease-in-out",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #8372F2 0%, #ED6FCB 100%)",
                      color: "#fff",
                    },
                    ...(activeTab === item.toLowerCase().trim() ||
                    (activeTab === "service" &&
                      item.toLowerCase().trim() === "services")
                      ? {
                          background:
                            "linear-gradient(135deg, #8372F2 0%, #ED6FCB 100%)",
                          color: "#fff",
                        }
                      : {}),
                    ...(hoveredItems[item]
                      ? {
                          background:
                            "linear-gradient(135deg, #8372F2 0%, #ED6FCB 100%)",
                          color: "#fff",
                        }
                      : {}),
                    ...(item.toLowerCase().trim() === "services" ||
                    item.toLowerCase().trim() === "solutions"
                      ? {
                          "&:after": {
                            content: '"\\203A"',
                            fontWeight: 800,
                            marginLeft: "5px",
                          },
                        }
                      : {}),
                  }}
                  onMouseEnter={() => handleHover(item)}
                  onMouseLeave={() => handleHoverEnd(item)}
                  onClick={() => handleNavItemClick(item)}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="top"
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
          sx={{
            "& .MuiDrawer-paper": {
              width: { xs: "100vw", sm: "100vw", md: "50vw" },
              background: "#000",
            },
            "::-webkit-scrollbar": {
              display: "none",
              height: "0rem",
              width: "0rem",
            },
          }}
        >
          <List
            sx={{
              margin: "1rem 2.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Link
                href="https://www.skywaveinfosolutions.com/"
                underline="none"
              >
                <Box
                  sx={{
                    textAlign: "center",
                    width: "10rem",
                  }}
                  component="img"
                  src="/Logo/Icon + name.svg"
                  alt="Logo"
                />
              </Link>
              <IconButton
                aria-label="Sub Menu"
                width="4.5rem"
                onClick={handleMobileMenuClose}
              >
                <CloseIcon
                  sx={{
                    rotate: "90deg",
                    color: "white",
                    transition: "rotate 150ms ease-in-out",
                  }}
                />
              </IconButton>
            </Box>
            {mobileItems?.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  // onClick={handleMobileMenuClose}
                  onClick={
                    item?.title.toLowerCase().trim() === "services" ||
                    item?.title.toLowerCase().trim() === "solutions"
                      ? null
                      : handleMobileMenuClose
                  }
                  sx={{
                    textAlign: "center",
                    padding: "0rem !important",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    href={item?.path}
                    underline="none"
                    sx={{
                      color: "#fff",
                      fontSize: 18,
                      fontFamily: "Lato",
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                    background="antiquewhite"
                    width="inherit"
                    padding="1rem 0rem"
                  >
                    {item?.title}
                  </Link>
                  {item?.subMenu?.length > 0 && (
                    <IconButton
                      aria-label="Sub Menu"
                      width="4.5rem"
                      onClick={() => handleSubMenuToggle(item?.title.trim())}
                    >
                      <ArrowForwardIosIcon
                        sx={{
                          rotate:
                            isSubMenuOpen &&
                            item.subMenu &&
                            activeSubMenu == item?.title.trim()
                              ? "90deg"
                              : "0deg",
                          color: "white",
                          transition: "rotate 150ms ease-in-out",
                        }}
                      />
                    </IconButton>
                  )}
                </ListItem>
                {isSubMenuOpen &&
                  item?.subMenu &&
                  activeSubMenu == item?.title.trim() && (
                    <>
                      {item?.subMenu.map((subItem, index) => (
                        <ListItem
                          key={index}
                          onClick={handleMobileMenuClose}
                          sx={{
                            padding: "0 !important",
                            textAlign: "center",
                            // background: 'linear-gradient(135deg, #8372F2 0%, #ED6FCB 100%)',
                            // transition: 'opacity 0.5s ease-in-out',
                            // opacity: index <= subMenuIndex ? 1 : 0,
                            // display: index <= subMenuIndex ? 'block' : 'none',
                            // transition: 'display 0.5s ease-in-out',
                          }}
                        >
                          <Link
                            href={subItem?.link}
                            underline="none"
                            sx={{
                              color: "#000",
                              fontSize: 10,
                              fontFamily: "Lato",
                              display: "flex",
                              gap: "1rem",
                              alignItems: "center",
                              background: "#2c2c2c",
                              width: "100%",
                              padding: "0.7rem 1.4rem",
                            }}
                          >
                            <Box
                              display="flex"
                              flexDirection="row"
                              alignItems="center"
                            >
                              <Avatar
                                className="avatar-icon"
                                sx={{
                                  background:
                                    "linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)",
                                  p: 1,
                                  height: "2rem",
                                  width: "2rem",
                                }}
                                src={
                                  subItem?.iconUrl
                                    ? subItem?.iconUrl
                                    : `/images/icons/Solutions/${subItem?.title}.svg`
                                }
                                alt={`Icon ${index + 1}`}
                              />
                              <Box ml={1.25}>
                                <Typography
                                  variant="h6"
                                  className="title-text"
                                  sx={{
                                    fontFamily: "Lato",
                                    fontSize: "10px",
                                    fontWeight: 700,
                                    lineHeight: "18px",
                                    textAlign: "left",
                                    color: "#FFFFFF",
                                  }}
                                >
                                  {subItem?.title}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontFamily: "Lato",
                                    fontSize: "7px",
                                    fontWeight: 300,
                                    lineHeight: "10px",
                                    textAlign: "left",
                                    color: "#FFFFFF",
                                    opacity: "40%",
                                  }}
                                >
                                  {subItem?.description}
                                </Typography>
                              </Box>
                            </Box>
                          </Link>
                        </ListItem>
                      ))}
                    </>
                  )}
              </React.Fragment>
            ))}
          </List>
        </Drawer>
      </Container>
      {hoveredItems.Services && (
        <ServiceMenu
          cardsData={serviceNavData}
          cardImage="OurServices"
          onMouseEnter={() => handleHover("Services")}
          onMouseLeave={() => handleHoverEnd("Services")}
        />
      )}
      {hoveredItems.Solutions && (
        <ServiceMenu
          cardsData={solutionsNavData}
          cardImage="OurSolutions"
          onMouseEnter={() => handleHover("Solutions")}
          onMouseLeave={() => handleHoverEnd("Solutions")}
        />
      )}
    </>
  );
};

export default Navbar;
