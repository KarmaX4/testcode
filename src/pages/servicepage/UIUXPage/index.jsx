"use client"
import MainBanner from '@/pages/bannner/mainBanner'
import Navbar from '@/pages/navbar'
import React from 'react'
import MainFooter from '@/pages/footer/mainFooter'
import ServicesSections from '../mobileAppPage/sections'
import ShowCase from '@/pages/Components/ShowCase.Component'

const UiUxData = [
  {
    title: 'UI/UX',
    subTitle: 'Design Analysis',
    description: 'We analyze and enhance to make it better',
    subdescription: 'Think if your UI does not represent your real idea, or your website has  no proper user experience. In the digital world, the importance of UI/UX  is as equal as the product idea. Designers at Skywave Info Solutions have  rich experience in amalgamating UI and UX to generate the most efficient  product. No matter it is mobile or web, we have pool of designs and  variations that can really amaze you. In the trend, where pre-built designs  are getting used, we understand that no design can be synced before the  content of web or mobile application is build. Here we are to make your business, a work of art that include below listed services,',
    imageSrc: '/images/services/UXUI/UI_UX_Design1.svg',
    listData: [
      " Web Design Services",
      "PSD to HTML5 Conversion",
      " Graphic Design",
      "Logo Design",
      "Mobile App Design",
      "Wire-Frame Design",
    ],
  },
  {
    title: 'Website Design',
    subTitle: 'Company',
    description: 'Elevating Web Design and Custom Development Services in India and USA',
    subdescription: 'Skywave Info Solutions is a website design company in India which has an expert design team having premier tactics in analysing projects and creating a unique style of user interface. Visitors do not stay on the website for a longer time if they do not get the professional feeling while they are searching for web design services. So in order to decrease bounce rate on your website, we design PSD of websites first and then convert it to html. Our custom design and carving it into a dynamic framework has made us top PSD to HTML service providers in India and USA.\n\n Custom web development services in the USA are provided by most of  the companies in India but we are quite different in taking any project  and developing it to make it live on the internet. We thrive for the client’s success and help them reach their goals through a website.  Whether it is an eCommerce or static company website or an enterprise web application, it has to be mobile friendly by all means. Majority of  people on the internet use their mobile devices to search for any product  or services, and we are the one who ensure that your website looks good and works in the same way on all devices.',
    imageSrc: '/images/services/UXUI/UI_UX_Design2.svg',
  },
  {
    title: 'Web Design',
    subTitle: 'Services',
    description: 'Elevating User Experience with Responsive Web Design and Optimal Performance',
    subdescription: 'Responsive web design services bring the latest HTML5 and CSS3 framework using reactive languages. Creating different layouts for different devices is the best way which we follow in our design and development cycle. Users get dynamic experience over different devices and can interact more with the website or an application. Many visitors might leave your website just because it doesn’t load the content fast and they do not wait for a longer time. We also successfully optimize websites for mobile devices to increase the loading speed and give uninterrupted user experience.',
    imageSrc: '/images/services/UXUI/UI_UX_Design3.svg',

  },
];

const UIUXPage = () => {
  const totalSections = UiUxData.length;
  return (
    <>
      <Navbar />
      <MainBanner title='UI/UX' subtitle='Design' description='Home / Services / UI/UX Design' imageUrl='/Avatar/uiux.png' flyBackground />
      {UiUxData.map((sectionData, index) => (
        // <ServicesSections key={index} data={sectionData} index={index} showTopImage={false} totalSections={totalSections}/>
        <ShowCase key={index} data={sectionData} index={index} totalSections={totalSections} />
      ))}
      <MainFooter />
    </>
  )
}

export default UIUXPage