import React from 'react'

import { getLayout } from '@/components/layout/base-layout/base-layout'
import { PostContent } from '@/components/posts/post-detail'
import { PostDataType, getPostData, getPostsFiles } from '@/helpers/posts-util'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = context => {
  const { params } = context
  const { slug } = params

  const postData = getPostData(slug as string)

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}
export const getStaticPaths: GetStaticPaths = () => {
  const postFileNames = getPostsFiles()
  const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''))

  return {
    fallback: false,
    paths: slugs.map(slug => ({ params: { slug: slug } })),
  }
}
type PostDetailPageProps = {
  post: PostDataType
}
const PostDetailPage = ({ post }: PostDetailPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta content={post.content} name={'description'} />
      </Head>
      <PostContent post={post} />
    </>
  )
}

PostDetailPage.getLayout = getLayout
export default PostDetailPage
