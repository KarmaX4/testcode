import React from 'react'
import { Avatar, Card, CardContent, Button, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/system';

// const CustomAvatar 
//     = styled(Avatar)(({ theme }) => ({
//     width: 100,
//     height: 100,
//     backgroundColor: '#1B1B1B',
//     '& .css-1pqm26d-MuiAvatar-img': {
//         objectFit: 'none',
//     },
// }));


const fontStyles = {
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: 300,
    lineHeight: '18px',
    letterSpacing: '0.08em',
};

const CustomAvatar = (props) => {
    return (
        <Avatar
            sx={{
                width: 100,
                height: 100,
                backgroundColor: '#1B1B1B',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& img': {
                    maxWidth: '100%',
                    maxHeight: '100%',
                },
            }}
            {...props}
        />
    );
};

const LocatedUsCard = ({
    icon,
    flag,
    country,
    branch,
    address,
    address1,
    address2,
    contactNumber,
    index,
}) => {
    return (
        <Card
            sx={{
                height: '407px',
                width: {
                    xs: '50vw',
                    md: '25vw'
                },
                backgroundColor: '#2F2F2F',
                borderRadius: '.5rem',
                padding: '.5rem',
                margin: {
                    xs: 'auto',
                    md: `${index * 3}rem auto 0rem`
                }
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: 'inherit',
                    textAlign: 'center',
                    color: '#fff',
                    gap: '1.5rem'
                }}
            >
                {/* <Avatar
                    alt="Remy Sharp"
                    src={icon}
                    sx={{
                        width: 100,
                        height: 100,
                        backgroundColor: '#1B1B1B',
                        // objectFit: 'none !important'
                        '& .css-1pqm26d-MuiAvatar-img': {
                            objectFit: 'none !important'
                        }
                    }}
                /> */}
                {/* <CustomAvatar alt="Remy Sharp" src={icon} /> */}
                <CustomAvatar > <Box component={'img'} src={icon} alt="Remy Sharp" sx={{
                    objectFit: 'none', width: 100,
                    height: 100,
                }}>
                </Box></CustomAvatar>

                {country && (<Typography variant="h5" component="div" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'Lato',
                    fontSize: '21px',
                    fontWeight: 700,
                    lineHeight: '17px',
                    letterSpacing: '0.045em',
                    mb:'1rem'
                    // textAlign: 'left',
                }}>
                    <Box
                        component={'img'} width="30" height="30" src={flag} alt={country} />&nbsp;&nbsp;&nbsp;&nbsp;{country}
                </Typography>)}
                {branch && (
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '.4rem',
                            mb:'1rem'
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Lato',
                                fontSize: '18px',
                                fontWeight: 700,
                                lineHeight: '14px',
                                letterSpacing: '0.045em',
                                whiteSpace: 'pre-line',
                                backgroundImage: 'linear-gradient(324deg, #ED6FCB 20%, #8372F2 100%)',
                                // backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                lineHeight: '1',
                            }}>
                            {branch.split(' ', 2).join(' ')}{'\n'}{branch.split(' ').slice(2).join(' ')}
                        </Typography>
                        <Divider sx={{ backgroundColor: '#FFFFFF', width: '6rem' }} />
                    </Box>
                )}

                {address && (<Typography variant="body2" sx={{ ...fontStyles, lineHeight: '0' }}>
                    {address},
                </Typography>)}
                {address1 && (<Typography variant="body2" sx={{ ...fontStyles, lineHeight: '0' }}>
                    {address1},
                </Typography>)}
                {address2 && (<Typography variant="body2" sx={{ ...fontStyles, lineHeight: '0' }}>
                    {address2}
                </Typography>)}
                {
                    contactNumber && (
                        <Typography
                            component='a'
                            href={`tel:${contactNumber}`}
                            sx={{
                                backgroundImage: 'linear-gradient(324deg, #ED6FCB 20%, #8372F2 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                color: 'transparent',
                                fontFamily: 'Lato',
                                fontSize: '18px',
                                fontWeight: 500,
                                lineHeight: '14px',
                                letterSpacing: '0.045em',
                                pt: '5%',
                            }}
                        >
                            {contactNumber}
                        </Typography>
                    )
                }
            </CardContent>
        </Card>
    )
}

export default LocatedUsCard