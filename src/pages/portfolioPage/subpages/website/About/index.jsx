import React from 'react'
import { Box } from '@mui/material';
import AboutDetailContent from './content';
import SkywaveContainer from '@/pages/Components/SkywaveContainer';

const AboutDetailPage = ({ about }) => {
    return (
        <SkywaveContainer>
            <Box
                width='90vw'
            >
                <AboutDetailContent
                    content={about?.content}
                    imageUrl={about?.imageUrl}
                />
            </Box>
            <Box
                component='img'
                src='/images/portfolio/websiteDetail/AboutArrow.svg'
                alt='Background About Arrow'
                position='absolute'
                sx={{
                    left: 0,
                    zIndex: -1,
                    bottom: 0,
                }}
            />
        </SkywaveContainer>
    )
}

export default AboutDetailPage