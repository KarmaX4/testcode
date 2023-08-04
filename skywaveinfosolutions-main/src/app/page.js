"use client"
import { Homepage } from '@/pages/home'
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
       <Homepage />
     </ThemeProvider>
    </>
  )
}

