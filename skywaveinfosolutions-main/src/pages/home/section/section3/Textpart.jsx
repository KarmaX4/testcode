import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const texts = [
  [
    'Requirement Gathering',
    'Gathering requirements is a very important',
    'step in the project development cycle. We',
    'understand every instance and also give',
    'enhancement ideas.',
  ],
  [
    'Design and Prototyping',
    'Design and prototyping are crucial to',
    'visualize the project before development.',
    'We create interactive prototypes to gather',
    'feedback from stakeholders.',
  ],
  [
    'Development and Testing',
    'Our team of skilled developers works on',
    'developing the project while following',
    'best practices. Rigorous testing is',
    'performed to ensure quality.',
  ],
  [
    'Deployment and Support',
    'We assist in deploying the project to',
    'the production environment and continue',
    'to provide support and maintenance',
    'to meet your needs.',
  ],
];

const TextComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentTextGroup = texts[currentIndex];

  return (
    <Box
      width="100%"
      textAlign="center"
      fontSize={{
        xs: 'x-large',
        md: 48
      }}
      color="#fff"
      fontFamily="Britannic Bold"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      zIndex={4}
    >
      <Box
        lineHeight="5rem"
      >
        {currentTextGroup[0]}
      </Box>
      <Box
        fontSize={21.41}
        letterSpacing="0.02em"
        // lineHeight="22.38px"
        fontWeight={600}
        fontFamily="Lato"
      >
        {currentTextGroup.slice(1).map((text, index) => (
          <Typography component="p" key={index} style={{ marginBlockEnd: '3.21px' }}>
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default TextComp;