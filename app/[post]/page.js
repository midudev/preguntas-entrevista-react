import { readJSON } from 'fs-extra'
import path from 'node:path'

import { Pill } from '../components/Pill.jsx'
import { ButtonRead } from '../components/ButtonRead.jsx'
import { Title } from './Title.jsx'

const jsonDirectory = path.join(process.cwd(), 'dist')

export default async function Post ({ params }) {
  const { post } = params

  const { content, level, title } = await readJSON(`${jsonDirectory}/${post}.json`)

  const render = content
    .replace('<h4 ', '<h1 ')
    .replace('</h4', '</h1')
    .replace('<hr>', '')

  return (
    <>
      <Title>{title}</Title>
      <header className='relative pt-10'>
        <div className='flex flex-row gap-2 pb-4'>
          <Pill level={level} />
          <ButtonRead title={title} />
        </div>
        <h1 className='pb-8 text-4xl font-bold text-blue-900' id='content'>{title}</h1>
      </header>
      <article className='prose max-w-none pb-4 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-blue-900 [&>h1]:pb-8 [&>p]:pb-6 [&>p]:text-xl [&>p>strong]:bg-yellow-50 [&_a]:text-blue-700 [&_a:hover]:underline [&>ul>li]:list-disc [&>ul]:text-xl [&>ul]:text-blue-900 [&>ul]:pb-4 [&>ul>li]:list-inside [&>pre]:rounded-xl [&>pre]:text-white [&>pre]:mb-8 [&>pre]:p-8 [&>pre]:bg-slate-800' dangerouslySetInnerHTML={{ __html: render }} />
    </>
  )
}
