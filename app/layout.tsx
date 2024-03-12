import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Riggs9000 – Write Linkedin posts in your tone & style",
  description:
    "Riggs9000 is an AI bot built with your keeping your sanity in mind.",
  image: "https://i.imgur.com/2U0J2Y6.png",
  url: "https://riggs9000.vercel.app/"
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
