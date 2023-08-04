import React from 'react'
import { Box } from '@mui/material';

const CircleWithContent = ({ description, imageUrl }) => {
    const circleStyle = {
      width: '345px',
      height: '345px',
      border: '3px solid purple',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      position: 'relative',
    };
  
    const logoStyle = {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      marginBottom: '16px',
      position: 'absolute',
      zindex: '1',
      top: 25,
      left:8
    };
  
    const descriptionStyle = {
      fontSize: '14px',
      textAlign: 'center',
      color: 'white',
    };
  
    return (
      <Box style={circleStyle}>
        <img src={imageUrl} alt="Logo" style={logoStyle} />
        <Box style={descriptionStyle}>{description}</Box>
      </Box>
    );
  };

  const circlesData = [
    {
      description: 'Our dedicated team of developers and designers work together on your project to pull the best results and build a product which transforms your business into automation.',
      imageUrl: '/icons/services/circleno/Group 520.png',
    },
    {
      description: 'We take care of quality and assure that the end product is the satisfied version to the client and meets requirements.',
      imageUrl: '/icons/services/circleno/Group 521.png',
    },
    {
      description: 'We use the latest tools and technologies for project development. It allows us to keep track of project development phases and get more outcome.',
      imageUrl: '/icons/services/circleno/Group 522.png',
    },
  ];
  
const CircleBox = () => {

  return (
    <Box height={'352px'} width={"90vw"} pb={15} px={5} display="flex" justifyContent="space-between" alignItems={"center"}>
          {circlesData.map((circle, index) => (
            <CircleWithContent
              key={index}
              title={circle.title}
              description={circle.description}
              imageUrl={circle.imageUrl}
            />
          ))}
        </Box>
  )
}

export default CircleBox