import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const PortFolioCard = ({ imageUrl, title, description, url }) => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: 'transparent', color: 'white', border: 'none' }}>
      <Box
        sx={{ width: '100%', aspectRatio: '4/2.4', position: 'relative', overflow: 'hidden'}}
      >
        <CardMedia component="img" alt="Blog Image" image={imageUrl} sx={{borderRadius: '0.6rem'}} />
      </Box>
      <CardContent sx={{mt:'3vh', padding:' 1rem 1rem 1rem 0'}}>
        <Typography
          sx={{
            fontFamily: 'Lato',
            fontSize: '37px',
            fontWeight: 700,
            lineHeight: '30px',
            letterSpacing: '0.045em',
            textAlign: 'left',
            color: '#FFFFFF',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Lato',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '21px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#A3A3A3',
            marginTop: '0.7rem',
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PortFolioCard;
