import React from 'react'
import WebsiteSolutionPage from './website';
import ProjectData from './projectData.json';
import MobilePortfolio from './Mobile';
import NotFoundPage from '@/app/not-found';

const PortfolioDetails = ({ portfolioNameInUrl }) => {
    const filteredData = ProjectData?.filter((val) => val?.portfolioName?.toLowerCase()?.replace(/\s+/g, '-') === portfolioNameInUrl?.toLowerCase());
    return (
        <>
            {
                filteredData.length > 0 ? (
                    filteredData?.map((val, index) => (
                        val.type === 'app' ? (
                            <MobilePortfolio key={index} data={filteredData} />
                        ) : (
                            <WebsiteSolutionPage key={index} data={filteredData} />
                        )
                    ))
                ) : (
                    <NotFoundPage />
                )
            }
        </>
    )

}

export default PortfolioDetails