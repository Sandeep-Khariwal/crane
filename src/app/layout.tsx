import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishana Crana service',
  description: 'Need Hydra Crane in sirsa, Haryana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{margin:"0", padding:"0"}} className={inter.className}>{children}</body>
    </html>
  )
}
