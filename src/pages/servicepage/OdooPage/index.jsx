'use client'
import MainBanner from '@/pages/bannner/mainBanner'
import Navbar from '@/pages/navbar'
import React from 'react'
import ShowCase from '@/pages/Components/ShowCase.Component'
import MainFooter from '@/pages/footer/mainFooter'

const WebsiteSectionData = [
  {
    title: 'Odoo ERP',
    subTitle: 'Development',
    description: 'Build highly dynamic web apps with PHP frameworks',
    subdescription: 'Do you own more than one businesses? If yes, then odoo is the best option for you. Odoo offer all businesses to lie under single dashboard which is the main power of odoo ERP. Odoo is an open source platform where it can be used for any kind of purpose like CRM development, service management, marketing & sales, production units and many more.\n\nOur primary objective is to provide outstanding odoo services in terms of quality, affordability and time. We have always worked to provide our clients greater agility, make profitable decisions at any place. Our odoo services includes,',
    imageSrc: '/images/services/Websites/WebsitesService1.svg',
    listData: [
        "Odoo Web Development",
        "Odoo Integration",
        "Module Development",
        "Odoo Application Development",
        "Custom Odoo Development",
        "Odoo Implementation & Migration",
        "Odoo Store Development",
        "Odoo Support & Maintenance",
    ],
  },
  {
    title: "Odoo ERP Software",
    subTitle: 'Development',
    description: 'Flexible, secure and robust software development',
    subdescription: "Developing custom ERP with Odoo is the best choice as its varied range of powerful tools bring developers the facility to build an advanced ERP portal. Our Odoo ERP development services have helped many enterprises to run their business on automation and not intervening into micro processes of the business manually. Skywaveinfo has a dedicated team to work for your project whether you have a big or medium size business. We have also helped small businesses with minimal ERP solutions which fastens our client’s growth. \n\nFinding a genuine Odoo app development company is hard and we are here to serve you with the best Odoo app services. We have mastered skills for Odoo ERP software development with our years of experience. Odoo has potential in building order management systems, advanced ERP solutions, billing system, customer relationship management system, custom ecommerce application development and number of advanced features and tools which you can use in web application development.",
    imageSrc: '/images/services/Websites/WebsitesService2.svg',
  
  },
  {
    title: 'Odoo Development',
    subTitle: 'Services',
    description: 'Used by millions of people to create websites and CMS',
    subdescription: 'Skywaveinfo Odoo experts ensure quality of Odoo software and leverage efficiency of scalable and robust tools to develop advanced systems. Our Odoo development services include proper management of the application and 24/7 support for any interruptions while the application has gone live. We offer Odoo maintenance services and a dedicated team of Odoo developers for your project. Odoo being an open source framework, it has no limit on how we can extend and develop extra features as per the need and also it has proven very cost  effective to the clients. We have completed lots of Odoo ERP projects and our clients are satisfied with the quality of our work and meeting the timeline of the project. If you have any project or requirement for your business, drop us and we will help you out to take it beyond the success by building futuristic ERP.',
    imageSrc: '/images/services/Websites/WebsitesService3.svg',
  },

];

const OdooPage = () => {
  const totalSections = WebsiteSectionData.length;
  return (
    <>
      <Navbar />
      <MainBanner title='Odoo' subtitle='ERP' description='Home / Services / Odoo ERP' imageUrl='/Avatar/odoo.svg' flyBackground />
      {WebsiteSectionData.map((sectionData, index) => (
        <ShowCase key={index} data={sectionData} index={index} totalSections={totalSections} />
      ))}
      <MainFooter />
    </>

  )
}

export default OdooPage