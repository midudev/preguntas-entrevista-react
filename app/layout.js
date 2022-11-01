import './globals.css'
import { Space_Grotesk as SpaceGrotesk } from '@next/font/google'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

const spaceGroteskBold = SpaceGrotesk({ weight: '700', subsets: ['latin'] })
const spaceGroteskRegular = SpaceGrotesk({ weight: '400', subsets: ['latin'] })

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>React.js - Preguntas típicas</title>
      </head>
      <body className={`${spaceGroteskRegular.className} ${spaceGroteskBold.className} overscroll-none`}>
        <div aria-hidden='true' className='absolute scale-150 rounded-full bg-blue-gradient-radial w-96 h-96 t-0 left-14 opacity-20' />
        <main className='block w-full max-w-5xl p-4 pb-32 m-auto'>
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
