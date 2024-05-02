import ReactMarkdown from 'react-markdown'

import { PostHeader } from '@/components/posts/post-detail'
import { PostDataType } from '@/helpers/posts-util'
import Image from 'next/image'
import { Components } from 'react-markdown/lib'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

import s from '../style/post-content.module.scss'

type PostContentProps = {
  post: PostDataType
}

export const PostContent = ({ post }: PostContentProps) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`

  const customRenderers: Components = {
    code(code) {
      const { children, className } = code
      const language = className.split('-')[1]

      return (
        <SyntaxHighlighter language={language} style={materialDark}>
          {children as string}
        </SyntaxHighlighter>
      )
    },
    img(paragraph) {
      const { node } = paragraph

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
