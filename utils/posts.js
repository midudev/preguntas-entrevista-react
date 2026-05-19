import posts from '../public/content/index.json'

export const readIndex = async () => {
  return posts
}

export const fetchPost = async slug => {
  const posts = await readIndex()
  const currentIndex = posts.findIndex(post => post.id === slug)

  if (currentIndex === -1) {
    return null
  }

  const post = await import(`../public/content/${slug}.json`)
  const { content, level, title } = post

  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  return { content, level, title, prev, next }
}

export const listPosts = async () => {
  const posts = await readIndex()
  return posts.map(post => ({ post: post.id }))
}
