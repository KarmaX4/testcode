"use client"
import { Container, Typography, Grid, Box, Divider } from '@mui/material';
import React from 'react';

const ServicesSections = ({ data, index, showTopImage = true, totalSections, title, viewSize }) => {

  // const imgSetUp = {}


  // if(viewSize === 3){

  // }


  const typographyStyle = {
    fontFamily: 'Britannic Bold',
    fontSize: {
      xs: '50px',
      sm: '67px'
    },
    fontWeight: 400,
    lineHeight: {xs: '3rem', sm:'3.8rem'},
    letterSpacing: '1.7190937995910645px',
    textAlign: 'center',
    color: 'white',
    position: 'relative'
  };

  const typographyStyleGrid = {
    fontFamily: 'Britannic Bold',
    fontSize: {
      xs: '22px',
      md: '33px'
    },
    lineHeight: {
      xs: '29px', 
      md: '45px'
    },
    textAlign: 'left',
    color: 'white',
  };

  const typographyStyle2 = {
    fontFamily: 'Lato',
    fontSize: {
      xs: '10px',
      md: '12px'
    },
    fontWeight: 700,
    lineHeight: {
      xs: '14px',
      md: '21px'
    },
    letterSpacing: '0.08em',
    color: 'white',
  };

  const ListStyle = {
    fontFamily: 'Lato',
    fontSize: {
      xs: '12px',
      md: '12px'
    },
    textAlign: 'left',
    color: '#C3C3C3',
    marginLeft: '1rem',
    listStyle: {
      xs: '',
      md: 'url("/images/icons/listIcon.svg")'
    },
    lineHeight: {
      xs: '1rem',
      md: '1.5rem'
    }
  }
  const isLastSection = index === totalSections - 1;
  const isFisrstSection = index === 0;
  const isOddSection = index % 2 === 0;
  const imgSrc = (isOddSection ? "/images/mobileServices/62608.png" : '/images/mobileServices/162557.png');

  return (
    <Container maxWidth={false} sx={{ width: { xs: '100%', md: '84.2rem !important' }, position: 'relative', marginBottom: isLastSection ? 40 : 0, marginTop: isFisrstSection ? "-4.5rem" : 0 }}>
      {showTopImage && (
        <Box
          component={'img'}
          src={imgSrc}
          alt={title}
          style={{ position: index % 2 === 0 ? 'absolute' : 'absolute', top: 0, [index % 2 === 0 ? 'left' : 'right']: '-4rem' }}
        />
      )}
      <Box 
        position="relative"
        margin='auto'
        width='fit-content'
        my={20}
      >
        <Typography sx={typographyStyle}>{data?.title}</Typography>
        <Typography sx={{
          ...typographyStyle, backgroundImage: 'linear-gradient(130deg, #ED6FCB 38.19%, #8372F2 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent', pb: '0.5rem'
        }}>{data?.subTitle}</Typography>
        <Box px='15%' mt={"12px"}>
          <Divider sx={{ color: 'white', borderWidth: '2px', borderColor: 'white' }} />
        </Box>
      </Box>
      <Grid container alignItems="center" spacing={3}
        sx={{
          whiteSpaceCollapse: 'break-spaces'
        }}
      >
        <Grid item xs={12} sm={6} 
          order={{
            xs: 2,
            sm: isOddSection ? 1 : 2
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',
          }}
        >
          {data?.description && (
            <Typography sx={typographyStyleGrid}>{data?.description}</Typography>
          )}
          {data?.subdescription && (
            <Typography sx={typographyStyle2}>{data?.subdescription}</Typography>
          )}

          {data?.listData && (
            <Box sx={ListStyle}>
              <ul>
                {data?.listData?.sort().map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} sm={6} 
          order={{
            xs: 1,
            sm: isOddSection ? 2 : 1
          }}
          textAlign={isOddSection ?'center':'-webkit-center'}
          sx={{
            // backgroundColor: 'red',
            height: '20rem',
            paddingLeft: {
              xs: isOddSection ? '7rem !important':'0rem !important',
              sm: isOddSection ? '4rem !important':'0rem !important',
              md: isOddSection ? '10rem !important':'0rem !important'
            },
            paddingRight: {
              xs: isOddSection ? '0rem !important':'0rem !important',
              sm: isOddSection ? '0rem !important':'0rem !important',
              md: isOddSection ? '0rem !important':'4rem !important'
            },
            // overflowX: 'hidden'
          }}
        >
          {data?.imageSrc && (
            <Box
              sx={{
                position: 'relative',
                border: '2px solid #fff',
                height: {
                  xs: '13rem',
                  md: '20rem'
                },
                width: {
                  xs: '13rem',
                  md: '20rem'
                },
                transform: 'rotate(20deg)',
                borderRadius: '25px',
                // left: (!isOddSection ? '-3.5rem' : "3.5rem")
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                  height: {
                    xs: '13rem',
                    md: '20rem'
                  },
                  width: {
                    xs: '13rem',
                    md: '20rem'
                  },
                  borderRadius: '25px',
                  left: '25px',
                  top: '15px',
                }}
              />
              <Box 
                component={'img'}
                src={`/Background/Fly/fly${isOddSection ? 3 : 1}.svg`}
                sx={{
                  position: 'absolute',
                  bottom: `-6rem`,
                  left: `-2rem`,
                }}
              />
              <Box 
                component={'img'}
                src={`/Background/Fly/fly${isOddSection ? 1 : 3}.svg`}
                sx={{
                  position: 'absolute',
                  transform: 'rotate(53deg)',
                  top: '-6rem',
                  right: `-2rem`,
                }}
              />
              <Box 
                component={'img'} src={data?.imageSrc} alt="mobile"
                sx={{
                  position: 'absolute',
                  // bottom: 0,
                  left: {
                    xs: '10%',
                    // md: ' -10% !important'
                    md: ' 10% !important'
                    // md: ' -12% !important'
                  },
                  top: {
                    xs: '-27%',
                    md: '-10%'
                    // md: '-30%'
                  },
                  rotate: '337deg',
                  width: {
                    xs: '100%',
                    // md: '28rem',
                    md: '100%',
                    // md: '25rem',
                  }
                  // width: {
                  //   xs: '14.2rem',
                  //   sm: '15rem',
                  //   md: '25rem',
                  // }
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesSections;
