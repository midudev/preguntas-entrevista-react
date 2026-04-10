import './HighlightCode.css'

import Link from 'next/link.js'
import { fetchPost, listPosts } from '../../utils/posts.js'
import { Pill } from '../components/Pill.jsx'
import { ButtonRead } from '../components/ButtonRead.jsx'
import { Quiz } from '../components/Quiz.jsx'

const DESCRIPTION_MAX_LENGTH = 160

const stripHtml = value => {
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const toMetaDescription = content => {
  const cleanContent = stripHtml(content)

  if (cleanContent.length <= DESCRIPTION_MAX_LENGTH) {
    return cleanContent
  }

  return `${cleanContent.slice(0, DESCRIPTION_MAX_LENGTH - 1).trimEnd()}...`
}

export async function generateStaticParams() {
  return listPosts()
}

export async function generateMetadata(props) {
  const params = await props.params

  const { post } = params

  const { title, content } = await fetchPost(post)
  const description = toMetaDescription(content)

  return {
    title,
    description,
    alternates: {
      canonical: `/${post}`,
    },
    openGraph: {
      url: `/${post}`,
      type: 'article',
      title,
      description,
      images: ['/og.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.jpg'],
    },
  }
}

export default async function Post(props) {
  const params = await props.params
  const { post } = params
  const { content, level, title, prev, next } = await fetchPost(post)

  return (
    <>
      <header className='relative pt-10'>
        <div className='flex flex-row gap-2 pb-4'>
          <Pill level={level} />
          <ButtonRead title={title} />
        </div>
        <h1
          className='pb-8 text-3xl font-bold leading-snug text-blue-900 md:text-4xl dark:text-blue-100'
          id='content'
        >
          {title}
        </h1>
      </header>
      <article
        className='prose max-w-none pb-4 [&>hr]:hidden [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-blue-900 [&>h1]:pb-8 [&>p]:pb-6 [&>p]:text-lg md:[&>p]:text-xl [&>p>strong]:bg-yellow-50 dark:[&>p>strong]:bg-yellow-950 [&_a]:text-blue-700 dark:[&_a]:text-blue-300 [&_a:hover]:underline [&>ul>li]:list-disc [&>ul]:text-lg md:[&>ul]:text-xl [&>ul]:text-blue-900 dark:[&>ul]:text-blue-200 [&>ul]:pb-4 [&>ul>li]:ml-5 [&>ul]:space-y-3 [&>pre]:overflow-x-auto  [&>pre]:rounded-xl [&>pre]:text-white [&>pre]:mb-8 [&>pre]:p-8 [&>pre]:bg-slate-800'
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <section className='mt-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm'>
        <h2 className='text-lg font-bold text-slate-900 dark:text-slate-100 pb-4'>
          Evaluar
        </h2>
        <Quiz slug={post} />
      </section>
      <footer className='py-12 clear-both text-center [&>a]:leading-snug [&>a]:hover:underline [&>a]:block [&>a]:my-2'>
        {prev && (
          <Link className='lg:float-left' href={`/${prev.id}/#content`}>
            ← {prev.text}
          </Link>
        )}
        {next && (
          <Link className='lg:float-right' href={`/${next.id}/#content`}>
            {next.text} →
          </Link>
        )}
      </footer>
    </>
  )
}
