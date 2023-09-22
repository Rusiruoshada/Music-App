'use client'

import Image from 'next/image';
import React from 'react';
import logo from '../public/AMS 3.png';
import Link from 'next/link';
import '../styles/nav.css'
import {FiMenu} from 'react-icons/fi'
import { useState } from 'react';

export default function Nav() {

    const [showMenus ,setShowMenus] = useState(false);

    const showMenu = () => {
        console.log('click the menu');
        setShowMenus(!showMenus);
    }

  return (
    <div className="flex flex-row lg:px-14 sm:px-6 nav">
        <div className="logo relative w-32 h-52">
            <Image className='image object-cover' src={logo} alt='logo image' sizes='(max-width: 768px) 100vw' priority={true} fill />
        </div>
        <div className="flex flex-col w-full pt-12">
            <h1 className='flex justify-center text-center  headingText md:text-center sm:text-[22px] md:text-[27px] sm:px-5'>L&apos;OPERĀ INTERNATIONAL SCHOOL</h1>
            <div className="md:flex justify-around mt-5 uppercase link hidden md:block">
                 <Link href={'/home'}>Home</Link>
                 <Link href={'/aboutus'}>About Us</Link>
                 <Link href={'/courses'}>Courses</Link>
                 <Link href={'/gallery'}>Gallery</Link>
                 <Link href={'/contact'}>Contact</Link>
            </div>
        </div>
        <div className='flex items-start pt-12 px-2 md:hidden' onClick={showMenu}>
            <FiMenu className='text-[32px] cursor-pointer' />
        </div>
    </div>
  );
}
