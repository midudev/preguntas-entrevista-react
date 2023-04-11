import path from 'node:path'
import { readJSON } from 'fs-extra'

export const jsonDirectory = path.join(process.cwd(), 'dist')

export const fetchPost = async (slug) => {
  const index = path.join(jsonDirectory, 'index.json')
  const posts = await readJSON(index)
  const { content, level, title, id } = await readJSON(`${jsonDirectory}/${slug}.json`)
  const currentIndex = posts.findIndex(post => post.id === id)
  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length ? posts[currentIndex + 1] : null
  return { content, level, title, prev, next }
}

export const listPosts = async () => {
  const index = path.join(jsonDirectory, 'index.json')
  const posts = await readJSON(index)

  return posts.map(post => ({ post: post.id }))
}
