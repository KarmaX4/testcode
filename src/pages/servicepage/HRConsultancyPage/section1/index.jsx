import React from 'react'
import ShowCase from '@/pages/Components/ShowCase.Component';

const HRConsultancyData = [
    {
        title: 'HR',
        subTitle: 'Consultancy',
        description: 'Navigating Tech Talent Terrain and Cultivating IT Expertise',
        subdescription: 'Welcome to our HR Consultancy Services for IT Companies. We understand that the IT industry requires unique HR solutions to attract, retain and develop top talent. Our team of experienced HR professionals specializes in catering to the needs of IT companies, ensuring a seamless blend of technical excellence and human resource management.',
        imageSrc: '/images/services/HRConsultancy/NavigatingTech.svg',
    },
]

const SectionShowCase = () => {
    return (
        <>
            {HRConsultancyData?.map((sectionData, index) => (
                <ShowCase key={index} data={sectionData} index={index} totalSections={2}  />
            ))}
        </>
    )
}

export default SectionShowCase