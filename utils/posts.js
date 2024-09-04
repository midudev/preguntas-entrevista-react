import posts from '../public/content/index.json'

export const readIndex = async () => {
  return posts
}

export const fetchPost = async (slug) => {
  const posts = await readIndex()

  const post = await import(`../public/content/${slug}.json`)
  console.log(post)
  const { content, level, title, id } = post

  const currentIndex = posts.findIndex(post => post.id === id)
  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length ? posts[currentIndex + 1] : null

  return { content, level, title, prev, next }
}

export const listPosts = async () => {
  const posts = await readIndex()
  return posts.map(post => ({ post: post.id }))
}
