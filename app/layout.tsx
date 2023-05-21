import React from 'react'
import './globals.css'
import { Jost, Pangolin, } from 'next/font/google'
import SiteFooter from './SiteFooter'

const sansFont = Jost({
  subsets: ['latin'],
  variable: '--font-sans',
});

const displayFont = Pangolin({
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400'
});

export const metadata = {
  title: 'Bagelpalooza',
  description: 'Bagels as a service. What more could you ask for?',
}

export default function RootLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${sansFont.variable} ${displayFont.variable} font-sans bg-light dark:bg-light-900`}>
        <>
          {children}
        </>
        <SiteFooter />
      </body>
    </html>
  )
}
