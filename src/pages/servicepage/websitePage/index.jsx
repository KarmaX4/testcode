'use client'
import MainBanner from '@/pages/bannner/mainBanner'
import Navbar from '@/pages/navbar'
import React from 'react'
// import WebsiteSectionData from './websiteSectionData'
// import ServicesSections from '../mobileAppPage/sections'
import MainFooter from '@/pages/footer/mainFooter'


const WebsiteSectionData = [
  {
    title: 'Php Web',
    subTitle: 'Development',
    description: 'Build highly dynamic web apps with PHP frameworks',
    subdescription: 'Performance is the key for any web app development and Skywave offers the best according to the business requirements. Skywave has proven expertise in wide range of PhP frameworks to run rings around business rivals. Tailoring powerful web application to your business process can help your organisation to gain a remarkable growth.',
    imageSrc: '/images/services/Website/laptopService1.svg',
    listData: [
      'Zend Framework',
      'API Development',
      'Joomla Development',
      'Magento Development',
      'Opencart Development',
      'Drupal Development',
      'Yii Framework Development',
      'PSD to HTML Development',
      'WordPress CMS Development',
      'Laravel Framework Development',
    ],
  },
  { title: 'Dot Net Web',
    subTitle: 'Development',
    description: 'Flexible, secure and robust software development',
    subdescription: 'For enterprise application, Dot Net Development proves to be best framework. Skywave Info Solutions thrive to deliver the most advanced Dot Net solution to clients. We deliver the system which can sustain for over years and provide full support and maintenance. Our applications developed with Dot Net backend have reactive frontend for seamless functioning of web app.',
    imageSrc: '/images/services/Website/laptopService1.svg',
    listData: [
      'E-commerce Website Development',
      'CMS Development',
      'API Development',
      'Salesforce',
      'Sharepoint Development',
      'Desktop Application Development',
    ],
  },
  { title: 'WordPress',
    subTitle: 'Development',
    description: 'Used by millions of people to create websites and CMS',
    subdescription: 'Being No.1 CMS framework, WordPress comes with lots of default features which are easy to use and scalable. Developers at Skywave Info Solutions not develop website just by installing theme and updating content, but we work on core designs and customizations as per the requirement. We focus on developing pleasant and appealing designs to make you stand out from your competitors.\n\nWe offer WordPress services to variety of industries like Real Estate, Corporates, Healthcare, Educational Institutes. So if you are looking for WordPress Development Company in Ahmedabad, India then contact us now. Below is the list of WP services we offer,',
    imageSrc: '/images/services/Website/laptopService1.svg',
    listData: [
      'E-commerce Website Development',
      'CMS Development',
      'API Development',
      'Salesforce',
      'Sharepoint Development',
      'Desktop Application Development',
    ],
  },
  { title: 'Full stack Web',
    subTitle: 'Development',
    description: 'Taking care of your project from design to deployment',
    subdescription: 'Unparalleled solutions to create an exceptional web application by leveraging power of MVC architecture focusing on logic, presentation and data. Amalgamation of different javascript languages allow to develop complex web application processes. MEAN stack technology, an acronym of MongoDB, Express.js, Angular.js, and Node.js serves as a complete technology solution to develop innovative full-stack web application for varied business processes.',
    imageSrc: '/images/services/Website/laptopService1.svg',
    listData: [
      'MongoDB for Storage',
      'NodeJS for Web Server',
      'ExpressJS for Web Programming',
      'Meteor Framework Development',
      'AngularJS for Frontend Development',
      'HTML 5, Bootstrap, jQuery, Ajax Development',
    ],
  },
  { title: 'Python Web',
    subTitle: 'Development',
    description: 'When it comes to IoT, Big Data, AI/ML, we call Python',
    subdescription: 'Being a Python development company in India and USA for 10+ years, Skywave Info Solutions has in-house and rich experience in providing Python based development services and Python Migration Services. Hire Python developers from us to develop web applications such as Ecommerce app development, and Business intelligence software applications, Online and Enterprise Web applications, Data Analytics System, SaaS Solutions and Shell Automation. Hire expert Python development services as our certified team of Python developers are well-versed with Python tools and Python frameworks like Django, Pyramid, TurboGears, Flask, Hug and Web2py to provide impeccable security and other features on your website. Hire Python developers to build a web app with unique client-centric front-end experiences to drive innovative business growth.',
    imageSrc: '/images/services/Website/laptopService1.svg',
    listData: [
      'Django Framework',
      'Oscar Development',
      'Flask Development',
      'API Development',
      'BI Tools Development',
      'IoT App Backend Development',
      'Data Mining & Data Analysis Systems',
    ],
  },
  { title: 'Java Web',
    subTitle: 'Development',
    description: 'Large scale and SaaS based software with advance Java',
    subdescription: 'We are the best Java development company in India, USA and Canada providing top full stack Java development / Migration services for more than a decade. Our team of Java developers are experts in delivering exceptional Java / J2EE programming services (Java SE, Java ME and other Java solutions) and have expertise in developing large scale, distributed, SaaS-based, and multi-tenant applications and microservices using Spring, Hibernate, and Grails. Our full stack Java developers have delivered robust Java application development projects to diverse industry verticals globally. You can outsource Java development to Skywave Info Solutions as we offer the most affordable way to get Custom Java Application Development Services of the highest quality.',
    imageSrc: '/images/services/Website/laptopService1.svg',
    listData: [
      'Umbraco Development',
      'Sitecore Development',
      'Java Mobile Development',
      'Enterprise Java Development',
      'Custom Java Development',
      'Java Application Development',
      'Enterprise Java Development',
      'J2EE Application Development',
      'Java Application Programming',
      'Java Maintenance and Support',
    ],
  },
  { title: 'HTML5 Web',
    subTitle: 'Development',
    description: 'Get your design ready to show on browsers',
    subdescription: 'Top HTML5 Web development company in Indiaand USA, Skywave, is an award winning IT outsourcing company that offers world class JavaScript and HTML5 based multi-platform app development services, right from native apps to cross platform app development. Hire Web and HTML5 certified developers from us who are masters in developing appealing front-end solutions by using HTML5 tools like CSS3, JavaScript, JSON, XML etc. We develop high performing business apps that are fast, responsive, secure, beautiful, user friendly, cost effective and work on popular platforms like Android, iOS, Windows, Blackberry etc. Bring to us your PSD design and we will convert it to cross-browser compatible W3C approved Valid Responsive HTML5.',
    imageSrc: '/images/services/Website/laptopService1.svg',
    listData: [
      'Responsive Website Design',
      'Html5 Canvas Friendly Design',
      'Touch Friendly Website Design',
      'Device Agnostic Html5 Designs',
      'Accelerated Mobile Page Design',
      'Disabled Friendly Website Design',
      'Kiosk Friendly Html5 Website Design',
      'Web Accessibility Friendly Website Design',
    ],
  },
  { title: 'Ruby on Rails Web',
    subTitle: 'Development',
    description: 'Develop top notch web applications with Ruby on Rails',
    subdescription: 'Renowned as a top-notch Ruby on Rails (RoR) development company in India, USA and UK, Skywave possesses in-house RoR developers who are connoisseurs in full stack ROR development services having experience in AngularJS, ReactJS and/or BackboneJS & an advocate of Agile methodology and TDD. Hire full stack Ruby on Rails developers (RoR programmers) who are savvy with latest technologies like RoR Ajax, wEB 2.0 app, MySQL, RoR 4.2, HTML5/CSS3, XHTML, JS and multiple libraries. Our Ruby on Rails (RoR) development services provide scalable and robust web platforms and back-end systems which are viable and useful with multiple databases, OS and software libraries.',
    imageSrc: '/images/services/Website/laptopService1.svg',
    listData: [
      'RoR Portal Development',
      'RoR Web 2.0 Development',
      'Responsive Layout Design',
      'Ecommerce App Development',
      'RoR Support and Maintenance',
      'Custom RoR Web App Development',
      'CMS Development and RoR installation',
      'Ruby on Rails (RoR) Application Development',
    ],
  },
  { title: 'Magento Web',
    subTitle: 'Development',
    description: 'eCommerce development with Magento 3',
    subdescription: 'It becomes difficult for any business to survive in competition without good online presence. That is where Skywave Info Solutions plays role to help you in developing amazing lead generating website.\n\nIt doesn’t matter about which platform and framework you are talking, we are available with all expert resources to fulfill your requirements. We thrive to provide complete satisfaction from our services which makes us top website development company. To our clients, we suggest to use latest technologies for any project to make it able to perform any complex tasks in future. We offer wide range of web development services, of which some are listed below,',
    imageSrc: '/images/services/Website/laptopService1.svg',
    listData: [
      'Magento Consulting',
      'Multi-vendor eCommerce',
      'Magento Migration',
      'Magento Extension Development',
      'Payment, Email, Tracking Extension Integration',
      'Template Development',
    ],
  },
];
const WebsitePage = () => {
  const totalSections = WebsiteSectionData.length;
  return (
    <>
    <Navbar/>
    <MainBanner title='Websites' description='Home / Services / Websites' imageUrl='/Avatar/website.png' flyBackground/>
    {/* {WebsiteSectionData.map((sectionData, index) => (
        <ServicesSections key={index} data={sectionData} index={index} showTopImage={false} totalSections={totalSections}/>
      ))} */}
      <MainFooter/>
    </>

  )
}

export default WebsitePage