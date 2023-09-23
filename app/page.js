'use client'

import Nav from '@/components/Nav'
import OverlayMenu from '@/components/OverlayMenu'
import { useState } from 'react'

export default function Home() {

  const [showMenu, setShowMenu] =useState(false);

  const onMenu = () => {
    setShowMenu(!showMenu);
  }
  console.log(showMenu);
  return (
   <>
      {showMenu && (<OverlayMenu />)}
      <Nav onMenuShow={onMenu}/>
      
   </>
  )
}
