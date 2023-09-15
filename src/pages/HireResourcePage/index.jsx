import React from 'react'
import MainBanner from '../bannner/mainBanner'
import HireData from './HireData'
import Navbar from '../navbar';
import MainFooter from '../footer/mainFooter';
import NotFoundPage from '@/app/not-found';
import { Box } from '@mui/material';
import HireS1 from './section1';
import NummberSection from './numberSection';
import HireS2 from './section2';
import Section3 from './section3';
import HireS3 from './section3';
import HireS4 from './section4';
import HireS5 from './section5';

const HireResourcePage = ({ hrName }) => {
  const filtered = HireData?.filter((val) => {
    return val.link === hrName;
  });

  return (
    <>
      {filtered.length > 0 ? (
        <>
          <Navbar />
          {filtered?.map((val, index) => (
            <React.Fragment key={index}>
              <MainBanner key={index} title={val?.title} subtitle={val?.subtitle} description={`Home / ${val.discription}`} imageUrl={`/Avatar/Hire android.svg`} flyBackground  hire/>
              <HireS1 data={val?.s1} />
              <NummberSection />
              <HireS2 data={val?.s2} />
              <HireS3 data={val?.s3} />
              <HireS4 data={val?.s4} />
              <HireS5 data={val?.s5} />
            </React.Fragment>
          ))}
          <Box mb={25} />
          <MainFooter />
        </>
      ) : (
        <NotFoundPage />
      )}
    </>


  )
}

export default HireResourcePage