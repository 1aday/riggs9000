import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: "Riggs9000 – Write Linkedin posts in your tone & style",
  description:
    "Riggs9000 is an AI bot built with your keeping your sanity in mind.",
}

export const metadata: Metadata = {
  openGraph: {
    title: 'Riggs9000 – Write Linkedin posts in your tone & style',
    description: 'Riggs9000 is an AI bot built with your keeping your sanity in mind.',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://raw.githubusercontent.com/1aday/riggs9000/e74bfc13611960b31a4ad5f4d0d2054d20950ba2/public/RIGGS-9000.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://raw.githubusercontent.com/1aday/riggs9000/e74bfc13611960b31a4ad5f4d0d2054d20950ba2/public/RIGGS-9000.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
