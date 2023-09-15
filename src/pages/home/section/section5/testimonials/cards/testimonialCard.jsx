import { Card, CardContent, Typography, Box, Avatar, Rating, Divider } from '@mui/material';

const cardStyles = {
    background: '#18181C',
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
                    padding: '16px !important',
                    width: {
                        xs: 'auto',
                        sm: '70vw',
                        md: '50vw',
                    }
                }}
            >
                <Box sx={contentBodyStyles}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontSize: {
                                xs: '12px',
                                md: '1.5rem',
                            },
                            lineHeight: '2',
                            overflow: 'hidden',
                            textAlign: 'left'
                        }}
                    >
                        {testimonial?.text}
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
                                src={testimonial?.image}
                                alt={testimonial?.name}
                                sx={{
                                    width: {
                                        xs: 45,
                                        md: 65
                                    },
                                    height: {
                                        xs: 45,
                                        md: 65
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
                                        xs: '2vh',
                                        sm: '2vh',
                                        md: '34px'
                                    },
                                    fontWeight: 600,
                                    // lineHeight: "54px",
                                    letterSpacing: '0em',
                                }}>
                                {testimonial?.name}
                            </Typography>
                        </Box>
                        <Rating
                            name="read-only"
                            value={5}
                            readOnly
                            sx={{
                                fontSize: {
                                    xs: '3.5vh !important',
                                    sm: '3vh !important',
                                    md: '2.5rem !important',
                                    // md: '2rem !important'
                                }
                            }}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;