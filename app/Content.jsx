import { marked } from 'marked'
import { Header } from './components/Header.jsx'
import { ReactLogo } from './components/ReactLogo.jsx'

async function getMarkdown ({ section }) {
  const res = await fetch(`http://localhost:3000/content/${section}.md`)
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
