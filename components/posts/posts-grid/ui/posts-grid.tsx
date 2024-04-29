import { PostItem, PostItemProps } from '@/components/posts/post-item'

import s from '../style/posts-grid.module.scss'

export type PostsGridProps = {
  posts: PostItemProps[]
}
export const PostsGrid = ({ posts }: PostsGridProps) => {
  return (
    <ul className={s.grid}>
      {posts.map(post => (
        <PostItem key={post.slug} {...post} />
      ))}
    </ul>
  )
}
