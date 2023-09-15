import { Box, Button } from "@mui/material"

function NotFoundPage() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                my: '4rem'

            }}>
                <Box
                    component={"img"}
                    src={'/images/404/404.svg'}
                    alt="404"
                    sx={{
                        height: '60vh',
                        width: {
                            xs: '50vh',
                            sm: 'auto'
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                />
                <Button variant="contained"
                    href="/"
                    sx={{
                        fontWeight: 600,
                        fontFamily: 'Lato',
                        padding: '10px 20px',
                        mt: '2.5rem',
                        background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                        borderRadius: '25px',
                        '&:hover': {
                            background: 'linear-gradient(70.46deg, #ED6FCB 38.19%, #8372F2 100%)',
                            transform: 'scale(1)',
                            boxShadow: 'rgb(130 106 223) 0px 1px 2px 1px',
                        }
                    }}>
                    Back to Home
                </Button>

            </Box>
        </>
    )
}

export default NotFoundPage