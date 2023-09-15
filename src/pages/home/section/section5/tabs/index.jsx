import React from 'react';
import { Tab, Box, Tabs, Typography, Divider, Collapse } from '@mui/material';
import MobileTabPanel from './tabpanels/MobileTabPanel';
import DatabaseTabPanel from './tabpanels/DatabaseTabPanel';
import FrameworksTabPanel from './tabpanels/FrameworksTabPanel';
import CloudTabPanel from './tabpanels/CloudTabPanel';
import DevOpsTabPanel from './tabpanels/DevOpsTabPanel';
import FrontendTabPanel from './tabpanels/FrontendTabPanel';
import BackendTabPanel from './tabpanels/BackendTabPanel';
import EcommerceTabPanel from './tabpanels/EcommerceTabPanel';
import CRMTabPanel from './tabpanels/CRMTabPanel';
import PlatformsTabPanel from './tabpanels/PlatformsTabPanel';

const tabData = [
  { label: 'Frontend', panel: <FrontendTabPanel /> },
  { label: 'Backend', panel: <BackendTabPanel /> },
  { label: 'Mobile', panel: <MobileTabPanel /> },
  { label: 'Database', panel: <DatabaseTabPanel /> },
  { label: 'Frameworks', panel: <FrameworksTabPanel /> },
  { label: 'Cloud', panel: <CloudTabPanel /> },
  { label: 'DevOps', panel: <DevOpsTabPanel /> },
  { label: 'Ecommerce', panel: <EcommerceTabPanel /> },
  { label: 'CRM', panel: <CRMTabPanel /> },
  { label: 'Platforms', panel: <PlatformsTabPanel /> },
];

export default function Taboptions() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = ({ index, value, children }) => (
    <Collapse in={index === value} timeout={300}>
      <Box p={3}>{children}</Box>
    </Collapse>
  );

  return (
    <Box
      width={{
        xs: '80vw',
        md: '90vw'
      }}
      margin='auto'
      sx={{
        p: {
          xs: '2rem 0 5rem 0',
          md: '5rem 0 10rem 0'
        },
        // backgroundColor: 'blue'
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Britannic Bold',
            fontSize: {
              xs: '43px',
              md: '64px'
            },
            fontWeight: 400,
            lineHeight: '50px',
            letterSpacing: '-0.005em',
            color: 'white',
          }}
        >
          Technologies and Platforms We Use
        </Typography>
        <Divider
          sx={{
            background: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
            height: '1px',
            mt: 2,
            mx: 'auto',
            width: '55%',
          }}
        />
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        textColor="secondary"

        aria-label="secondary tabs example"
        sx={{
          '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 2, // Customize the indicator height
              backgroundImage: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
            },
          },
          mb: 6,
          px: {
            sm: 10, xs: 1
          },
          borderBottom: 1,
          // borderColor: 'secondary',
          overflowX: 'auto',
          "& .MuiTab-root": {
            justifyContent: {
              xs: 'normal',
              md: 'center'
            },
            fontSize: "22px",
            paddingLeft: {
              xs: '10px',
              md: "15px"
            },
            textTransform: "none",
            backgroundColor: 'transparent',
            color: 'white',
            '&.Mui-selected': {
              // color: 'secondary.main',
              backgroundImage: 'linear-gradient(108.46deg, #8372F2 38.19%, #ED6FCB 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            },
          },
          '& .css-heg063-MuiTabs-flexContainer': {
            justifyContent: {
              xs: 'normal',
              // md: 'center'
            }
          },
          '& .css-ptiqhd-MuiSvgIcon-root': {
            fill: '#ca25ffed',
            height: '100%',
            width: '100%',
            '&:hover': {
              fill: '#995ceb',
            }
          }
        }}
      >
        {tabData.map((tab, index) => (
          <Tab sx={{
            mr: { sm: 8 },
            fontSize: {
              xs: '19px'
            }
          }} key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabData.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.panel}
        </TabPanel>
      ))}
    </Box>
  );
}
