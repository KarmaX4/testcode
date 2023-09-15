// BlogCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const BlogCard = ({ imageUrl, title, blogUrl, font }) => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>
      <Box
        sx={{ width: '100%', height: 'auto', position: 'relative', overflow: 'hidden' }}
      >
        <CardMedia component="img" alt="Blog Image" image={imageUrl} sx={{ borderRadius: '0.6rem' }} />
        <Box
          component={'img'} src='/Logo/Icon + name.svg' height={'10%'} alt='Logo' style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#000', padding: '1.2rem 1.5rem' }} />
      </Box>
      <CardContent
        sx={{
          padding: '0 !important'
        }}
      >
        <Typography component="div" display="flex" alignItems="center" mt='4vh'>
          <Button
            variant="contained"
            size="1"

            // p={2}
            sx={{

              padding: '6px 30px',
              fontSize: "20px",
              textTransform: 'none',
              background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
              borderRadius: '25px',
              marginRight: '2px',
              '&:hover + #arrowBox': {
                opacity: 1,
                transform: 'translateX(50%)',
              },
            }}
            href={blogUrl}
            target="_blank"
          >
            Read Article
          </Button>
          <Box
            id="arrowBox"
            sx={{
              borderRadius: '25px',
              color: '#9AABDB',
              fontWeight: 100,
              height: '44px',
              width: '44px',
              border: '2px solid #9AABDB',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '26px',
              opacity: 0,
              transition: 'all 0.2s ease-in-out',
            }}
          >
            &rarr;
          </Box>
        </Typography>
        <Typography color="#fff" sx={{ fontFamily: 'Lato', fontWeight: 600, paddingTop: 2, fontSize: font }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
