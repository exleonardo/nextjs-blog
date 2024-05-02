import { PostItemProps } from '@/components/posts/post-item'
import { PostsGrid, PostsGridProps } from '@/components/posts/posts-grid'

import s from '../style/featured-posts.module.scss'

type FeaturedPostsProps = {
  posts: PostItemProps[]
}
export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  return (
    <section className={s.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}
