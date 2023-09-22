import Image from 'next/image';
import React from 'react';
import logo from '../public/AMS 3.png';
import Link from 'next/link';
import '../styles/nav.css'


export default function Nav() {
  return (

    <div className="flex flex-row lg:px-14 sm:px-6 nav">
        <div className="logo relative w-32 h-52">
            <Image className='image object-cover' src={logo} alt='logo image' fill />
        </div>
        <div className="flex flex-col w-full pt-12">
            <h1 className='flex justify-center text-center  headingText md:text-center sm:text-[16px] text-[27px]'>L&apos;OPERĀ INTERNATIONAL SCHOOL</h1>
            <div className="flex justify-around mt-5 uppercase link">
                 <Link href={'/home'}>Home</Link>
                 <Link href={'/aboutus'}>About Us</Link>
                 <Link href={'/courses'}>Courses</Link>
                 <Link href={'/gallery'}>Gallery</Link>
                 <Link href={'/contact'}>Contact</Link>
            </div>
        </div>
    </div>
  );
}
