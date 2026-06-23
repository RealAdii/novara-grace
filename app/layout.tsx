import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Novara Grace Centre for Child Development and Family Welfare',
  description:
    'A comprehensive centre for child development in Mangalore. ABA therapy, behavioral therapy, speech and language therapy, occupational therapy, play therapy, psychological assessments, and more.',
  keywords: [
    'child development',
    'ABA therapy',
    'behavioral therapy',
    'Mangalore',
    'child therapy',
    'autism',
    'speech therapy',
    'occupational therapy',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
