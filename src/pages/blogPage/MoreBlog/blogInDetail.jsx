import SkywaveContainer from '@/pages/Components/SkywaveContainer'
import { Grid, Box, Typography, Divider, Card, CardMedia, CardContent } from '@mui/material'
import React from 'react'

const titleStyles = {
    color: '#fff',
    fontWeight: 400,
    fontFamily: 'Britannic Bold',
    letterSpacing: '0em',
};

const BlogInDetail = ({
    blogName,
    blogImage,
    blogTime,
    blogDate,
}) => {
    return (
        <SkywaveContainer
            sx={{
                py: "7rem"
            }}
        >
            <Grid
                container
                p={0}
                sx={{
                    width: '90vw',
                }}

                gap='2rem'
            >
                <Grid
                    item
                    xs={12}
                >
                    <Grid
                        container
                        spacing={5}
                    >
                        <Grid
                            item
                            xs={12}
                            sm={8}
                        >
                            <Box
                                component='img'
                                src={blogImage}
                                alt='blogImage'
                                sx={{
                                    width: '100%',
                                    aspectRatio: 2 / 1,
                                }}
                            />
                            <Typography
                                variant='h1'
                                mt='2rem'
                                sx={{
                                    ...titleStyles,
                                    fontSize: '34px',
                                    lineHeight: '34px',
                                    textAlign: 'left',
                                }}
                            >
                                {blogName}
                            </Typography>
                            <Typography
                                component='body1'
                                mt='2rem'
                                sx={{
                                    ...titleStyles,
                                    fontSize: '15px',
                                    // lineHeight: '15px',
                                    textAlign: 'left',
                                    float: 'left',
                                    fontFamily: 'Lato'
                                }}
                            >
                                <main>
                                    <p>Survey of the most of the companies 80% companies of them permits remote working. For companies who are working both remotely and in companies, by seen more complex hybrid workforce is the challenge as how people work together to get their job done evolves.</p>

                                    <p>Half said they permit employees to work remotely full time going forward. For many companies, flex time will be the new norm as fourty two percent will provide flex hours, while fourty three percent of survey respondents reported they will permit employees flex days.</p>

                                    <p>Company leader intentions regarding flexible working after COVID-19</p>
                                    
                                    <p>However, just thirteen percent of business leaders voiced concerns over sustaining productivity. While the sixty one percent of business leaders surveyed by US-based have implemented more frequent manager-employee check-ins, twenty nine percent report not taking any measures to track productivity remotely.</p>
                                    
                                    <p>HR and CHROs leaders may learn more about how to lead organizations through the disruption of coronavirus in the US-based coronavirus resource center for HR, a collection of complimentary US-based webinars and research to help organizations globally prepare, respond and manage for the next phase of COVID-19.</p>

                                    <img src="https://loremflickr.com/g/900/600/workfromhome" alt='Random Image'/><br /><br />
                                    
                                    <b>About the US-based HR Practice</b>
                                    
                                    <p>The covid-19 pandemic has caused companies to not only move much of their work to remotely, but also create support architectures and systems that may permit permanent access to remote work and other flexibility in the future.</p>
                                    
                                    <p>Employers have this formula in the recent months with announcements of permanent work arrangements. Verizon-owned phone service company Visible announced earlier this month a plan for all employees to move to regularly work-from-home status. Twitter launched a free, eight-week virtual program, called Camp Twitter, goaled at supporting working parents by permitting their children to participate in classes and other activities during the summer, Human Resource Executive reported.</p>
                                    
                                    <p>HR appears to be supportive of remote-work arrangements. But other research has found that not everyone is on board with a permanent shift: two-thirds of organizations who responded to a World at Work survey published last month.</p>
                                    
                                    <p>Some employee groups have experienced problems to remote work, however. Some of percentages of Latino and Hispanic and Black or African American workers were able to work from home compared to their Asian and white counterparts.</p>

                                    <p>Here are some US Companies Hiring employees with Home Based Workforce</p>
                                    
                                    <p>Pearson Online & Blended Learning: In the field of personalized module development and education, join in as a software writer as well as teacher or as a content developer.</p>
                                </main>
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={4}
                        >
                            <Box
                                sx={{
                                    background: 'linear-gradient(162.78deg, #8372F2 35.17%, #ED6FCB 91.89%)',
                                    borderRadius: '6px',
                                    py: '1rem',
                                    position: '-webkit-sticky',
                                    position: 'sticky',
                                    top: '6rem',
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...titleStyles,
                                        fontSize: '24px',
                                        fontWeight: 400,
                                        lineHeight: '24px',
                                        letterSpacing: '0em',
                                    }}
                                >
                                    RECENT POSTS
                                </Typography>
                                <Divider variant="middle"
                                    sx={{
                                        border: '2px solid rgb(255 255 255)',
                                        borderBottomWidth: 'thin',
                                        width: '8rem',
                                    }}
                                />
                                <Card sx={{ display: 'flex', m: '2rem', gap: '1rem', backgroundColor: '#fff0', boxShadow: 'none'}}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '40%' }}
                                        image="/images/blog/MoreBlogs/80-us-based-companies-offering-to-employees-permanent-work-from-home-remote-work-survey-2021.svg"
                                        alt="Live from space album cover"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column',  }}>
                                        <CardContent
                                            sx={{
                                                ...titleStyles,
                                                padding: 0,
                                                fontSize: '15px',
                                                fontWeight: 400,
                                                lineHeight: '15px',
                                                letterSpacing: '0em',
                                                textAlign: 'left'
                                            }}
                                        >
                                            Skywave Info Solutions Is A
                                            Clutch Top Indian Development
                                            Company For 2022
                                        </CardContent>
                                        <CardContent
                                            sx={{
                                                ...titleStyles,
                                                padding: '0 !important',
                                                fontSize: '15px',
                                                fontWeight: 400,
                                                lineHeight: '15px',
                                                letterSpacing: '0em',
                                                textAlign: 'left'
                                            }}
                                        >
                                            August 12, 2023
                                        </CardContent>
                                    </Box>
                                </Card>
                                <Card sx={{ display: 'flex', m: '2rem', gap: '1rem', backgroundColor: '#fff0', boxShadow: 'none'  }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: '40%' }}
                                        image="/images/blog/MoreBlogs/80-us-based-companies-offering-to-employees-permanent-work-from-home-remote-work-survey-2021.svg"
                                        alt="Live from space album cover"
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent
                                            sx={{
                                                ...titleStyles,
                                                padding: 0,
                                                fontSize: '15px',
                                                fontWeight: 400,
                                                lineHeight: '15px',
                                                letterSpacing: '0em',
                                                textAlign: 'left'
                                            }}
                                        >
                                            Skywave Info Solutions Is A
                                            Clutch Top Indian Development
                                            Company For 2022
                                        </CardContent>
                                        <CardContent
                                            sx={{
                                                ...titleStyles,
                                                padding: '0 !important',
                                                fontSize: '15px',
                                                fontWeight: 400,
                                                lineHeight: '15px',
                                                letterSpacing: '0em',
                                                textAlign: 'left'
                                            }}
                                        >
                                            August 12, 2023
                                        </CardContent>
                                    </Box>
                                </Card>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        ...titleStyles,
                        fontSize: '14px',
                        lineHeight: '20px',
                        textAlign: 'center',
                        letterSpacing: '0.08em',
                    }}
                >
                    Category: News By skywave August 27, 2021
                </Grid>
                <Grid
                    item
                    xs={12}
                    sx={{
                        // backgroundColor: 'yellow'
                    }}
                >
                    <Grid
                        container
                    >
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                            }}
                        >
                            <Typography
                                sx={{
                                    ...titleStyles,
                                    fontSize: '20px',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                }}
                            >
                                {'<  '}PREVIOUS
                            </Typography>
                            <Typography
                                sx={{
                                    ...titleStyles,
                                    fontSize: '20px',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    width: '80%'
                                }}
                            >
                                80% US-based Companies Offering to Employees Permanent Work From Home : Remote Work Survey 2021
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={6}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                            }}
                        >
                            <Typography
                                sx={{
                                    ...titleStyles,
                                    fontSize: '20px',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    textAlign: 'right',
                                }}
                            >
                                NEXT{'  >'}
                            </Typography>
                            <Typography
                                sx={{
                                    ...titleStyles,
                                    fontSize: '20px',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    textAlign: 'right',
                                    width: '80%'
                                }}
                            >
                                80% US-based Companies Offering to Employees Permanent Work From Home : Remote Work Survey 2021
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </SkywaveContainer>
    )
}

export default BlogInDetail