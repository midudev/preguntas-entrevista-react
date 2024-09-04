import { NextResponse } from 'next/server'
import Fuse from 'fuse.js'
import { readIndex } from '../../../utils/posts.js'

export const runtime = 'edge'

// Define the handler for GET requests
export async function GET (req: Request) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q') ?? ''

  const search = Array.isArray(q) ? q.join(' ') : q

  const index = await readIndex()

  const fuse = new Fuse(index, {
    keys: ['text'],
    includeScore: true,
    includeMatches: true,
    minMatchCharLength: 2
  })

  const results = fuse.search(search).slice(0, 5)

  console.log(results)

  // Return the results as a JSON response
  return NextResponse.json(results)
}
