import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FloatingDock from '@/components/navigation/FloatingDock'
import WelcomeIntro from '@/components/ui/WelcomeIntro'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ninad Belorkar - Software Engineer',
  description:
    'Portfolio of Ninad Belorkar, a Computer Science Engineer and Software Intern building software, cloud, backend, testing and AI-driven solutions.',
  metadataBase: new URL('https://ninadbelorkar.space'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Ninad Belorkar - Software Engineer',
    description:
      'Portfolio of Ninad Belorkar, a Computer Science Engineer and Software Intern building software, cloud, backend, testing and AI-driven solutions.',
    url: 'https://ninadbelorkar.space',
    siteName: 'Ninad Belorkar',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ninad Belorkar - Software Engineer',
    description:
      'Portfolio of Ninad Belorkar, a Computer Science Engineer and Software Intern building software, cloud, backend, testing and AI-driven solutions.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body suppressHydrationWarning>
        <WelcomeIntro />
        {children}
        <FloatingDock />
      </body>
    </html>
  )
}
