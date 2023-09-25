import React from 'react'
import HeroSectionText from './HeroSectionText'
import HeroSectionImages from './HeroSectionImages'

export default function HeroSection() {
  return (
    <div className='flex flex-row lg:px-14 sm:px-6 px-5'>
        <HeroSectionText />
        <HeroSectionImages />
    </div>
  )
}
