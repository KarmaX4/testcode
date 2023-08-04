import { Container, Typography } from '@mui/material'
import React from 'react'

const ContentRely = () => {

    const sameWidth = {
        xs: "100% !important",
        md: "88.2rem !important",
    }

    const sameTextAlign = {
        xs: 'left',
        md: 'left',
    }

    return (
        <Container
            maxWidth={false}
            background="green"
            sx={{
                paddingBottom: "6rem",
                width: sameWidth
            }}
        >
            <Typography
                variant="h2"
                color="#fff"
                fontFamily="Britannic Bold"
                margin="auto"
                lineHeight='1'
                width={{
                    xs: "90% !important",
                    md: "88.2rem !important",
                }}
                textAlign={sameTextAlign}
            >
                You can rely on us!
            </Typography>
            <Typography
                variant="h4"
                color="#fff"
                margin="auto"
                fontFamily="Lato"
                fontSize='1.5rem'
                width={{
                    xs: "90% !important",
                    md: "88.2rem !important",
                }}
                textAlign={sameTextAlign}
            >
                A team of designers, developers, quality testers, managers all will work for your project.
            </Typography>
        </Container>
    )
}

export default ContentRely