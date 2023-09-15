"use client";
import React, { useState } from 'react';
import { Grid, Container, Button, Box } from '@mui/material';
import BlogCard from '@/pages/Components/blog.Component';
import jsonData from '@/data/blogsData.json';


const OurBlogs = () => {
    const [blogItems, setBlogItems] = useState(4);
    const [isAnimating, setIsAnimating] = useState(false); 
    const increment = 4;

    const loadMore = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setBlogItems(blogItems + increment);
            setIsAnimating(false);
        }, 1000);
    };

   

    return (
        <Container maxWidth={false} sx={{ width: '90vw', mb:{xs: '20rem', sm: '12rem'} }}>
            <Grid container spacing={5}>
                {jsonData.slice(0, blogItems).map((val, index) => (
                    <Grid key={index} item xs={12} md={6} mb="0.5rem">
                        <BlogCard imageUrl={val.imageUrl} blogUrl={val.blogUrl} title={val.title}  font={{xs: "18px", sm: "27px"}} />
                    </Grid>
                ))}
            </Grid>
            {blogItems < jsonData.length && (
                <Box
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    <Button
                        variant="contained"
                        color="primary"
                       
                        disabled={isAnimating}
                        sx={{
                            p:"12px 35px",
                            fontSize: "22px",
                            background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                            borderRadius: '25px',
                            marginTop: '30px',
                            color: '#fff !important'
                        }}
                        onClick={loadMore}
                    >
                        {isAnimating ? 'Loading...' : 'Load More'}
                    </Button>
                </Box>
            )}
        </Container>
    );
};

export default OurBlogs;
