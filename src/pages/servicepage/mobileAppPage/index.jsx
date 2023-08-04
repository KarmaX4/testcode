'use client'
import MainBanner from '@/pages/bannner/mainBanner'
import Navbar from '@/pages/navbar'
import React from 'react'
// import ServicesSections from './sections'
// import mobileSectionsData from './sections/mobileSectionsData'
import ContactBanner from '@/pages/bannner/contactbanner'
import Footer from '@/pages/footer'



const mobileSectionsData = [
  {
    title: 'iOS App',
    subTitle: 'Development',
    description: 'Build top notch iOS applications with an experienced team',
    subdescription: "Top iPhone Apps Development Company in Ahmedabad, India/USA/Canada, Skywave offers best-in-class custom iOS App Development Services around the globe using in-house team of Apple Watch/iPad /iPhone App developers. Our mastercoders of iPhone app development  team walk and talk in Objective-C and Swift while being passionate  about Apple’s Cocoa and Cocoa Touch frameworks. We design, develop  and launch iOS apps on App Store which are compatible to new  generation of iPhones/iPads with latest version of iOS 16. We prefer to use the latest and the most popular IDE (Xcode) that will spice up  the UX and will fuel your iPhone and iPad apps.",
    imageSrc: "/images/services/Mobile/mobileService1.svg",
  },    
  {
    title: 'Android App',
    subTitle: 'Development',
    description: 'Don’t miss out on major audiences using Android devices in the World',
    subdescription: 'Skywave Info Solutions is a leading Android App Development Company in India, USA and Canada with 10+ experience in providing custom Android App Development Services globally. Hire expert Android app developers from us who hold proficiency to create custom Android app that works on all Android devices and latest OS versions like Oreo and Android P Beta versions. Android App Developers at Skywave use their strong command over Kotlin, Java, C, C++ HTML, CSS that helps them to code top-notch hybrid Android Application Development Services and Solutions for almost all the industry categories on Google Play Store.',
    imageSrc: "/images/services/Mobile/mobileService1.svg",
  },
  {
    title: 'React Native App',
    subTitle: 'Development',
    description: 'Top industries have implemented their products in React Native.',
    subdescription: 'Our expert React Native development team delivers the best possible cross-platform application development services to deliver a product that is as close as native Android or iOS application. React Native developers from Skywave Info Solutions are well versed in all React Native tools like React native Expo, VSCode, ESLint, Flow, Enzyme, and Reactotron; frameworks like Snowflake, Ignite, Nativebase; and libraries such as React Navigation, MobX, and Animatable. Leverage the benefits of React Native development for strategic business growth at an affordable cost.',
    imageSrc: "/images/services/Mobile/mobileService1.svg",
  },
  {
    title: 'AR/VR App',
    subTitle: 'Development',
    description: 'Future is here with Augmented and Virtual reality!',
    subdescription: 'Being a trusted Augmented Reality (AR) applications development company in India, USA and APAC region, we help businesses to give their customers a whole new world right in front of their eyes leveraging AR technology integrated with quality mobile applications. Hire our AR app developers, who are experts in AR development using location-based tracking, 3D modeling & visualization, 360-degree panoramic imaging, real-time character identification, and more. We are experts in all major AR tools such as Wikitude, Vuforia, Catchoom, ViewAR, and Augment.',
    imageSrc: "/images/services/Mobile/mobileService1.svg",
  },
  {
    title: 'Flutter App',
    subTitle: 'Development',
    description: 'Get an expressive app with a revolutionary framework!',
    subdescription: 'Flutter is the most lucrative mobile app development framework. Launched by Google and now it has a very big community all around. Also, Flutter is the native language for Fuchsia OS, which enhances the power of developers and mobile apps both. It supports native development in iOS and Android both which helps this framework to get more power in the market. Skywave Info Solutions is one of the top Flutter app development companies in India. We have experienced developers working from the very start of the launching of Flutter framework. We already have developed many applications in Flutter. Our team can help you and guide you for your dream project in Flutter and pull out the most beneficial outcomes from it. We can build apps in Flutter passionately by utilizing all its features and instances.',
    imageSrc: "/images/services/Mobile/mobileService1.svg",
  },
];




const MobileAppPage = () => {
  const totalSections = mobileSectionsData.length;
  return (
    <>
    <Navbar/>
    <MainBanner title='Mobile' subtitle='Apps' description='Home / Services / Mobile Apps' imageUrl='/Avatar/mobileapp.png' flyBackground/>
    {/* {mobileSectionsData?.map((sectionData, index) => (
        <ServicesSections key={index} data={sectionData} index={index} totalSections={totalSections} showTopImage />
      ))} */}
      <ContactBanner/>
      <Footer/>
    </>
  )
}

export default MobileAppPage