const res = await fetch('http://localhost:3000/content/index.json')
const posts = await res.json()

export const fetchPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/content/${slug}.json`)
  const { content, level, title, id } = await res.json()
  const currentIndex = posts.findIndex(post => post.id === id)
  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length ? posts[currentIndex + 1] : null
  return { content, level, title, prev, next }
}

export const listPosts = async () => {
  return posts.map(post => ({ post: post.id }))
}
