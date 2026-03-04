import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Developer portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}

        {/* Cloudflare Web Analytics */}
        <script 
        defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "feb1ea70dc2343458e67613316522327"}'>
        </script>

        <Analytics />
      </body>
    </html>
  )
}