import SkywaveContainer from '@/pages/Components/SkywaveContainer'
import React from 'react'
import { Box } from '@mui/material';
import SectionDetailContent from './content';
import webJSON from './webContentData.json';

const WebsiteD_Section = ({ screens, folderName }) => {
  return (
    <SkywaveContainer>
      <Box
        width='90vw'
      >
        {
          screens?.map((val, index) => <SectionDetailContent key={index} index={index + 1} text={val.name} contentWidth={val?.width} lastContent={webJSON.screens.length} appName={folderName} />)
        }
      </Box>
      <Box sx={{
        margin: '5rem'
      }}>
        <iframe style={{ border: 'none' }} width="100%" height="900" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqPG7ZE0d9WIifSnVPjts8A%2FAll-about-my-dolls%3Fpage-id%3D440%253A6695%26type%3Ddesign%26node-id%3D1636-14258%26viewport%3D961%252C451%252C0.18%26t%3D0oCFc1nNMI1Hbh9z-1%26scaling%3Dscale-down-width%26starting-point-node-id%3D441%253A14093%26mode%3Ddesign" allowfullscreen></iframe>
      </Box>
      <Box sx={{
        margin: '5rem'
      }}>
        <iframe style={{ border: 'none' }}width="100%"  height="950" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FD05fr50RNZQLTl69WmhGTr%2FClub-match%3Fnode-id%3D575-1874%26starting-point-node-id%3D575%253A1874%26scaling%3Dscale-down%26mode%3Ddesign%26t%3D9EXOK1YtM44c1xSv-1" allowfullscreen></iframe>
      </Box>
    </SkywaveContainer>
  )
}

export default WebsiteD_Section