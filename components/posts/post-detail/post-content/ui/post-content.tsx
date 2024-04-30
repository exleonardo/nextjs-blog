import ReactMarkdown from 'react-markdown'

import { PostHeader } from '@/components/posts/post-detail'
import { PostDataType } from '@/helpers/posts-util'
import Image from 'next/image'
import { Components } from 'react-markdown/lib'

import s from '../style/post-content.module.scss'

type PostContentProps = {
  post: PostDataType
}

export const PostContent = ({ post }: PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers: Components = {
    img(paragraph) {
      const { children, node, ...rest } = paragraph

      if (node.tagName === 'img') {
        const image = node.properties

        return (
          <Image
            alt={image.alt as string}
            height={300}
            src={`/images/posts/${post.slug}/${image.src}`}
            width={600}
          />
        )
      }
    },
  }

  return (
    <article className={s.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  )
}
// code(code) {
//       const { children, className } = code
//       const language = className.split('-')
//
//       return (
//         <SyntaxHighlighter language={language} style={atomDark}>
//           {children}
//         </SyntaxHighlighter>
//       )
//     },
