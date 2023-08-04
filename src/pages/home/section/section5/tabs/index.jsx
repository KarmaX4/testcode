import React from 'react';
import { Tab, Box, Tabs, Typography, Divider, Collapse } from '@mui/material';
import Container from '@mui/material/Container';
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
    <Container
      maxWidth={false}
      width="100%"
      sx={{
        paddingBlock: '10rem',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Britannic Bold',
            fontSize: {
              xs: '40px',
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
            backgroundColor: 'purple',
            height: '2px',
            mt: 2,
            mx: 'auto',
            width: '45%',
          }}
        />
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          borderBottom: 1,
          borderColor: 'secondary',
          overflowX: 'auto',
          "& .MuiTab-root": {
            fontSize: "22px",
            paddingLeft: "15px",
            textTransform: "none",
            backgroundColor: 'transparent',
            color: 'white',
            '&.Mui-selected': {
              color: 'secondary.main',
            },
          },
        }}
      >
        {tabData.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabData.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.panel}
        </TabPanel>
      ))}
    </Container>
  );
}
