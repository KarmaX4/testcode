"use client"
import HeroBanner from '@/pages/bannner';
import MainFooter from '@/pages/footer/mainFooter';
import Section1 from '@/pages/home/section/section1';
import Section2 from '@/pages/home/section/section2';
import Section3 from '@/pages/home/section/section3';
import Section4 from '@/pages/home/section/section4';
import Section5 from '@/pages/home/section/section5';
import Navbar from '@/pages/navbar';
// import { Homepage } from '@/pages/home'
import { createTheme,ThemeProvider } from '@mui/material';


const theme = createTheme({
  typography: {
    allVariants:{
    } 
  },});

export default function Home() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Navbar />
      <HeroBanner />
      <Section1 />
      <Section2 />
      <Section3/>
      <Section4 />
      <Section5/>
      {/* <ConatctBanne />
      <Footer />
      <CopyRight /> */}
      <MainFooter/>
     </ThemeProvider>
    </>
  )
}

