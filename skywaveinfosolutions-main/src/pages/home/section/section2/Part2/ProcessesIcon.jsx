import React from 'react'
import { Grid, Typography } from '@mui/material'

const ProcessesIcon = ({ num }) => {
    return (
        <Grid
            item
            xs={3}
            padding='0'
            sx={{
                placeSelf: "center"
            }}
        >
            <Typography
                component="div"
                sx={{
                    border: "3px solid #fff",
                    width: "5rem",
                    height: "5rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <img src={`/icons/ProcessIcon/Group${num + 1}.svg`} height={45} width={45} />
            </Typography>
        </Grid>
    )
}

export default ProcessesIcon