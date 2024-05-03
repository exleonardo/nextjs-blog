import { FeaturedPosts } from '@/components/home-page/featured-posts'
import { Hero } from '@/components/home-page/hero'
import { getLayout } from '@/components/layout/base-layout/base-layout'
import { PostItemProps } from '@/components/posts/post-item'
import { getFeaturedPosts } from '@/helpers/posts-util'
import { GetStaticProps } from 'next'
import Head from 'next/head'

export const getStaticProps: GetStaticProps = () => {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts,
    },
  }
}

type HomeProps = {
  posts: PostItemProps[]
}
const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Alex Blog</title>
        <meta content={'I post about programming and web development.'} name={'description'} />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

Home.getLayout = getLayout
export default Home
