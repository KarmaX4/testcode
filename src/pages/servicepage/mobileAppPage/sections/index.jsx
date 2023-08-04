"use client"
import { Container, Typography, Grid, Box, Divider } from '@mui/material';
import React from 'react';

const ServicesSections = ({ data, index, showTopImage = true, totalSections }) => {
  const typographyStyle = {
    fontFamily: 'Britannic Bold',
    fontSize: '67px',
    fontWeight: 400,
    lineHeight: '56px',
    letterSpacing: '1.7190937995910645px',
    textAlign: 'center',
    color: 'white',
    position: 'relative'
  };

  const typographyStyleGrid = {
    fontFamily: 'Britannic Bold',
    fontSize: '33px',
    lineHeight: '45px',
    textAlign: 'left',
    color: 'white',
  };

  const typographyStyle2 = {
    fontFamily: 'Lato',
    fontSize: '12px',
    fontWeight: 700,
    lineHeight: '21px',
    letterSpacing: '0.08em',
    color: 'white',
  };

  const ListStyle = {
    fontFamily: 'Lato',
    textAlign: 'left',
    color: '#C3C3C3',
    marginLeft: '1rem',
    listStyle: 'url("/icons/listIcon.svg")',
    lineHeight: '1.8rem'
  }
  const isLastSection = index === totalSections - 1;
  const isFisrstSection = index === 0 ;
  const isOddSection = index % 2 === 0;
  const imgSrc = (isOddSection ? "/images/mobileServices/62608.png" : '/images/mobileServices/162557.png');

  return (
    <Container maxWidth={false} sx={{ width: { xs: '100%', md: '88.2rem !important' }, position: 'relative',marginBottom: isLastSection ? 40 : 0, marginTop: isFisrstSection ? "-4.5rem" : 0}}>
      {showTopImage && (
        <img
          src={imgSrc}
          alt={'mb'}
          style={{ position: index % 2 === 0 ? 'absolute' : 'absolute', top: 0, [index % 2 === 0 ? 'left' : 'right']: '-4rem' }}
        />
      )}
      {data.topDescription && (
        <Typography style={{
          fontFamily: 'Lato',
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: '40px',
          letterSpacing: '0.08em',
          color: '#C3C3C3'
        }}>
          {data.topDescription}
        </Typography>
      )}

      <Box position="relative"
        margin='auto'
        width='fit-content'
        my={20}
      >
        <Typography style={typographyStyle}>{data.title}</Typography>
        <Typography style={{ ...typographyStyle, color: '#8372F2' }}>{data.subTitle}</Typography>
        <Box px='15%' mt={4}>
          <Divider sx={{ color: 'white', borderWidth: '2px', borderColor: 'white' }} />
        </Box>
        <img
          src='/Background/Fly/fly3.svg'
          style={{
            position: 'absolute',
            top: '4rem',
            left: '-4.5rem'
          }}
        />
        <img
          src='/Background/Fly/fly2.svg'
          style={{
            position: 'absolute',
            transform: 'rotate(53deg)',
            bottom: '-1.2rem',
            right: '-6rem',
          }}
        />
      </Box>
      <Grid container alignItems="center" spacing={3}
        sx={{
          whiteSpaceCollapse: 'break-spaces'
        }}
      >
        <Grid item xs={12} md={6} order={isOddSection ? 1 : 2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '1rem',

          }}
        >
          {data.description && (
            <Typography style={typographyStyleGrid}>{data.description}</Typography>
          )}
          {data.subdescription && (
            <Typography style={typographyStyle2}>{data.subdescription}</Typography>
          )}

          {data.listData && (
            <Box style={ListStyle}>
              <ul>
                {data.listData.sort().map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={6} order={isOddSection ? 2 : 1}
          textAlign='-webkit-center'
        >
          {data.imageSrc && (
            <>
              <Box
                sx={{
                  position: 'relative',
                  border: '2px solid #fff',
                  height: '20rem',
                  width: '20rem',
                  transform: 'rotate(20deg)',
                  borderRadius: '25px',
                  left: (!isOddSection ? '-3.5rem' : "3.5rem")
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                    height: '20rem',
                    width: '20rem',
                    borderRadius: '25px',
                    left: '25px',
                    top: '15px',
                  }}
                />
                <img
                  src={`/Background/Fly/fly${isOddSection ? 3 : 1}.svg`}
                  style={{
                    position: 'absolute',
                    bottom: `-6rem`,
                    left: `-2rem`,
                  }}
                />
                <img
                  src={`/Background/Fly/fly${isOddSection ? 1 : 3}.svg`}
                  style={{
                    position: 'absolute',
                    transform: 'rotate(53deg)',
                    top: '-6rem',
                    right: `-2rem`,
                  }}
                />
                <img src={data.imageSrc} alt="mobile"
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '30%',
                    translate: '-30% -50%',
                    rotate: '337deg',
                    height: '25rem'
                  }}
                />
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesSections;
