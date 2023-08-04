import React from 'react'
import ProcessesIcon from './ProcessesIcon';
import ProcessesName from './ProcessesName';
import { Box, Container, Grid } from '@mui/material'

const Processes = ({ processName, processDesc, num }) => {
    let { col1, col2 } = "";
    if (num % 2 === 0) {
        col1 = <ProcessesIcon num={num} />;
        col2 = <ProcessesName processName={processName} />;
    } else {
        col2 = <ProcessesIcon num={num} />;
        col1 = <ProcessesName processName={processName} />;
    }

    return (
        <Container
            maxWidth={false}
            sx={{
                width:{
                    xs: "100% !important",
                    md: "88.2rem !important",
                },
                padding: "4rem 0"
            }}
        >
            <Box
                margin="auto"
                width={{
                    xs: "90% !important",
                    md: "inherit",
                }}
            >
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <Grid 
                            container 
                            justifyContent="center"
                            textAlign= "-webkit-center"
                            alignItems='center'
                            spacing={2}
                            py='1rem'
                            >
                            {col1}
                            {col2}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        alignSelf="left"
                        fontSize={{
                            xs: '1rem',
                            md: "1.6rem"
                        }}
                        textAlign='left'
                        sx={{
                            color: "#fff"
                        }}
                        fontFamily='Lato'
                    >
                        {processDesc}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Processes