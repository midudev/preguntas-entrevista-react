const REPO_API =
  'https://api.github.com/repos/midudev/preguntas-entrevista-react'
const SHIELDS_API =
  'https://img.shields.io/github/stars/midudev/preguntas-entrevista-react.json'

/** In-memory cache so a full static build only hits the network once. */
let cached: number | null = null
let inflight: Promise<number | null> | null = null

function parseShieldsMessage(message: string): number | null {
  const compact = message.trim().toLowerCase().replace(/,/g, '')
  const k = compact.match(/^([\d.]+)\s*k$/)
  if (k) return Math.round(parseFloat(k[1]) * 1000)
  const n = Number(compact)
  return Number.isFinite(n) && n >= 0 ? n : null
}

async function fetchFromGithubApi(): Promise<number | null> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'reactjs.wiki',
    }
    // Optional token for CI / local builds (higher rate limit)
    const token = import.meta.env.GITHUB_TOKEN || import.meta.env.GH_TOKEN
    if (token) headers.Authorization = `Bearer ${token}`

    const res = await fetch(REPO_API, { headers })
    if (!res.ok) return null

    const data = (await res.json()) as { stargazers_count?: number }
    const count = data.stargazers_count
    return typeof count === 'number' && count >= 0 ? count : null
  } catch {
    return null
  }
}

/** Fallback when GitHub rate-limits unauthenticated builds. */
async function fetchFromShields(): Promise<number | null> {
  try {
    const res = await fetch(SHIELDS_API, {
      headers: { 'User-Agent': 'reactjs.wiki' },
    })
    if (!res.ok) return null
    const data = (await res.json()) as { message?: string }
    if (!data.message) return null
    return parseShieldsMessage(data.message)
  } catch {
    return null
  }
}

/**
 * Fetch stargazers_count once per process. Returns null if every source
 * fails so the UI can fall back gracefully (client script may still recover).
 */
export async function getGithubStars(): Promise<number | null> {
  if (cached != null) return cached
  if (inflight) return inflight

  inflight = (async () => {
    try {
      const count =
        (await fetchFromGithubApi()) ?? (await fetchFromShields())
      if (count == null) return null
      cached = count
      return count
    } finally {
      inflight = null
    }
  })()

  return inflight
}

export function formatStarCount(number: number): string {
  if (number >= 1000) return `${(number / 1000).toFixed(1)}K`
  return String(number)
}
