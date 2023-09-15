import React from 'react'
import ProcessesIcon from './ProcessesIcon';
import ProcessesName from './ProcessesName';
import { Container, Grid, Typography } from '@mui/material'

const Processes = ({ processName, processDesc, num }) => {

    return (
        <Container
            maxWidth={false}
            sx={{
                width: {
                    xs: '80vw',
                    md: '90vw'
                  },
                padding: "4rem 0 !important",
            }}
        >
            <Grid container
                alignItems='center'
            >
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        m: {
                            xs: '0 0 2rem',
                            sm: '0',
                        }
                    }}
                >
                    {num % 2 === 0 ? (
                        <>
                            <ProcessesIcon num={num} />
                            <ProcessesName num={num} processName={processName} />
                        </>
                    ) : (
                        <>
                            <ProcessesName num={num} processName={processName} />
                            <ProcessesIcon num={num} />
                        </>
                    )}
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={6}
                    sx={{
                        paddingLeft: '0 !important',
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 500,
                            letterSpacing: '0',
                            color: "#fff",
                            fontSize: {
                                xs: '15px',
                                md: '20px',

                            },
                            lineHeight : {
                                xs: '18px',
                                md:'29px'
                            },
                            textAlign: 'left',
                            marginLeft: {
                                xs: 0,
                                sm: '2rem',
                                md: 0
                            },
                            fontFamily: 'Lato',
                            // backgroundColor: '#952369',
                            padding: '0 !important',
                        }}
                    >
                        {processDesc}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Processes