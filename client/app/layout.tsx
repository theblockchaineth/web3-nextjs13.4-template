import './globals.css'

import { Inter, Permanent_Marker } from 'next/font/google';
import AllProvidersWrapper from './_components/AllProvidersWrapper'

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

export const metadata = {
  title: {
    default: 'The Pariah NFT',
  },
  description: {
    default: 'The Pariah is an exploration and fusion of classic, gritty, American Comic Art and a concept story of a near-future metropolis haunted by a mysterious killer.',
  },
  keywords: "NFT, The Pariah, Pariah, Comic, Comic Art, Comic Book, Comic Book Art, Comic Book Artist, Comic Book Artwork, Comic Book Cover, Comic Book Cover Art",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Pariah NFT',
    description: 'The Pariah is an exploration and fusion of classic, gritty, American Comic Art and a concept story of a near-future metropolis haunted by a mysterious killer.',
    creator: '@tbc_eth',
    images: ['/mint-splash.jpg'],
  },
  openGraph: {
    title: 'The Pariah NFT',
    description: 'The Pariah is an exploration and fusion of classic, gritty, American Comic Art and a concept story of a near-future metropolis haunted by a mysterious killer.',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="business">
      <body className={`${inter.variable} ${marker.variable} before:min-h-screen `}>
        <AllProvidersWrapper>
          {children}
        </AllProvidersWrapper>
      </body>
    </html>
  )
}
