import React from 'react'
import HeroSectionText from './HeroSectionText'
import HeroSectionImages from './HeroSectionImages'

export default function HeroSection() {
  return (
    <div className='flex flex-row '>
        <HeroSectionText />
        <HeroSectionImages />
    </div>
  )
}
