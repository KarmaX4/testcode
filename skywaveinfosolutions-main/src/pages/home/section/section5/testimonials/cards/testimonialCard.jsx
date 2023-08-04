import { Card, CardContent, Typography, Box, Avatar, Rating, Divider } from '@mui/material';



const cardStyles = {
    background: 'black',
    borderRadius: '25px',
    height: {
        xs: '20rem',
        md: '30rem',
    }
};

const contentBodyStyles = {
    height: 'inherit',
    color: 'white',
    fontSize: 30.26,
    fontFamily: 'Lato',
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    wordWrap: 'break-word',
    padding: {
        xs: '1rem',
        md: '2rem'
    },
    paddingBottom: '1.5rem'
};

const TestimonialCard = ({ testimonial }) => {
    return (
        <Card sx={cardStyles}>
            <CardContent
                sx={{
                    height: '-webkit-fill-available',
                    position: 'relative',
                }}
            >
                <Box sx={contentBodyStyles}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: {
                                xs: '15px',
                                md: '1.5rem',
                            },
                            lineHeight: '2',
                            overflow: 'hidden',
                            textAlign: 'left'
                        }}
                    >
                        {testimonial.text}
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderTop: "2px solid #404047",
                            pt: {
                                xs: 3,
                                md: 4
                            }
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <Avatar
                                src={testimonial.image}
                                alt={testimonial.name}
                                sx={{
                                    width: {
                                        xs: 45,
                                        md: 84.07
                                    },
                                    height: {
                                        xs: 45,
                                        md: 84.07
                                    },
                                    borderRadius: '50%',
                                    background: 'linear-gradient(108deg, #8372F2 0%, #ED6FCB 100%)'
                                }}
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    marginLeft: '10px',
                                    fontFamily: 'Lato',
                                    fontSize: {
                                        xs: '10px',
                                        md: '34px'
                                    },
                                    fontWeight: 600,
                                    // lineHeight: "54px",
                                    letterSpacing: '0em',
                                }}>
                                {testimonial.name}
                            </Typography>
                        </Box>
                        <Rating
                            name="read-only"
                            value={5}
                            readOnly
                            // size="large"
                            fontSize={{
                                xs: '1rem !important',
                                md: '5rem !important'
                            }}
                        // size={{
                        //     xs: "Small",
                        //     md: "Large" 
                        // }}

                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;