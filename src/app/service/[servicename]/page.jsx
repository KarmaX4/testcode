import React from 'react';
import dynamic from 'next/dynamic';
import NotFoundPage from '@/app/not-found';

const serviceComponents = {
  'blockchain': dynamic(() => import('@/pages/servicepage/BlockchainPage')),
  'hr-consultancy': dynamic(() => import('@/pages/servicepage/HRConsultancyPage')),
  'mobile-apps': dynamic(() => import('@/pages/servicepage/mobileAppPage')),
  'odoo-erp': dynamic(() => import('@/pages/servicepage/OdooPage')),
  'seo-services': dynamic(() => import('@/pages/servicepage/SeoPages')),
  'ui-ux-design-analysis': dynamic(() => import('@/pages/servicepage/UIUXPage')),
  'websites': dynamic(() => import('@/pages/servicepage/WebsitePage')),
};

const ServicesPage = ({ params }) => {
  const ServiceComponent = serviceComponents[params.servicename] || NotFoundPage;
  return <ServiceComponent />;
};

export default ServicesPage;
