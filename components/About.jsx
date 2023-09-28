import Image from 'next/image'
import React from 'react'
import homepageAboutSection from '../public/homepageAboutSection.png'

export default function About() {
  return (
    <div className='flex flex-row gap-0 md:py-14 py-4 homepageAboutSectionDiv'>
        <div className='hidden md:block md:w-1/2 w-full relative h-screen'>
          <Image src={homepageAboutSection} alt='a girl holding a headphone' className='object-cover absolute  h-[100%] w-[100%] left-[-56px] right-0 top-0 bottom-0 homepageAboutSectionImage'/>
        </div>
        <div className='md:w-1/2 md:pt-20 sm:px-11 pt-6 flex flex-col'>
          <p className='uppercase text-[#523735] lg:text-[1rem] lg:heading-[1.5rem] md:text-[0.875rem] md:leading-[1.25rem] font-[roboto]'>About us</p>
          <h2 className=''>PROFESSIONALITÀ ED ESPERIENZA</h2>
        </div>
    </div>
  )
}
