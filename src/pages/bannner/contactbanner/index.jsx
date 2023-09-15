import { Button, Container, Typography, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { useRouter } from 'next/navigation';
const ContactBanner = () => {
  const router = useRouter();
  return (
    <Container
      maxWidth={false}
      sx={{
        width: {
          xs: '80vw',
          sm: '80vw',
          md: '90vw'
        },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          padding: {
            xs: '2rem',
            sm: '2rem 0rem', 
            md:'3.5rem'
          },
          borderRadius: {
            xs: '2rem',
            md: '3rem'
          },
          position: 'absolute',
          top: '50%',
          left: {
            xs: '50%',
            md: 0
          },
          background: '#8372F2',
          width: {
            // xs: 'inherit',
            sm: 'inherit',
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
            gap: {
              xs: '1rem',
              sm: '2rem',
              md: '4rem'
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: {xs:'center', md: 'center'},
            }}
          >
            <Typography variant="h4" 
              sx={{
                fontFamily: 'Britannic Bold',
                fontWeight:400,
                fontSize:{
                  xs: '32px',
                  sm: '40px'
                },
                color: 'white',
                textAlign: 'center'
              }}
            >
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
              
              sx={{
                fontFamily: 'Lato',
                fontWeight:400,
              
                color: 'white',
                fontSize: {
                  xs: '16px',
                  md: '16px'
                },
                textAlign: {
                  xs: 'center',
                  md: 'justify'
                },
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
            <a href="tel:+919427722776" style={{ color: 'white', textDecoration: 'none', fontSize:"1.25rem" ,fontFamily: 'Britannic Bold',fontWeight:400 }}>
              (+91) 94277-22776
            </a>
            <a href="mailto:info@skywaveinfosolutions.com" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Lato',fontWeight:400, fontSize:"18px" }}>
              info@skywaveinfosolutions.com
            </a>
            <Button sx={{ borderRadius: '28px', border: 2,textTransform : 'none',fontSize:'18px', fontFamily: 'Britannic Bold',color:"white", '&:hover': { border: '2px solid #fff'} }} variant="outlined" endIcon={< EmailIcon  sx={{pt:'2px'}}/>} onClick={()=>router.push('/contact#contact-form')}>
              Contact form
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactBanner;
