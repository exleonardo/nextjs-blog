import Image from 'next/image'
import Link from 'next/link'

import s from '../style/post-item.module.scss'

export type PostItemProps = {
  date: string
  excerpt: string
  image: string
  slug: string
  title: string
}
export const PostItem = ({ date, excerpt, image, slug, title }: PostItemProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return (
    <li className={s.post}>
      <Link href={linkPath}>
        <div className={s.image}>
          <Image alt={title} height={200} layout={'responsive'} src={imagePath} width={300} />
        </div>
        <div className={s.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  )
}
