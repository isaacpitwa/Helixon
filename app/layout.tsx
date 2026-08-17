import type { Metadata } from 'next'
import { Syne, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import { LenisProvider } from '@/components/LenisProvider'

const syne = Syne({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-display', display: 'swap' })
const instrumentSans = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

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
    <html lang="en" className={`${syne.variable} ${instrumentSans.variable} ${ibmPlexMono.variable}`} suppressHydrationWarning>
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
