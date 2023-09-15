import { Box, Grid, Typography, Avatar } from '@mui/material';
import React from 'react';

const ServiceMenu = ({ cardsData, cardImage, onMouseEnter, onMouseLeave }) => {
    return (
        <Box
            width={'100vw'}
            mt={"6rem"}
            bgcolor={'#1D2329'}
            sx={{
                borderRadius: '25px',
                position: 'fixed',
                zIndex: '1100',
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Grid
                container
                spacing={2}
                margin={0}
            >
                <Grid
                    item
                    md={9}
                    py={6}
                    sx={{
                        backgroundColor: '#1d2329',
                    }}
                >
                    <Grid
                        container
                        px={5}
                        spacing={4}
                        sx={{
                            marginTop: '0 !important'
                        }}
                    >
                        {cardsData?.map((card, index) => (
                            <Grid
                                item
                                xs={12}
                                md={6}
                                key={index}
                                onClick={() => {
                                    if (card?.link) {
                                        window.location.href = card.link;
                                    }
                                }}
                                sx={{
                                    // backgroundColor: 'rgba(255, 255, 255, 0.5)',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        '.title-text': {
                                            backgroundImage: 'linear-gradient(350deg, #ED6FCB 38.19%, #8372F2 100%)',
                                            backgroundClip: 'text',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent',
                                        },
                                        '.avatar-icon': {
                                            transform: 'rotate(360deg)',
                                            transition: 'transform 1s ease-in-out',
                                        }
                                    }
                                }}
                            >
                                <Box
                                    display="flex"
                                    flexDirection="row"
                                    alignItems="center"
                                >
                                    <Avatar
                                        className="avatar-icon"
                                        sx={{ background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)', p: 1 }}
                                        src={card?.iconUrl ? card.iconUrl : `/images/icons/Solutions/${card.title}.svg`}
                                        alt={`Icon ${index + 1}`}
                                    />
                                    <Box ml={1.25}>
                                        <Typography
                                            variant="h6"
                                            className="title-text"
                                            sx={{
                                                fontFamily: 'Lato',
                                                fontSize: '15px',
                                                fontWeight: 700,
                                                lineHeight: '18px',
                                                textAlign: "left",
                                                color: '#FFFFFF'
                                            }}
                                        >
                                            {card?.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Lato',
                                                fontSize: '14px',
                                                fontWeight: 300,
                                                lineHeight: '21px',
                                                textAlign: "left",
                                                color: '#FFFFFF',
                                                opacity: '40%'
                                            }}
                                        >
                                            {card?.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={3}
                    sx={{
                        background: 'linear-gradient(118.08deg, #8372F2 38.57%, #ED6FCB 97.89%)',
                        height: 'inherit',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Box
                    component={'img'} src={`/images/NavBarImages/${cardImage}.svg`} alt={cardImage} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ServiceMenu;
