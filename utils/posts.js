const IS_PROD = process.env.NODE_ENV === 'production'
const BASE_URL = IS_PROD ? 'https://reactjs.wiki/' : 'http://localhost:3000'

let posts = []

export const readIndex = async () => {
  if (posts.length) return posts

  const res = await fetch(`${BASE_URL}/content/index.json`)
  posts = await res.json()

  return posts
}

export const fetchPost = async (slug) => {
  const posts = await readIndex()

  const res = await fetch(`${BASE_URL}/content/${slug}.json`)
  const { content, level, title, id } = await res.json()

  const currentIndex = posts.findIndex(post => post.id === id)
  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length ? posts[currentIndex + 1] : null

  return { content, level, title, prev, next }
}

export const listPosts = async () => {
  const posts = await readIndex()
  return posts.map(post => ({ post: post.id }))
}
