import { Box, Typography } from '@mui/material';
import React from 'react';

const Headtitle = ({ title = '', subTitle = '', showDivider = false }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      {title && (
        <div style={{ position: 'relative' }}>
          <Typography
            variant="h3"
            fontSize="large"
            fontFamily="Britannic Bold"
            color="#fff"
            sx={{
              fontSize: "64px"
            }}
          >
            {title}
          </Typography>
          {showDivider && (
            <div
              style={{
                width: '70%', 
                height: '3px', 
                background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
                margin: 'auto',
                marginTop: '8px', 
              }}
            />
          )}
        </div>
      )}
      {subTitle && (
        <Typography
          variant="span"
          color="#9AABDB"
          fontFamily="Lato"
        >
          {subTitle}
        </Typography>
      )}
    </Box>
  );
}

export default Headtitle;
