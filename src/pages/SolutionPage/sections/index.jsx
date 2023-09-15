import Juxtapose from '@/pages/Components/Juxtapose'
import React from 'react'
import solutionsData from './Solutions.json'
import { Box } from '@mui/material'
import SkywaveContainer from '@/pages/Components/SkywaveContainer'

const SolutionsCards
    = () => {
        return (
            <SkywaveContainer>
                <Box
                    sx={{
                        width: {
                            xs: '80vw',
                            md: '90vw'
                        },
                        textAlign: 'left'
                    }}
                >
                    <Juxtapose jsonData={solutionsData} />
                </Box>
            </SkywaveContainer>
            
        )
    }

export default SolutionsCards