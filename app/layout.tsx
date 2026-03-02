import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import CookieConsent from '@/components/CookieConsent/CookieConsent'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mission Nights – Wo Vision auf Menschen trifft',
  description:
    'Mission Nights – Wo Vision auf Menschen trifft. Exklusive Events für Unternehmer, Gründer und ambitionierte Menschen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
