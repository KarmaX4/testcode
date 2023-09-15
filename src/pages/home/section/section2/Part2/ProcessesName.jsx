import { Grid, Typography } from '@mui/material';
import React from 'react';

const splitWords = (text) => {
  if (typeof text !== 'string') {
    return '';
  }

  const words = text.split(' ');
  const result = [];
  let line = '';

  for (const word of words) {
    if ((line + ' ' + word).length <= 14) {
      line += (line ? ' ' : '') + word;
    } else {
      result.push(line);
      line = word;
    }
  }

  if (line) {
    result.push(line);
  }

  return result.join('\n');
};

const ProcessesName = ({ processName, num }) => {
  return (
    <Grid
      item
      // xs={6}
      sx={{
        textAlign: "left",
        // backgroundColor: 'blue',
        padding: '0 !important'
      }}
      order={num % 2 === 0 ? 2 : 1}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          fontSize: '2rem',
          whiteSpace: 'pre-line',
        }}
      >
        {splitWords(processName)}
      </Typography>
    </Grid>
  );
}

export default ProcessesName;
