import SkywaveContainer from '@/pages/Components/SkywaveContainer'
import Headtitle from '@/pages/titles/headtitle'
import { Box, Card, CardContent, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'

import Hr from './HrServiceData.json'

const Hx = 'Human';
const Rx = 'Resource';

const cursorCustom = {
    cursor: 'context-menu',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
}

const printVertical = (inputString) => {
    const characters = inputString.split('');
    const verticalCharacters = characters.map(char => char + '\n'); 

    const result = verticalCharacters.join(''); 
    return result;
}

const VerticalCharacters = ({ char }) => (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            my: 10,
            ...cursorCustom
        }}
    >
        <Typography
            variant='h1'
            textTransform='uppercase'
            fontFamily='BRITANNIC BOLD'
            lineHeight='1'
            color='#282828'
            fontSize={{
                xs: '3.7rem',
                md: '6rem',
            }}
            sx={{
                whiteSpace: 'pre-line',
                textAlign: 'left',
                ...cursorCustom
            }}
        >
            {printVertical(char)}
        </Typography>
        <Typography
            variant='h1'
            color='#954155'
            textTransform='uppercase'
            fontFamily='BRITANNIC BOLD'
            sx={{
                whiteSpace: 'pre-line',
                fontSize: {
                    xs: '25rem',
                    sm: '35rem',
                    md: '41rem'
                },
                lineHeight: '0.7',
                background: '-webkit-linear-gradient(#eee, #333)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                background: 'linear-gradient(141.38deg, #8372F2 36.5%, #ED6FCB 96.36%)',
                backgroundClip: 'text',
                color: 'transparent',
                ...cursorCustom
            }}
        >
            {char?.split('')[0]}
        </Typography>
    </Box>
)

const HrCard = ({ title, lists, color }) => (
    <Card variant="outlined"
        sx={{
            backgroundColor: {xs: '#1919197d', md: '#4a4a4a33'},
            borderRadius: '16px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(7px)',
            WebkitBackdropFilter: 'blur(7px)',
            width: {
                xs: '20rem',
                md: '25rem'
            }
        }}
    >
        <CardContent>
            <Typography variant='h1'
                sx={{
                    fontFamily: 'Lato',
                    fontSize: '32px',
                    fontWeight: 400,
                    lineHeight: '38px',
                    textAlign: 'left',
                    paddingLeft: '1rem',
                    whiteSpace: 'pre-line',
                    '&:before': {
                        content: '"\\007C"',
                        color: color,
                        fontWeight: 'bold',
                        display: 'inline-block',
                        width: '1rem',
                        marginLeft: '-1rem'
                    },
                }}
                color='#fff'
            >
                {title}
            </Typography>
            <List>
                {lists?.map((item, itemIndex) => (
                    <ListItem key={itemIndex}
                        sx={{
                            fontFamily: 'Lato',
                            fontSize: '21px',
                            fontWeight: 400,
                            lineHeight: '31px',
                            letterSpacing: '0em',
                            color: '#fff',
                            textAlign: 'left',
                            '&:before': {
                                content: '"\\2022"',
                                color: color,
                                fontWeight: 'bold',
                                display: 'inline-block',
                                width: '1em',
                                marginLeft: '-1em',
                                position: 'absolute',
                                top: '7px',
                            },
                        }}
                    >{item}</ListItem>
                ))}
            </List>
        </CardContent>
    </Card>
)

const HRService = () => {
    return (
        <SkywaveContainer
            sx={{
                py: 10,
                position: 'relative',
            }}
        >
            <Headtitle title='HR Services' leftCircle />
            <Box
                sx={{
                    position: 'relative',
                    width: '90vw'
                }}
            >
                <Box
                    position={{
                        xs: 'sticky',
                        md: 'absolute'
                    }}
                    // backgroundColor='#951623'
                    top={{
                        xs: '5rem',
                        md: '10%'
                    }}
                >
                    <VerticalCharacters char={Hx} />
                    <VerticalCharacters char={Rx} />
                </Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    // spacing={10}
                    gap={5}
                    mt={10}
                >
                    {Hr.HrService?.map((service, index) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            md={4.3}
                        >
                            <Grid container gap={5}>
                                {
                                    service?.map((card, index) => (
                                        <Grid key={index} item xs={12}>
                                            <HrCard title={card.title} lists={card.list} color={card.color} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SkywaveContainer>
    )
}

export default HRService