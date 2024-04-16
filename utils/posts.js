const IS_PROD = process.env.NODE_ENV === 'production'
const BASE_URL = IS_PROD ? 'https://reactjs.wiki/' : 'http://localhost:3000'

const res = await fetch(`${BASE_URL}/content/index.json`)
const posts = await res.json()

export const fetchPost = async (slug) => {
  const res = await fetch(`${BASE_URL}/content/${slug}.json`)
  const { content, level, title, id } = await res.json()
  console.log(content, level, title, id)
  const currentIndex = posts.findIndex(post => post.id === id)
  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length ? posts[currentIndex + 1] : null
  return { content, level, title, prev, next }
}

export const listPosts = async () => {
  return posts.map(post => ({ post: post.id }))
}
