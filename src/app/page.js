"use client"
import { createTheme, ThemeProvider } from '@mui/material';
import Homepage from '@/pages/home';

const theme = createTheme({

  typography: {
    allVariants: {
    }
  },
});

export default function Home() {
 
  return (
    <>
        <ThemeProvider theme={theme}>
          <Homepage />
        </ThemeProvider>
  
    </>
  )
}

