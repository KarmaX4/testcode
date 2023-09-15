import React from 'react';
import ServicesSectionA,
{
    ServicesSectionB,
    ServicesSectionC,
    ServicesSectionD,
    ServicesSectionE,
    ServicesSectionF,
    ServicesSectionG,
    ServicesSectionH,
    ServicesSectionI,
    ServicesSectionJ,
} from '@/pages/SolutionPage/Subpages/SolutionsInstances';
import NotFoundPage from '@/app/not-found';

const solutionComponents = {
    'gps-tracking-solutions': ServicesSectionA,
    'iot-solutions': ServicesSectionB,
    'beacon-solutions': ServicesSectionC,
    'on-demand-marketplace': ServicesSectionD,
    'catalogue-solutions': ServicesSectionE,
    'voice-enabled-solutions': ServicesSectionF,
    'automotive-and-logistics-solutions': ServicesSectionG,
    'lifestyle-and-hospitality-solutions': ServicesSectionH,
    'integrated-chatbot-solutions': ServicesSectionI,
    'healthcare-solutions': ServicesSectionJ,
};

const SolutionPage = ({ params }) => {
    const SolutionComponent = solutionComponents[params.solutionname] || NotFoundPage;
    return <SolutionComponent />
};

export default SolutionPage;
