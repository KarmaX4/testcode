"use client"
import MainBanner from '@/pages/bannner/mainBanner'
import MainFooter from '@/pages/footer/mainFooter'
import Navbar from '@/pages/navbar'
import React from 'react'
import ServicesSections from '../mobileAppPage/sections'
import ShowCase from '@/pages/Components/ShowCase.Component'

const BlockchainData = [
  {
    title: 'Blockchain App',
    subTitle: 'Development',
    description: 'Revolutionize the world with power of Blockchain',
    subdescription: 'The data transactions has been re-imagined after the invention of blockchain technology. We provide the best offshore blockchain development services. Our solutions for Blockchain Application Development are customized in a way that it created unique identity for your business and give transparency.\n\nIf you have idea for your industry and need expert Blockchain Developers then we are the one stop solution for your business to grow. We will guide and provide proper consultation with minimal cost that suits you in best ways. Check below some of our Blockchain services,',
    imageSrc: '/images/services/Blockchain/BlockchainService1.svg',
    listData: [
      ' DApp Development',
      'Smart Contract Development',
      'POC Development',
      'Enterprise Blockchain',
      'Blockchain Solution Implementation',
      'Strategic Consultation',
    ],
  },
  {
    title: 'Blockchain Application',
    subTitle: 'Development Company',
    description: 'Your Trusted Offshore Blockchain Development Partner for Next-Gen Solutions',
    subdescription: 'Blockchain technology has brought dominating change over other technologies. It has pushed many industries to the next level of security. Businesses have unleashed blockchain solution implementation by hiring a blockchain application development company and building next generation web and mobile applications. Blockchain has benefited businesses like banking, medical, AI-ML, Crypto currency, smart communication systems, automated audit process, etc. \n\n Skywave Info has a team of developers and marketers who work on 360 degree solutions by providing blockchain development services, UI/UX of blockchain apps, marketing and branding. We have been the most recommended offshore blockchain development services provider in India. We have multiple options for you to offer before you think to dive into blockchain and leverage its features like decentralization, transparent environment, block base nature and permission based acceptance and immutability.',
    imageSrc: '/images/services/Blockchain/BlockchainService2.svg',
  },
  {
    title: 'Blockchain Application',
    subTitle: 'Development',
    description: 'Tailored Blockchain App Development Solutions by Skywave Info Solutions',
    subdescription: 'The cost of blockchain app development varies as per the features added in it. Applications like web wallet development, Cryptocurrency exchange development, token base system development, ICO website development and many other advanced apps can be developed. Custom blockchain application development brings solutions to industries like real estate, education / online learning system, healthcare improvements solutions, retailers and vendors, manufacturing, etc.\n\nWe have expert blockchain consultants in our team from whom you can get free advice about your idea. We have helped our clients in building hyperledger which have flawlessly ease up the finance and transactional processes. Our financial blockchain solution enables you to log every minute details of transactions happening between you and your parties, which in result help in hindering any disputes.',
    imageSrc: '/images/services/Blockchain/BlockchainService3.svg',

  },
];


const BlockchainPage = () => {
  const totalSections = BlockchainData.length;
  return (
    <>
      <Navbar />
      <MainBanner title='Blockchain' subtitle='Services' description='Home / Services / Blockchain' imageUrl='/Avatar/blockchain.svg' flyBackground />
      {BlockchainData.map((sectionData, index) => (
        // <ServicesSections key={index} data={sectionData} index={index} totalSections={totalSections} showTopImage />
        <ShowCase key={index} data={sectionData} index={index} totalSections={totalSections} mob />
      ))}
      <MainFooter />
    </>

  )
}

export default BlockchainPage