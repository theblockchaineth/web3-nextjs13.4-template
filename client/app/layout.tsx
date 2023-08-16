"use client";

import './globals.css'
	
import { Inter, Permanent_Marker } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const marker = Permanent_Marker(
  {
    subsets: ['latin'],
    weight: '400',
    variable: '--font-marker',
});

import { ReduxProviders } from './_components/redux/Providers'
import { SessionProvider } from "next-auth/react"
import { WagmiWrapper } from "./_components/web3/WagmiWrapper"

import Navbar from "./_components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="business">
      <body className={`${inter.variable} ${marker.variable} before:min-h-screen `}>
          <ReduxProviders>
            <SessionProvider>
              <WagmiWrapper>
                <Navbar />
                {children}
              </WagmiWrapper>
            </SessionProvider>
          </ReduxProviders>
      </body>
    </html>
  )
}
