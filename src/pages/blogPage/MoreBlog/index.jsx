import React from 'react'
import dynamic from 'next/dynamic'
import { Box } from '@mui/material'
import BlogInDetailJSON from './BlogDataInDetails.json'
import NotFoundPage from '@/app/not-found'

const Navbar = dynamic(() => import('@/pages/navbar'))
const MainFooter = dynamic(() => import('@/pages/footer/mainFooter'))
const BlogInDetail = dynamic(() => import('./blogInDetail'))

const MoreBlog = ({ blogNameForFilter }) => {

  const filteredBlogs = BlogInDetailJSON?.filter((blog) => {
    return blog.url === blogNameForFilter;
  });

  return (
    <>
      {filteredBlogs.length > 0 ? (
        <>
          <Navbar />
          {filteredBlogs?.map((val, index) => (
            <BlogInDetail
              key={index}
              blogName={val.blogName}
              blogImage={val.blogImage}
              blogTime={val.blogTime}
              blogDate={val.blogDate}
            />
          ))}
          <Box mb={25} />
          <MainFooter />
        </>
      ) : (
        <NotFoundPage />
      )}
    </>
  );
  
}

export default MoreBlog