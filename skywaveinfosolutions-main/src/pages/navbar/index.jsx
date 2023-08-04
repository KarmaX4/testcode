"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
  Drawer,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Services', 'Solutions', 'Portfolio', 'Blog', 'Contact'];
  const moreNavItems = navItems.slice(4, navItems.length);
  const pathname = usePathname();

  const [showBackground, setShowBackground] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isMobileScreenDrawer, setIsMobileScreenDrawer] = useState(false);
  const [visibleNavItems, setVisibleNavItems] = useState(navItems);
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const [activeTab, setActiveTab] = useState(pathname.slice(1));

  const handleScroll = () => {
    setShowBackground(window.scrollY > 100);
  };

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth < 1000);
    setIsMobileScreenDrawer(window.innerWidth < 700);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileScreen) {
      setVisibleNavItems(navItems.slice(0, 4));
    } else {
      setVisibleNavItems(navItems);
    }
  }, [isMobileScreen]);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMoreMenuOpen = (event) => {
    setIsMoreMenuOpen(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setIsMoreMenuOpen(false);
  };

  const handleNavItemClick = (item) => {
    setActiveTab(item);
    handleMobileMenuClose();
  };

  return (
    <Container maxWidth={false} sx={{ width: '85rem !important' }}>
      <AppBar
        sx={{
          backgroundColor: showBackground ? '#00000099' : 'transparent',
          border: 'none',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: { xs: '.8rem 0rem', md: '.8rem 3.7rem' },
            transition: 'margin 0.5s ease-in-out',
          }}
        >
          <Link href="https://www.skywaveinfosolutions.com/" underline="none">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={`/Logo/Icon${isMobileScreenDrawer ? '' : ' + name'}.svg`}
                alt={`Logo${isMobileScreenDrawer ? '' : '  with Name'}`}
                width={200}
                height={200}
                layout="responsive"
              />
            </Box>
          </Link>
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="#FFFFFF"
              aria-label="menu"
              onClick={handleMobileMenuOpen}
              sx={{ color: '#fff', fontSize: '3rem', transition: 'color 0.5s ease-in-out' }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: '.6rem' }}>
          {visibleNavItems.map((item) => (
              <Link
                key={item}
                href={
                  item.toLowerCase().trim() === 'home'
                    ? '/'
                    : item.toLowerCase().trim() === 'services'
                    ? '/service' 
                    : item.split(' ').join('').toLowerCase()
                }
                underline="none"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  padding: '.5rem 1rem',
                  borderRadius: '2rem',
                  lineHeight: 'normal',
                  background: 'none',
                  fontFamily: 'Lato',
                  transition: 'background 0.5s ease-in-out, color 0.5s ease-in-out',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #8372F2 0%, #ED6FCB 100%)',
                    color: '#fff',
                  },
                  ...(activeTab === item.toLowerCase().trim() ||
                    (activeTab === 'service' && item.toLowerCase().trim() === 'services') 
                    ? {
                        background: 'linear-gradient(135deg, #8372F2 0%, #ED6FCB 100%)',
                        color: '#fff',
                      }
                    : {}),
                }}
                onClick={() => handleNavItemClick(item)}
              >
                {item}
              </Link>
            ))}
            {isMobileScreen && (
              <Link
                onClick={handleMoreMenuOpen}
                underline="none"
                sx={{
                  color: '#FFFFFF',
                  fontSize: 18,
                  padding: '.5rem 1rem',
                  borderRadius: '2rem',
                  lineHeight: 'normal',
                  background: 'none',
                  fontFamily: 'Lato',
                  transition: 'background 0.5s ease-in-out, color 0.5s ease-in-out',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #8372F2 0%, #ED6FCB 100%)',
                    color: '#fff',
                  },
                }}
              >
                More
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: { xs: '75vw', md: '50vw' },
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item}
              onClick={handleMobileMenuClose}
              sx={{
                textAlign: 'center',
                padding: '1rem',
                '&:hover': {
                  background: 'linear-gradient(135deg, #8372F2 0%, #ED6FCB 100%)',
                },
              }}
            >
              <Link
                href={item.toLowerCase().trim() === 'home' ? '/' : item.split(' ').join('').toLowerCase()}
                underline="none"
                sx={{
                  color: '#000',
                  fontSize: 18,
                  fontFamily: 'Lato',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'center',
                }}
              >
                <img width="24" height="24" src="https://img.icons8.com/material/24/meeting-room.png" alt="meeting-room" /> {item}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Menu
        anchorEl={isMoreMenuOpen}
        keepMounted
        open={Boolean(isMoreMenuOpen)}
        onClose={handleMoreMenuClose}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        getContentAnchorEl={null}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: '-9px',
              right: '25px',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderBottom: '10px solid #fff',
              zIndex: 0,
            },
          },
        }}
      >
        {moreNavItems.map((item) => (
          <MenuItem key={item} onClick={handleMoreMenuClose}>
            <Link
              href={item.toLowerCase().trim() === 'home' ? '/' : item.split(' ').join('').toLowerCase()}
              underline="none"
              sx={{
                color: '#000',
                fontSize: 18,
                fontFamily: 'Lato',
              }}
            >
              {item}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default Navbar;
