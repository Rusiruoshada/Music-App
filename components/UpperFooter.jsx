import Image from 'next/image'
import React from 'react'
import logo from '../public/AMS 3.png'

export default function UpperFooter() {
  return (
    <div className='lg:gap-20 md:px-5 md:gap-10 md:flex-row sm:px-6 py-16 padding bg-black justify-between items-center flex-col w-full flex'>
        <div className='flex flex-col md:w-1/3 w-full max-width(475px):w-10/12'>
            <div className='flex flex-row gap-3 '>
                <div className='sm:w-36 w-32 relative'>
                    <Image src={logo} alt='logo' className='object-cover' fill  />
                </div>
            </div>
        </div>
    </div>
  )
}
