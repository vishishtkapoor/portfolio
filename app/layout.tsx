import Footer from '@/components/footer'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import ThemeContextProvider from '@/context/theme-context'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Background } from '@/components/background'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vishisht | Portfolio',
  description: `JVishisht is a website and mobile app developer with 3 years of experience.`,
  openGraph: {
    images: '/favicon.ico',
    url: "https://johnroylapida.vercel.app",
    type: "website",
    locale: "en_US",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth dark'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[hsla(240deg, 20%, 20%, 1)] dark:text-gray-50 dark:text-opacity-90`}>
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Background />
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster position='top-right' />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
