'use client'
import React from 'react';
import SingleServiceSection from './SingleServiceSection';
import servicesData from './servicesData.json';
import MainBanner from '@/pages/bannner/mainBanner';
import Navbar from '@/pages/navbar';
import MainFooter from '@/pages/footer/mainFooter';



const createServicesSection = (dataIndex) => {
  const ServicesSection = (props) => (
    <>
      <Navbar />
      {createMainBanner(servicesData[dataIndex])(props)}
      {createServicesSectionWithData(dataIndex)(props)}
      <MainFooter />
    </>
  );

  ServicesSection.displayName = `ServicesSection${dataIndex}`;
  return ServicesSection;
};

const createServicesSectionWithData = (dataIndex) => {
  const ServicesSectionWithData = (props) => (
    <SingleServiceSection data={servicesData[dataIndex]} index={dataIndex} {...props} />
  );

  ServicesSectionWithData.displayName = `ServicesSectionWithData${dataIndex}`;
  return ServicesSectionWithData;
};

const createMainBanner = (serviceData) => {
  const MainBannerForService = (props) => (
    <MainBanner
      title={serviceData.title}
      subtitle={serviceData.subTitle}
      description={`Home / Solutions / ${serviceData.title} ${serviceData.subTitle}`}
      imageUrl={`/images/Solutions/subpage/${serviceData.title}.svg`}
      flyBackground
      {...props}
    />
  );

  MainBannerForService.displayName = `MainBannerForService${serviceData.title}`;
  return MainBannerForService;
};



const ServicesSectionA = createServicesSection(0);
const ServicesSectionB = createServicesSection(1);
const ServicesSectionC = createServicesSection(2);
const ServicesSectionD = createServicesSection(3);
const ServicesSectionE = createServicesSection(4);
const ServicesSectionF = createServicesSection(5);
const ServicesSectionG = createServicesSection(6);
const ServicesSectionH = createServicesSection(7);
const ServicesSectionI = createServicesSection(8);
const ServicesSectionJ = createServicesSection(9);

export {
  ServicesSectionB,
  ServicesSectionC,
  ServicesSectionD,
  ServicesSectionE,
  ServicesSectionF,
  ServicesSectionG,
  ServicesSectionH,
  ServicesSectionI,
  ServicesSectionJ
}

export default ServicesSectionA;