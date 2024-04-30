import Image from 'next/image'

import s from '../style/post-header.module.scss'

type PostHeaderProps = {
  image: string
  title: string
}
export const PostHeader = ({ image, title }: PostHeaderProps) => {
  return (
    <header className={s.header}>
      <h1>{title}</h1>
      <Image alt={title} height={150} src={image} width={200} />
    </header>
  )
}
