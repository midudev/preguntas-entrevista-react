import Fuse from 'fuse.js'
import { readIndex } from '../../utils/posts.js'

export const runtime = 'edge'

export default async function handler (req, res) {
  const { query = {} } = req
  const { q = '' } = query

  const index = await readIndex()

  const fuse = new Fuse(index, {
    keys: ['text'],
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2
  })

  // Return the content of the data file in json format
  res.status(200).json(fuse.search(q).slice(0, 5))
}
