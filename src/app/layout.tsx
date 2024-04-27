import '@/styles/main.scss'
import { Layout } from '@/views/Layout/Layout'
import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import { Providers } from './providers'
import { Toaster } from 'sonner'

const NUNITO_SANS = Nunito_Sans({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  fallback: ['sans-serif']
})

export const metadata: Metadata = {
  title: 'Dictionary',
  description: 'Usefull dictionary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang='en'>
      <body className={NUNITO_SANS.className}>
        <Providers>
          <Layout>
            {children}
            <Toaster
              theme='dark'
              position='bottom-right'
              duration={1500}
            />
          </Layout>
        </Providers>
      </body>
    </html>
  )
}
