import { Button } from '@mui/material'
import React from 'react'

// placeholder => Button View NAme
// link => Navigation 
// position => if parameter write the it will default absolute other wise relative.

const SkywaveButton = ({ placeholder, link, position = false }) => {
    return (
        <Button
            href={link}
            variant="contained"
            fontSize='2rem'
            sx={{
                padding: '8px 40px',
                textTransform: 'none',
                background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                borderRadius: '25px',
                marginTop: '30px',
                position: position ? 'absolute' : 'relative',
                bottom: 0,
                bottom: {
                    xs: '-1.25rem',
                    sm: '-1.25rem',
                    md: '-1.25rem'
                },
                '&:after': {
                    content: '"\\00BB"',
                    position: "absolute",
                    fontSize: '2rem',
                    right: '17px',
                    bottom: '-3.5px',
                    opacity: 0,
                    transition: 'opacity 200ms ease-in-out',
                },
                '&:hover::after': {
                    opacity: {
                        xs: 0,
                        md: 1
                    },
                },
            }}
        >
            {placeholder}
        </Button>
    )
}

export default SkywaveButton