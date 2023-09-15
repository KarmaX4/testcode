import React from 'react'
import Bussiness from './Part1/Bussiness'
import ProcessRely from './Part2'
import { Box } from '@mui/material'
import NummberCard from '../section3/nameBanner'

const Section2 = () => {
    return (
        <Box mb={10}>
            <Bussiness />
            <Box sx={{ backgroundColor: '#18181C', borderRadius:'50px 50px 0px 0px', py:10}}>
                <ProcessRely />
                <NummberCard/>
            </Box>
        </Box>
    )
}

export default Section2