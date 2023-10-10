'use client'

import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import OverlayMenu from '@/components/OverlayMenu'
import { useState } from 'react'
import Footer from '@/components/Footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "L'OPERĀ INTERNATIONAL SCHOOL",
  description: "L'OPERĀ INTERNATIONAL SCHOOL",
}

export default function RootLayout({ children }) {

  const [showMenu, setShowMenu] = useState(false);

  const onMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <html lang="en">
      <body>
        {showMenu && <OverlayMenu onShow={onMenu} />}
        <Nav onMenuShow={onMenu} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
