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
  metadataBase: new URL('https://www.mission-nights.de'),
  title: {
    default: 'Mission Nights – Exklusive Networking-Events für Unternehmer',
    template: '%s | Mission Nights',
  },
  description:
    'Mission Nights: Exklusive Networking-Events für Unternehmer & Gründer in NRW. Nächster Termin: 21. April 2026, Mülheim an der Ruhr. Jetzt Platz sichern.',
  robots: { index: true, follow: true },
  icons: {
    icon: 'https://assets.mission-nights.de/kunden/mission-nights/images/favicon',
    shortcut: 'https://assets.mission-nights.de/kunden/mission-nights/images/favicon',
    apple: 'https://assets.mission-nights.de/kunden/mission-nights/images/favicon',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.mission-nights.de',
    siteName: 'Mission Nights',
    title: 'Mission Nights – Exklusive Networking-Events für Unternehmer',
    description:
      'Mission Nights: Exklusive Networking-Events für Unternehmer & Gründer in NRW. Nächster Termin: 21. April 2026, Mülheim an der Ruhr. Jetzt Platz sichern.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mission Nights – Exklusive Networking-Events für Unternehmer in NRW',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mission Nights – Exklusive Networking-Events für Unternehmer',
    description:
      'Mission Nights: Exklusive Networking-Events für Unternehmer & Gründer in NRW. Nächster Termin: 21. April 2026.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.mission-nights.de',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mission Nights',
  url: 'https://www.mission-nights.de',
  logo: 'https://assets.mission-nights.de/kunden/mission-nights/images/favicon',
  description:
    'Mission Nights veranstaltet exklusive Networking-Events für Unternehmer, Gründer und ambitionierte Menschen in NRW.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'NRW',
    addressCountry: 'DE',
  },
  sameAs: ['https://www.instagram.com/mission.nights'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
