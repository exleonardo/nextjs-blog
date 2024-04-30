import fs from 'fs'
import path from 'path'
import process from 'process'

import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'posts')

export const getPostsFiles = () => {
  return fs.readdirSync(postDirectory)
}
export const getPostData = (postIdentifier: string): PostDataType => {
  const postSlug = postIdentifier.replace(/\.md$/, '')
  const filePath = path.join(postDirectory, `${postSlug}.md`)

  const fileContent = fs.readFileSync(filePath, 'utf-8') as string

  const { content, data } = matter(fileContent)

  const postData: PostDataType = {
    content,
    ...data,
    slug: postSlug,
  }

  return postData
}

export type PostDataType = {
  content: string
  date?: string
  image?: string
  isFeatured?: boolean
  slug: string
  title?: string
}
export const getAllPosts = () => {
  const postFiles = getPostsFiles()

  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile)
  })

  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1))

  return sortedPosts
}
export const getFeaturedPosts = () => {
  const allPosts = getAllPosts()
  const featuredPosts = allPosts.filter(post => post.isFeatured)

  return featuredPosts
}
