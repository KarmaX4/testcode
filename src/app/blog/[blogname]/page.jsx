"use client"
import dynamic from 'next/dynamic'
import React from 'react'

const MoreBlog = dynamic(() => import('@/pages/blogPage/MoreBlog'))

export default function Blog({params}) {
    return (
        <>
            <MoreBlog blogNameForFilter={params.blogname} />
        </>
    )
}
