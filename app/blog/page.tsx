import React from 'react'
import PageLayout from '../components/PageLayout'
import type { Metadata } from "next";

export const metadata: Metadata = {
  description: "Blog page for Andrew Ras, full stack developer. This page is currently in progress but will eventually become a blog",
};
const BlogPage = () => {
  return (
    <PageLayout title='Blog' borderColor='#9FC164'>
      <div className='h-full flex items-center md:text-2xl text-center'>
        <p>This page is under construction, please check back later!</p>
      </div>
    </PageLayout>
  )
}

export default BlogPage