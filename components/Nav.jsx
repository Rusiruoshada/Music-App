import Image from 'next/image';
import React from 'react';
import logo from '../public/AMS 3.png';
import Link from 'next/link';
import '../styles/nav.css'


export default function Nav() {
  return (

    <div className="flex flex-row px-14 nav">
        <div className="logo basis-1/12 sm:basis-2/12">
            <Image className='image' src={logo} alt='logo image' />
        </div>
        <div className="flex flex-col basis-11/12 pt-14">
            <h1 className='flex justify-center text-xl text-center  headingText'>L&apos;OPERĀ INTERNATIONAL SCHOOL</h1>
            <div className="space-x-48 flex justify-center  mt-8 link">
                 <Link href={'/home'}>Home</Link>
                 <Link href={'/aboutus'}>About Us</Link>
                 <Link href={'/courses'}>Courses</Link>
                 <Link href={'/contact'}>Contact</Link>
                 <Link href={'/gallery'}>Gallery</Link>
            </div>
        </div>
    </div>
  );
}
