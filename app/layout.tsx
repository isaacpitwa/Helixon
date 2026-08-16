import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { LenisProvider } from '@/components/LenisProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://helixon.bio'),
  title: 'HELIXON — Precision Biology, Engineered',
  description:
    'Helixon Biosciences — a computational biotechnology company engineering gene therapies, proteins and delivery vehicles from sequence to clinic.',
  openGraph: {
    title: 'HELIXON Biosciences',
    description: 'Precision biology, engineered.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
