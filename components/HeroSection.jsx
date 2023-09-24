import React from 'react'
import HeroSectionText from './HeroSectionText'
import HeroSectionImages from './HeroSectionImages'

export default function HeroSection() {
  return (
    <div className='flex flex-row md:px-[4rem] sm:px-[24px] px-5'>
        <HeroSectionText />
        <HeroSectionImages />
    </div>
  )
}
