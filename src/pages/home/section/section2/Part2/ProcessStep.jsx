import React from 'react'
import Processes from './Processes'
import { Chip, Divider } from '@mui/material'

const ProcessStepData = [
  {
    processName: "Make Real Differences",
    processDesc: "Our tailored solutions bring real changes to business processes, saving time and increasing ROI. We carefully select projects where we can make a positive impact and add value"
  },
  {
    processName: "Hand Crafted Designs",
    processDesc: "Skywave Info Solutions specializes in handcrafted, unique designs for web and mobile applications, prioritizing perfection in the look and feel."
  },
  {
    processName: "Extensive Mobility",
    processDesc: "Even if there is a lot more complex design, we ever develop responsive web/mobile applications which have perfect scene in all devices having different scaling measurements. Developing handy applications is our passion and we already have delivered successfully to lots of clients."
  },
  {
    processName: "Industry Wide Experience",
    processDesc: "We have always tried to put great values to each businesses by providing complete solution which can help them grow flawlessly. Be the part of revolution with us in changing the world with technology that makes life easier and more profit to the businesses."
  },
]

const ProcessStep = () => {

  return (
    <>
      {
        ProcessStepData.map((val, index) => (
          <div key={index}>
            <Divider
             sx={{ 
               margin:"auto",
               width: {
                xs: "100% !important",
                md: "88.2rem !important",
              },
              borderBottom: "1px solid #fff", 
              height: "0px", 
              position: "relative" 
              }} 
              >
              <Chip
                label={`${index + 1}`}
                sx={{
                  position: "absolute",
                  bottom: "-15px",
                  left: `${(index+1) * 20}%`,
                  width: "4.5rem",
                  background: "linear-gradient(118.08deg, #8372F2 38.57%, #ED6FCB 97.89%)",
                  color: "#ffffff",
                  border: "1px solid #fff",
                  transition: "left 2s",
                  '&:hover':{
                    left: "0%"
                  },
                }}
              />
            </Divider>
            <Processes processName={val.processName} processDesc={val.processDesc} num={index} />
          </div>
        ))
      }
    </>
  )
}

export default ProcessStep