import { Head } from '../components/Head'
import { fetchPost } from './page'

export default async function head ({ params: { post } }) {
  const { title, content } = await fetchPost(post)

  return (
    <Head
      title={title}
      description={content}
      ogImage='https://reactjs.wiki/og.png'
    />
  )
}
