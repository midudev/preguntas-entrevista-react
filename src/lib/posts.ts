import index from '../../public/content/index.json'
import { enhanceCodeBlocks } from './code-blocks'

export type PostIndexItem = {
  id: string
  text: string
  level?: number
}

export type PostData = {
  content: string
  level: number
  title: string
  prev: PostIndexItem | null
  next: PostIndexItem | null
}

const postModules = import.meta.glob('../../public/content/*.json', {
  eager: true,
}) as Record<string, { default?: any } | any>

function loadPostJson(slug: string) {
  const key = Object.keys(postModules).find(k => k.endsWith(`/${slug}.json`))
  if (!key) return null
  const mod = postModules[key]
  return (mod as any).default ?? mod
}

export function readIndex(): PostIndexItem[] {
  return index as PostIndexItem[]
}

export async function fetchPost(slug: string): Promise<PostData | null> {
  const posts = readIndex()
  const currentIndex = posts.findIndex(post => post.id === slug)

  if (currentIndex === -1) {
    return null
  }

  const post = loadPostJson(slug)
  if (!post || !post.content) {
    return null
  }

  const { content, level, title } = post

  const prev = currentIndex > 0 ? posts[currentIndex - 1] : null
  const next = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  return {
    content: enhanceCodeBlocks(content),
    level,
    title,
    prev,
    next,
  }
}

export function listPosts() {
  return readIndex().map(post => ({ params: { post: post.id } }))
}

const DESCRIPTION_MAX_LENGTH = 160

export function stripHtml(value: string) {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

export function toMetaDescription(content: string) {
  const cleanContent = stripHtml(content)

  if (cleanContent.length <= DESCRIPTION_MAX_LENGTH) {
    return cleanContent
  }

  return `${cleanContent.slice(0, DESCRIPTION_MAX_LENGTH - 1).trimEnd()}...`
}
