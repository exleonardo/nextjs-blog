import React from 'react'

import { getLayout } from '@/components/layout/base-layout/base-layout'
import { AllPosts } from '@/components/posts/all-posts'
import { PostItemProps } from '@/components/posts/post-item'
import { getAllPosts } from '@/helpers/posts-util'
import { GetStaticProps } from 'next'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = () => {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}

type AllPostsPageProps = {
  posts: PostItemProps[]
}
const AllPostsPage = ({ posts }: AllPostsPageProps) => {
  return (
    <>
      <Head>
        <title>All My Posts</title>
        <meta
          content={'A list of all programming-related tutorials and posts!'}
          name={'description'}
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

AllPostsPage.getLayout = getLayout
export default AllPostsPage
