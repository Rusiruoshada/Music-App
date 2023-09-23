import Image from 'next/image';
import React from 'react';
import logo from '../public/AMS 3.png';
import Link from 'next/link';
import '../styles/nav.css';
import { FiMenu } from 'react-icons/fi';

export default function Nav({ onMenuShow }) {
  const menuLinks = ['home', 'about', 'courses', 'gallery', 'contact'];

  return (
    <div className='flex flex-row lg:px-14 sm:px-6 nav'>
      <div className='logo relative w-32 h-52'>
        <Image
          className='image object-cover'
          src={logo}
          alt='logo image'
          sizes='(max-width: 768px) 100vw'
          priority={true}
          fill
        />
      </div>
      <div className='flex flex-col w-full pt-12'>
        <h1 className='flex justify-center text-center  headingText md:text-center sm:text-[22px] md:text-[27px] sm:px-5'>
          L&apos;OPERĀ INTERNATIONAL SCHOOL
        </h1>
        <div className='md:flex justify-around mt-5 uppercase link hidden md:block'>
          {menuLinks.map((items, index) => (
            <Link key={index} href={items} className='uppercase hover:border-b-2 border-yellow-400 text-slate-400 hover:text-white transition-all '>
              {items}
            </Link>
          ))}
        </div>
      </div>
      <div
        className='flex items-start pt-12 px-2 md:hidden'
        onClick={onMenuShow}
      >
        <FiMenu className='text-[32px] cursor-pointer' />
      </div>
    </div>
  );
}
