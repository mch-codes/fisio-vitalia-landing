import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const title = 'Fisioterapia en Chamberí, Madrid | Clínica Fisio Vitalia'
const description =
  'Clínica de fisioterapia en Chamberí, Madrid. Fisioterapia general, deportiva, punción seca y suelo pélvico. Pide tu primera cita online.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
