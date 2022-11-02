import { marked } from 'marked'

async function getMarkdown ({ section }) {
  const res = await fetch(`/content/${section}.md`)
  const post = await res.text()
  return marked(post)
}

export async function Content ({ section }) {
  const content = await getMarkdown({ section })

  return (
    <>
      <article className='p-6 rounded-lg shadow-box'>
        {content}
      </article>
    </>
  )
}
