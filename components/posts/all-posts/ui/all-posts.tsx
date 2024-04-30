import { PostItemProps } from '@/components/posts/post-item'
import { PostsGrid, PostsGridProps } from '@/components/posts/posts-grid'

import s from '../style/all-posts.module.scss'

type AllPostsProps = {
  posts: PostItemProps[]
}
export const AllPosts = ({ posts }: AllPostsProps) => {
  return (
    <section className={s.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  )
}
