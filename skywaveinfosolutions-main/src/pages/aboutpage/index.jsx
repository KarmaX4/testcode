import React from 'react'
import Navbar from '../navbar'
import MainBanner from '../bannner/mainBanner'
import AS1 from './section1'
import AS2 from './section2'
import AS3 from './section3'
import MainFooter from '../footer/mainFooter'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <MainBanner
        title="About"
        subtitle="Skywave"
        description="Who we are & what we do"
        imageUrl={"/Avatar/peep-bg 1.png"}
        imgBackground
      />
      <AS1 />
      <AS2/>
      <AS3/>
      <MainFooter/>
    </>


  )
}

export default AboutPage