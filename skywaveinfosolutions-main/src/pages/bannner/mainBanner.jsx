
import { useTheme } from '@mui/material/styles';
import { Container, Box, Typography, Button, Grid, Link } from '@mui/material';
import FlyingItems from './BackgroundItems/fly.jsx'


const MainBanner = ({ title = '', subtitle = '', buttonText = '', description = '', imageUrl = '', imgBackground = false, flyBackground = false }) => {
  const theme = useTheme();

  const buttonStyles = {
    padding: '8px 25px',
    fontSize: '18px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '30px',
    color: 'white',
    background: 'linear-gradient(108.46deg, #ED6FCB 38.19%, #8372F2 100%)',
    transition: 'background 0.3s ease-in-out',
    transform: 'scale(1.02)',
    boxShadow: 'rgb(130 106 223) 0px 1px 2px 1px',
    ':hover': {
      background: 'linear-gradient(70.46deg, #ED6FCB 38.19%, #8372F2 100%)',
      transform: 'scale(1)',
      boxShadow: 'rgb(130 106 223) 0px 1px 2px 1px',
    }
  };

  const CustomLink = ({ link, text }) => {
    if (link) {
      const adjustedLink = text.toLowerCase() === 'services' ? `/${text.slice(0, -1)}` : link;
      return <a style={{ textDecoration: "none", color: '#c9c9c9' }} href={adjustedLink.toLowerCase()}>{text}&nbsp;/&nbsp;</a>;
    } else {
      return text;
    }
  };
  
  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: 'row'
        },
        alignItems: 'center',
        justifyContent: {
          xs: 'flex-end',
          md: 'space-around'
        },
        m: 'auto',
        width: {
          xs: '100vw',
          md: '88.2rem'
        },
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Grid container xs={12}
        spacing={10}
        justifyContent='center'
        >
        <Grid item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            gap: 4,
            justifyContent: 'center'
          }}
        >
          {title && (
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Britannic Bold',
                fontSize: {
                  xs: '50px',
                  md: '75px'
                },
                fontWeight: 900,
                lineHeight: {
                  xs: '50px',
                  md: '74px'
                },
                letterSpacing: '1.5px',
                textAlign: 'left',
                color: '#FFFFFF',
              }}
            >
              {title}
              <br />
              {subtitle && (
                <Typography
                  variant="span"
                  sx={{
                    fontFamily: 'Britannic Bold',
                    letterSpacing: '0px',
                    color: '#9AABDB',
                  }}
                >
                  {subtitle}
                </Typography>
              )}
            </Typography>
          )}
          {subtitle && !title && (
            <Typography
              variant="span"
              sx={{
                letterSpacing: '0px',
                color: '#9AABDB',
              }}
            >
              {subtitle}
            </Typography>
          )}
          {description && (
            <Typography
              variant="body1"
              noWrap = "true"
              sx={{
                fontFamily: 'Lato',
                marginTop: {
                  xs: '16px',
                  md: '0'
                },
                width: "100%",
                color: '#C3C3C3',
                textAlign: 'left',
                fontSize: '25px',
                
              }}
            >
              {description.split(' / ').map((val, index, arr)=>{
                return (
                  <CustomLink key={index} link={index !== arr.length - 1 ? `/${val}` : null} text={val} />
                )
              })}
            </Typography>
          )}
          {buttonText && (
            <Button
              style={buttonStyles}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              {buttonText}
            </Button>
          )}
        </Grid>
        {imageUrl && (
          <Grid
            item
            xs={8}
            md={6}
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              mt: {
                xs: 4,
                md: 0
              },
              transform: flyBackground? 'translate(-15%, 0%)': 'translate(0%, 0%)',
            }}
          >
            {
              flyBackground ? '' :
              (
                <Grid container xs={12}
                  spacing={2}
                  gap={2}
                  margin="auto"
                  sx={{
                    // background: '#951651'
                  }}
                >
                  <Grid item xs={2}
                    sx={{
                      width: '2rem',
                      height: '13rem',
                      background: imgBackground? 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)' :'transparent',
                      borderRadius: '5rem',
                      opacity: 0.1,
                    }}
                  />
                  <Grid item xs={9.1}
                    sx={{
                      width: '2rem',
                      height: '13rem',
                      border: `5px solid gray`,
                      border: `5px solid ${imgBackground? '#2d2a37' : 'transparent'}`,
                      borderRadius: '0 5rem 0 5rem',
                    }}
                  />
                  <Grid item xs={11.5}
                  sx={{
                    width: '2rem',
                    height: '13rem',
                    background: imgBackground? 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)' :'transparent',
                    borderRadius: '0 5rem 0 5rem',
                  }}
                  />
                </Grid>
              )
            }
            
            <Box
               sx={{ 
                width: 'inherit',
                position: flyBackground? 'relative' : 'absolute',
                height: 'auto',
                bottom: '0px',
              }}
            >
              <img
                src={imageUrl}
                alt="Hero Banner"
              />
              {flyBackground? <FlyingItems />: ''}
              </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default MainBanner;
