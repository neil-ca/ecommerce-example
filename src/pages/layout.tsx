"use client"
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { type AppType } from 'next/app'
import { api } from "~/utils/api";
import './globals.css'
import { Inter } from 'next/font/google'

export interface DashProps {
        children: React.ReactNode;
    }

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <SessionProvider>
      <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>

  </SessionProvider>
  )
}
