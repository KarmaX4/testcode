import React from 'react'
import { Box, Button } from '@mui/material';

const SocialButton = ({ title, themeColor }) => {

  const lowercaseTitle = title?.toLowerCase();
  const platformUrls = {
    facebook: 'https://www.facebook.com/SkywaveInfoSolutions/',
    instagram: 'https://www.instagram.com/skywave_infosolutions/',
    twitter: 'https://twitter.com/SkywavePvt',
    youtube: 'https://www.youtube.com/@skywaveinfosolutionspvtltd7949',
    linkedin: 'https://in.linkedin.com/company/skywave-infotech',
    behance: 'https://behance.com/',
    dribbble: 'https://dribbble.com/',
  };
  const link = platformUrls[lowercaseTitle] || '';

  const xSize = {
    xs: '3rem',
    sm: '3rem',
    md: '4rem',
    lg: '5rem',
  }

  return (
    <Button
      href={link}
      target="_blank"
      sx={{
        width: {
          ...xSize
        },
        height: {
          ...xSize,
          xs: '4rem',
          sm: '4rem',
        },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: '#2F2F2F',
        transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
        '&:hover': {
          background: themeColor,
          transform: 'scale(1.1)',
        },
      }}
    >
      <Box
        component={'img'}
        src={`/images/icons/Social/_${title}.svg`}
        alt={title}
        sx={{ height: '60%', width: '60%' }} />
    </Button>
  )
}

export default SocialButton