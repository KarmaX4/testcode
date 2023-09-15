import React from 'react'
import Navbar from '../navbar'
import MainBanner from '@/pages/bannner/mainBanner';
import RecentBlog from './RecentBlog';
import OurBlogs from './OurBlog';
import MainFooter from '../footer/mainFooter';

const Blog = () => {
  return (
    <>
        <Navbar />
        <MainBanner title='Our' subtitle='Blogs' description='Recent news & events' imageUrl='/Avatar/Blog.svg' imgBackground />
        <RecentBlog />
        <OurBlogs />
        <MainFooter/>
    </>
  )
}

export default Blog