import './globals.css'
import { Space_Grotesk as SpaceGrotesk } from 'next/font/google'

import { ThemeContextProvider } from '@/context/ThemeContext.jsx'
import ThemeProvider from '@/provider/ThemeProvider.jsx'

import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { BuyBook } from './components/BuyBook.jsx'
import { Stars } from './components/Stars.jsx'
import { Suspense } from 'react'

const spaceGrotesk = SpaceGrotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={`${spaceGrotesk.className} overscroll-none`}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='bg-white text-black dark:bg-secondry dark:text-white'>
              <div
                aria-hidden='true'
                className='absolute inset-0 z-0 overflow-hidden pointer-events-none'
              >
                <div className='absolute top-0 scale-150 rounded-full bg-blue-gradient-radial w-96 h-96 left-14 opacity-20' />
              </div>
              <main className='block w-full max-w-6xl p-4 pb-32 m-auto'>
                <Header>
                  <Suspense fallback={<Stars empty />}>
                    <Stars />
                  </Suspense>
                </Header>
                {children}
              </main>
              <Footer />
              <BuyBook />
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
