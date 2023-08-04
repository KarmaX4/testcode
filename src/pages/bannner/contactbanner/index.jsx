import { Button, Container, Typography, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const ContactBanner = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        width: {
          xs: '80%',
          md: '88.2rem'
        },
        // margin: 'fit-content',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          padding: '3.5rem',
          borderRadius: '3rem',
          position: 'absolute',
          top: '50%',
          left: {
            xs: '50%',
            md: 0
          },
          background: '#8372F2',
          width: {
            xs: 'inherit',
            md: 'auto'
          },
          transform: {
            xs: 'translate(-50%, -50%)',
            md: 'translate(0%, -50%)'
          },
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: '4rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: 'Britannic Bold', color: 'white', textAlign: 'center' }}>
              Let us improve<br />your business!
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
           <Typography
              variant="body1"
              sx={{
                fontFamily: 'britannicBold',
                color: 'white',
                fontSize: {
                  xs: '20px',
                  md: '20px'
                },
                textAlign: {
                  xs: 'center',
                  md:'left'},
              }}
            >
              Need an awesome team with great skills and years of industrial experience
              to skyrocket your business? Let us connect and build together a perfect
              place for your customers.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <a href="tel:+919427722776" style={{ color: 'white', textDecoration: 'none', fontSize:"1.25rem" }}>
              (+91) 94277-22776
            </a>
            <a href="mailto:info@skywaveinfosolutions.com" style={{ color: 'white', textDecoration: 'none', fontFamily: 'britannicBold' }}>
              info@skywaveinfosolutions.com
            </a>
            <Button sx={{ borderRadius: '28px', border: 2, color:"white", '&:hover': { border: '2px solid #fff'} }} variant="outlined" endIcon={< EmailIcon  sx={{pb:'2px'}}/>}>
              Contact form
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactBanner;
