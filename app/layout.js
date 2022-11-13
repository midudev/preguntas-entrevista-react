import './globals.css'
import { Space_Grotesk as SpaceGrotesk } from '@next/font/google'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

const spaceGrotesk = SpaceGrotesk({ weight: ['400', '700'], subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>React.js Wiki - Preguntas típicas con respuesta y solución</title>
        <meta name='description' content='Preguntas típicas sobre React.js con respuesta y solución' />
        <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
      </head>
      <body className={`${spaceGrotesk.className} overscroll-none`}>
        <div aria-hidden='true' className='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-0 scale-150 rounded-full bg-blue-gradient-radial w-96 h-96 left-14 opacity-20' />
        </div>
        <main className='block w-full max-w-6xl p-4 pb-32 m-auto'>
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
