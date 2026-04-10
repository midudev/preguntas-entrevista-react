import './globals.css'
import localFont from 'next/font/local'

import { ThemeContextProvider } from '@/context/ThemeContext.jsx'
import ThemeProvider from '@/provider/ThemeProvider.jsx'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { Stars } from './components/Stars.jsx'
import { Suspense, lazy } from 'react'

const BuyBook = lazy(() =>
  import('./components/BuyBook.jsx').then(m => ({ default: m.BuyBook }))
)

const SITE_URL = 'https://reactjs.wiki'
const DEFAULT_TITLE = 'React.js Wiki - Preguntas y respuestas de React'
const DEFAULT_DESCRIPTION =
  'Aprende React con preguntas de entrevista y conceptos clave explicados en espanol con ejemplos practicos.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: '%s | React.js Wiki',
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: 'React.js Wiki',
  alternates: {
    canonical: '/',
  },
  keywords: [
    'React',
    'preguntas de React',
    'entrevista React',
    'aprender React',
    'React en espanol',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: 'React.js Wiki',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'React.js Wiki - Preguntas y respuestas de React',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@midudev',
    creator: '@midudev',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ['/og.jpg'],
  },
}

const displayFont = localFont({
  src: [{ path: '../assets/space-grotesk.bold.woff2', weight: '700' }],
  variable: '--font-display-local',
  display: 'swap',
})

export default async function RootLayout({ children }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
      </head>
      <body className={`${displayFont.variable} app-shell overscroll-none`}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='relative flex min-h-screen flex-col overflow-x-clip bg-[#fafbff] text-slate-900 dark:bg-[#0a0f1a] dark:text-slate-100'>
              <a href='#main-content' className='skip-link'>
                Saltar al contenido
              </a>
              <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-0 z-0 overflow-hidden'
              >
                <div className='design-orb design-orb-a' />
                <div className='design-orb design-orb-b' />
                <div className='design-orb design-orb-c' />
              </div>
              <main
                id='main-content'
                tabIndex={-1}
                className='relative z-10 mx-auto block w-full max-w-6xl flex-1 px-5 pb-32 pt-3 md:px-8'
              >
                <Header>
                  <Suspense fallback={<Stars empty />}>
                    <Stars />
                  </Suspense>
                </Header>
                {children}
              </main>
              <Footer />
              <Suspense fallback={null}>
                <BuyBook />
              </Suspense>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
