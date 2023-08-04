import { Grid, Typography } from '@mui/material'
import React from 'react'

const ProcessesName = ({ processName }) => {
    return (
        <Grid 
            item 
            xs={9}
        >
            <Typography
                variant="h3"
                widthy="fit-content"
                display= "contents"
                fontSize='2rem'
                sx={{
                    display: "flex",
                    textAlign: "left",
                    color: "#fff"
                }}
            >
                {processName}
            </Typography>
        </Grid>
    )
}

export default ProcessesName