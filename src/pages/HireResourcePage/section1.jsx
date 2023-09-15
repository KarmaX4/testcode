import {
    Container,
    Grid,
    Box,
    Typography,
    Divider,
    Button
  } from '@mui/material'
  import React from 'react'

import { useRouter } from 'next/navigation';
  
  const typographyStyle = {
    fontFamily: 'Britannic Bold',
    fontSize: {
      xs: '40px',
      sm: '67px'
    },
    fontWeight: 400,
    lineHeight: { xs: '3rem', sm: '3.8rem' },
    letterSpacing: '1.7190937995910645px',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    // whiteSpace: 'nowrap',
  };
  
  const typographyStyleGrid = {
    fontFamily: 'Britannic Bold',
    // whiteSpace: 'pre-line',
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
    whiteSpace: 'pre-line',
    fontFamily: 'Lato',
    fontSize: {
      xs: '10px',
      md: '20px'
    },
    fontWeight: 700,
    lineHeight: {
      xs: '14px',
      md: '29px'
    },
    letterSpacing: '0.08em',
    color: '#C3C3C3',
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
  
  const HireS1 = ({ data}) => {
    const router = useRouter()
    return (
      <Container
        maxWidth={false}
        sx={{
          width: '88vw',
          padding: '0 !important',
          marginBottom: {
            // xs: 45,
            // sm: 40,
            md: 15
          },
          marginTop: "-4.5rem" 
        }}
      >
        <Grid
          container
          my={5}
        >
          <Grid item xs={12}
            sx={{
              position: "relative"
            }}
          >
                <Box
                  sx={{
                    // backgroundColor: 'red',
                    position: 'absolute',
                    left: {
                      xs: '-4%',
                      md: '-7%'
                    },
                    top: '12%',
                    width: '4.5rem',
                    height: 'fit-content',
                    overflow: 'hidden',
                    rotate: '-180deg !important'
                  }}
                >
                  <Box component='img' src='/images/HoloCircle.svg'
                    sx={{
                      height: {
                        xs: '30vh'
                      },
                      width: '10vw'
                    }}
                  />
                </Box>
            <Box
              position="relative"
              margin={{
                xs: '5rem auto 0rem',
                sm: '5rem auto'
              }}
              width='fit-content'
              sx={{
                // backgroundColor: 'red'
              }}
            >
              <Typography
                sx={{
                  ...typographyStyle
                }}
              >{data?.title}</Typography>
              <Typography sx={{
                ...typographyStyle,
                backgroundImage: 'linear-gradient(316deg, #ED6FCB 0.19%, #8372F2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent', pb: '0.5rem'
              }}>{data?.subTitle}</Typography>
              <Box px='15%' mt={"12px"}>
                <Divider sx={{ color: 'white', borderWidth: '2px', borderColor: 'white' }} />
              </Box>
              <Box
                component='img'
                src='/Background/Fly/fly3.svg'
                height={{
                  xs: '30%',
                  sm: '40%',
                }}
                sx={{
                  position: 'absolute',
                  top: {
                    xs: '0rem',
                    sm: '0.7rem',
                  },
                  left: {
                    xs: '-2rem',
                    sm: '-6rem',
                  },
                  filter: 'drop-shadow(10px 10px 1px #ffffff63)'
                }} />
              <Box component='img' src='/Background/Fly/fly2.svg' sx={{
                position: 'absolute',
                transform: 'rotate(53deg)',
                bottom: '-1.2rem',
                right: {
                  xs: '-1.6rem',
                  sm: '-6rem'
                },
  
  
              }} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12} sm={6}
                order={{
                  xs: 2,
                  
                }}
                sx={{
                  height: {
                    md: '80vh',
                    xs: '35vh'
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '1rem',
                }}
              >
              {data?.description && (
                  <Typography sx={typographyStyle2}>{data?.description}</Typography>
                )}
                {/* {data?.subDescription && (
                  <Typography sx={typographyStyle2}>{data?.subDescription}</Typography>
                )} */}
             <Box mt={3}>   
                 <Button
            variant="contained"
            size="1"
            onClick={() => {router.push('/contact')}}
            // p={2}
            sx={{
               width:'12vw',
              padding: '6px 30px',                                 
              fontSize:"20px",
              psotion:"relative",
              textTransform:'none',
              background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
              borderRadius: '25px',
              marginRight: '2px',
              '&:after': {
                content: '"\\00BB"',
                position: "absolute",
                fontSize: '2rem',
                right: '17px',
                bottom: '-1.5px',
                opacity: 0,
                transition: 'opacity 200ms ease-in-out',
            },
            '&:hover::after': {
              opacity: {
                  xs: 0,
                  md: 1
              },
          },
            }}
           
           
          >
            Contact Us
          </Button>
          {/* <SkywaveButton placeholder={' Contact Us'} link='/hire' /> */}
          </Box>
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
                 
                }}
               
                sx={{
                  height: {
                    xs: '65vh',
                    sm: '35vh',
                    md: '80vh',
                  },
                  display: 'flex',
                  justifyContent: {
                    xs: 'left',
                   
                  },
                  alignItems: 'center',
                 
                }}>
                <Box sx={{
                  width: '50%',
                  aspectRatio: '1/1',
                  border: '2px solid #fff',
                  borderRadius: '20px',
                  position: 'relative',
                  rotate: '10.45deg',
                  right: '-80px',
                  left: '80px' 
                }}>
                  <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    aspectRatio: '1/1',
                    background: 'linear-gradient(316deg, #ED6FCB 0.19%, #8372F2 100%)',
                    top: '5%',
                    left: '6%',
                    borderRadius: '20px',
                  }} />
                  <Box
                    component={'img'}
                    src={`/Background/Fly/fly${1}.svg`}
                    sx={{
                      position: 'absolute',
                      bottom: `-6rem`,
                      left: `-2rem`,
                      filter: 'drop-shadow(8px 7px 1px  #ffffff63)'
                    }}
                  />
                  <Box
                    component={'img'}
                    src={`/Background/Fly/fly${3}.svg`}
                    sx={{
                      position: 'absolute',
                      transform: 'rotate(53deg)',
                      top: '-6rem',
                      right: `-2rem`,
                      filter: 'drop-shadow(8px 7px 1px  #ffffff63)'
                    }}
                  />
                  <Box
                    component={'img'}
                    src={`/images/hireResource/Hire Android App.svg`}
                    alt="mobile"
                    zIndex={1}
                    sx={{
                    //   ...data?.postition
                      rotate: `${'350'}deg`,
                      position: 'absolute',
                      width: '125%',
                      aspectRatio: '1/1',
                      left: '-15%',
                      top: '-10%',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Box>
            <Typography  sx={typographyStyle2} >
            {data?.bottomText}
            </Typography>
        </Box>
      </Container>
    )
  }
  
  export default HireS1