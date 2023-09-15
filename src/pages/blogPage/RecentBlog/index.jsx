// RecentBlog.js
import BlogCard from '@/pages/Components/blog.Component';
import Headtitle from '@/pages/titles/headtitle';
import { Box, Container, Grid } from '@mui/material';
import React from 'react';

const RecentBlogData = [
    {
        imageUrl: "/images/blog/Blogs/Clutch_Top_Indian.jpg",
        blogUrl: 'https://www.skywaveinfosolutions.com/impact-of-artificial-intelligence-in-software-development/',
        title: "Skywave Info Solutions Is A Clutch Top Indian Development Company For 2022",
    },
    {
        imageUrl: "/images/blog/Blogs/eEmpPerWFH.jpg",
        blogUrl: 'https://www.skywaveinfosolutions.com/impact-of-artificial-intelligence-in-software-development/',
        title: "80% US-based Companies Offering to Employees Permanent Work From Home : Remote Work Survey 2021",
    },
    {
        imageUrl: "/images/blog/Blogs/top-trends-fetures.jpg",
        blogUrl: 'https://www.skywaveinfosolutions.com/impact-of-artificial-intelligence-in-software-development/',
        title: "Top Trends Features & Types in healthcare apps",
    },
]

const RecentBlog = () => {
    return (
        <Container maxWidth={false} sx={{ width: '90vw' }}>
            <Headtitle title="Recent Blog Posts" />
            <Grid container spacing={2} my={5}>
                <Grid item xs={12} md={9}>
                    <BlogCard
                        font={{ xs: "18px", sm: "38px" }}
                        imageUrl={RecentBlogData[0].imageUrl}
                        blogUrl={RecentBlogData[0].blogUrl}
                        title={RecentBlogData[0].title}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <BlogCard
                        font={{ xs: "18px", sm: '16.38px' }}
                        imageUrl={RecentBlogData[1].imageUrl}
                        blogUrl={RecentBlogData[1].blogUrl}
                        title={RecentBlogData[1].title}
                    />
                    <Box mb='2.5rem' />
                    <BlogCard
                        font={{ xs: "18px", sm: '16.38px' }}
                        imageUrl={RecentBlogData[2].imageUrl}
                        blogUrl={RecentBlogData[2].blogUrl}
                        title={RecentBlogData[2].title}
                    />
                    <Box mb='0rem' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default RecentBlog;
