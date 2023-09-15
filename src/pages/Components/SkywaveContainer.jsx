import React from 'react'
import { Container } from '@mui/material';

const SkywaveContainer
    = ({ children, sx }) => (
        <Container
            maxWidth={false}
            sx={{
                position: 'relative',
                textAlign: "-webkit-center",
                px: '0 !important',
                ...sx
            }}
        >
            {children}
        </Container>
    )

export default SkywaveContainer