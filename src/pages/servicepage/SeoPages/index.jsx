'use client'
import MainBanner from '@/pages/bannner/mainBanner'
import Navbar from '@/pages/navbar'
import React from 'react'
// import ServicesSections from './sections'
import ShowCase from '@/pages/Components/ShowCase.Component'
import ContactBanner from '@/pages/bannner/contactbanner'
import Footer from '@/pages/footer'

const seoSectionsData = [
  {
    title: 'SEO',
    subTitle: 'Services',
    description: 'Get your brand on top of the Google',
    subdescription: "Search Engine Optimization helps getting leads for business organically. We help in improving your business website ranking in Google by doing required SEO activities. We have our proven strategies which works for any business to get the best results. SEO is a slow process but its results last longs on the Internet which keeps helping your website grow and get more leads.\n\nWe have expert SEO analyst to work on your website and make your online presence trustworthy among your customers. We have years of experience in doing SEO for websites and mobile application. Here are best SEO services listed below,",
    imageSrc: "/images/services/seo/SeoServices.svg",
    listData: [
      "Keyword Analysis",
      'Competitor Analysis',
      'Content Submission',
      'Technical Optimization',
      'Mobile Optimization',
      'Off-Page Optimization',
    ],
  },
  {
    title: 'SEO Optimization',
    subTitle: 'Services',
    description: 'Boost Your Online Presence with Skywaveinfos Global SEO Solutions',
    subdescription: 'Skywaveinfo Solutions is offering package wise SEO services in India, USA, UK, New Jersey, Canada, Australia, and many other countries around the world. With the growing traffic on the internet, it is obvious that people are finding everything for their needs on the internet. Thus it has become for any company, business owner, eCommerce vendor, startup to get highlighted on Google or relevant search engines. Getting a space on search engines and more importantly getting ranked in top 10 enable you to get organic clicks and engagement. Our SEO optimization services ensure that your website gets ranked in your local area and get a more targeted audience to convert them into customers or regular visitors.\n\nDigital marketing analyst at Skywave creates a custom SEO audit report and highlights weak points of the website. After analyzing the report in depth, an action plan is created on which the SEO team works and gets your website ranked top in search engines. Creating your own brand needs a constant effort and activeness over social media. New pages and blogs content need to be posted frequently to make people know about your product and brand. Our SEO service expert takes care of your online presence from bottom to top and suggests all the changes or additions needed in the website. Talk today with our SEO executive to get estimation about your website SEO and free audit service.',
    imageSrc: "/images/services/seo/SeoOptimization.svg",
  },
  {
    title: 'Digital Marketing',
    subTitle: 'Agency',
    description: 'Empower Your Business with Our Proven SEO Expertise',
    subdescription: 'Being a top Digital Marketing agency, we develop websites SEO friendly which brings targeted audience and increased reach to the people who are finding for the same product or services. We have been the most recommended SEO service providers in the USA, Australia and Canada. Our SEO professionals have knowledge about trending tactics and also follow our own handmade book of dominance over the internet with killer SEO strategies. We follow SEO activities like Keyword research, social bookmarking, classified submission, business listing, growth hacking strategies, social media video content sharing, festive posts, targeting niche audience and many more secrets from years to get the true results. Even after providing such quality SEO services, our rates are very affordable and according to the need, SEO packages are created so any business or startup or an enterprise can opt for it.',
    imageSrc: "/images/services/seo/DigitalMarketing.svg",
  },
];

const SeoPage = () => {
  const totalSections = seoSectionsData.length;
  return (
    <>
      <Navbar />
      <MainBanner title='Seo' subtitle='Services' description='Home / Services / Blockchain' imageUrl='/Avatar/SeoSerices.svg' flyBackground />
      {seoSectionsData.map((sectionData, index) => (
        <ShowCase key={index} data={sectionData} index={index} totalSections={totalSections} />
      ))}
      <ContactBanner />
      <Footer />
    </>
  )
}

export default SeoPage