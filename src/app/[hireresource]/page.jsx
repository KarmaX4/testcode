"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const HireResourcePage = dynamic(() => import('@/pages/HireResourcePage'))

export default function HireResource({ params }) {
    
    return (
        <>
            <HireResourcePage hrName={params.hireresource} />
        </>
    )
}
