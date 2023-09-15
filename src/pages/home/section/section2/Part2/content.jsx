import { Container, Typography } from '@mui/material'
import React from 'react'

const ContentRely = () => {

    const sameWidth = "90vw"

    const sametextAlign = {
        xs: 'left',
        md: 'left',
    }

    return (
        <Container
            maxWidth={false}
            sx={{
                padding: "0 !important",
                width: {
                    xs: '80vw',
                    md: '90vw'
                  },
                m: "1rem auto 3rem",
                // backgroundColor: '#941564'
            }}
        >
            <Typography
                variant="h1"
                color="#fff"
                fontFamily="Britannic Bold"
                margin="auto"
                lineHeight='1'
                width='inherit'
                fontSize='43px'
                marginBottom='1rem'
                textAlign={sametextAlign}
            // backgroundColor='cornflowerblue'
            >
                You can rely on us!
            </Typography>
            <Typography
                variant="h4"
                color="#fff"
                margin="auto"
                fontFamily="Lato"
                fontSize='17px'
                width='inherit'
                textAlign={sametextAlign}
            // backgroundColor='cornflowerblue'
            >
                A team of designers, developers, quality testers, managers all will work for your project.
            </Typography>
        </Container>
    )
}

export default ContentRely