import { Grid, Box, Typography, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Juxtapose = ({ jsonData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {
        jsonData?.map((val, index) => (
          <Grid container spacing={2} key={index} sx={{ marginTop: '2rem' }}>
            <Grid item xs={12} sm={6}
              order={{
                xs: 1,
                sm: index % 2 === 0 ? 1 : 2
              }}
            // order={1}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: {
                    xs: '20rem',
                    sm: '30rem',
                    md: '30rem',
                    lg: '30rem'
                  },
                }}
              >
                <Box component={'img'} sx={{ width: { xs: '90%', md: 'auto' }, background: 'transparent' }} src={`/images/Solutions/${val.title}.svg`} alt={val.title} />
              </Box>
            </Grid>
            <Grid
              order={{
                xs: 2,
                sm: index % 2 === 0 ? 2 : 1
              }}
              // order={2}
              item
              xs={12}
              sm={6}
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Britannic Bold',
                    color: 'white',
                    fontSize: {
                      xs: '43px',
                      md: '65px',
                      lg: '79px'
                    }
                  }}
                >
                  {val.title}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontFamily: 'Lato',
                    marginTop: '10px',
                    color: 'white',
                  }}
                >
                  {val.desc}
                </Typography>
                {/* <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                    borderRadius: '25px',
                    marginTop: '30px',
                    '&:after': {
                      content: '"\\00BB"',
                      marginLeft: '5px',
                      fontSize: '1rem',
                      opacity: 0,
                      transition: 'opacity 200ms ease-in-out',
                    },
                    '&:hover::after': {
                      opacity: 1,
                    },
                  }}
                >
                  View More
                </Button> */}
                <Button
                  href={val?.link}
                  variant="contained"
                  size="large"
                  sx={{
                    padding: '8px 40px',
                    textTransform: 'none',
                    background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                    borderRadius: '25px',
                    marginTop: '30px',
                    '&:after': {
                      // content: '"\\00BB"',
                      // marginLeft: '5px',
                      // fontSize: '1rem',
                      // opacity: 0,
                      // transition: 'opacity 200ms ease-in-out',

                      content: '"\\00BB"',
                      position: "absolute",
                      fontSize: '2rem',
                      right: '17px',
                      bottom: '-3.5px',
                      opacity: 0,
                      transition: 'opacity 200ms ease-in-out',
                    },
                    '&:hover::after': {
                      opacity: 1,
                    },
                  }}
                >
                  View More
                </Button>
              </Box>
            </Grid>
          </Grid>
        ))}
    </>
  );
}

export default Juxtapose;
