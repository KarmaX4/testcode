"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red, green, blue} from '@mui/material/colors';

const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.only('xs')]: {
    backgroundColor: green[500],
  },
}));

export default function MediaQuery() {
  return (
    <Root>
      <Typography>screen above 900: red md(up)</Typography>
      <Typography>screen within 600-900: blue md(down) </Typography>
      <Typography>screen with below 600: green sx</Typography>
    </Root>
  );
}