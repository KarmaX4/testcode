import PortfolioDetails from '@/pages/portfolioPage/subpages'
import React from 'react'

const WebsiteSolPage = ({ params }) => <PortfolioDetails portfolioNameInUrl={params.appName} />

export default WebsiteSolPage