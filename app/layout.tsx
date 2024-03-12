import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
// import { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: "Riggs9000 – Write Linkedin posts in your tone & style",
  description:
    "Riggs9000 is an AI bot built with your keeping your sanity in mind.",
   openGraph: {
    title: 'Riggs9000',
    description: 'Riggs9000 is an AI bot built with your keeping your sanity in mind.',
    url: 'https://riggs9000.vercel.app',
    siteName: 'Riggs 9000',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/documents/5855ca27-8ac4-4458-afa0-b580eebbb155.png?token=sZTJcBm6UckhtGEd0342p6dZCbIH829qNGnMbLnyNCE&height=630&width=1200&expires=33246212277',
        width: 800,
        height: 600,
      },
      {
        url: 'https://opengraph.b-cdn.net/production/documents/5855ca27-8ac4-4458-afa0-b580eebbb155.png?token=sZTJcBm6UckhtGEd0342p6dZCbIH829qNGnMbLnyNCE&height=630&width=1200&expires=33246212277',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
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
