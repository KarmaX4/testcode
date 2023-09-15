import React from 'react'
import { Container, Box } from '@mui/material';
import Headtitle from '@/pages/titles/headtitle';
import SocialButton from '@/pages/Components/SocialButton';

const GetSocial
    = () => {

        const socialPlatforms = [
            { name: 'Facebook', themeColor: '#3b5998' },
            { name: 'Instagram', themeColor: 'radial-gradient(circle at 33% 100%, #FED373 4%, #F15245 30%, #D92E7F 62%, #9B36B7 85%, #515ECF)' },
            { name: 'Twitter', themeColor: '#1da1f2' },
            // { name: 'Dribbble', themeColor: 'linear-gradient(45deg, #444444, #ea4c89, #8aba56, #ff8833, #00b6e3, #9ba5a8)' },
            { name: 'Dribbble', themeColor: '#ea4c89' },
            { name: 'Youtube', themeColor: '#c4302b' },
            { name: 'Linkedin', themeColor: 'linear-gradient(45deg, #0077b5, #0097d8)' },
            { name: 'Behance', themeColor: 'linear-gradient(45deg, #1769ff, #831ab1)' },
        ];

        const buttonsPerRow = 4;

        const renderButtonRow = (startIndex) => {
            return (
                <Box key={startIndex} display="flex" justifyContent="center" width="100%" mt={2}>
                    {socialPlatforms.slice(startIndex, startIndex + buttonsPerRow).map(platform => (
                        <Box
                            key={platform.name}
                            minWidth={0}
                            sx={{
                                padding: '10px 1.5rem',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <SocialButton title={platform.name} themeColor={platform.themeColor} />
                        </Box>
                    ))}
                </Box>
            );
        }

        return (
            <Container
                maxWidth={false}
                sx={{
                    // backgroundColor: '#000',
                    paddingBottom: '7rem'
                    // paddingBottom: '15rem'
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        padding: '5rem 0'
                    }}
                >
                    {/* Don't Touch */}
                    <Box
                    component={'img'} src="/images/HoloCirclefilled.svg"
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            height: '35%',
                            right: '-9.2rem',
                        }}
                    />

                    {/* Don't Touch */}
                    <Headtitle title="Let's get social!" subTitle='Check out our social profiles!' />
                    <Box
                        py={7}
                    >
                        {Array.from({ length: Math.ceil(socialPlatforms.length / buttonsPerRow) }, (_, index) =>
                            renderButtonRow(index * buttonsPerRow)
                        )}
                    </Box>
                </Box>
            </Container>
        )
    }

export default GetSocial