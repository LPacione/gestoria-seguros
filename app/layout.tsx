import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'María Belén Alvez | Gestoría del Automotor y Seguros (Darregueira y todo el país)',
  description: 'Gestoría del automotor, motovehículos, maquinarias y seguros en Darregueira y con atención en todo el país. Trámites rápidos, claros y seguros.',
  keywords: ['gestoria', 'seguros', 'darregueira', 'automotor', 'maquinaria', 'transferencias', 'todo el pais', 'maria belen alvez'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.ico',
        type: 'image/x-icon',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'María Belén Alvez | Gestoría y Seguros',
    description: 'Gestoría del automotor, motovehículos, maquinarias y seguros en Darregueira y todo el país.',
    url: 'https://mariabelenalvez.com.ar',
    siteName: 'María Belén Alvez',
    locale: 'es_AR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
