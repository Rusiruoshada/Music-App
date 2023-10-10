'use client';

import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function OverlayMenu({ onShow }) {
  const menuItems = ['home', 'about', 'courses', 'gallery', 'contact'];

  return (
    <>
      <div className='text-xl h-full fixed top-0 bottom-0 right-0 left-0 w-full z-40 bg-[rgba(0,0,0,0.8)] flex flex-col justify-center font-[roboto] padding lg:hidden'>
        <IoMdClose
          className='text-[36px] absolute top-[45px] right-[26px] cursor-pointer hover:skew-x-10 '
          onClick={onShow}
        />
        <ul className='text-lg font-semibold uppercase mx-auto flex flex-col gap-6'>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className='items-center cursor-pointer hover:text-[#C29E75] transition  ease-in  px-10 flex flex-col group relative'
              href={`/${item}`}
            >
              {item}
              <span className="w-0 h-1 group-hover:w-10 group-h-0 hover:h-1 bg-[#C29E75] rounded transition group-hover:translate-x-4 duration-[2000ms] ease-in-out delay-100 absolute top-7" />
              <span className="w-0 h-1 group-hover:w-10 group-h-0 hover:h-1 bg-[#C29E75] rounded transition duration-[2000ms] ease-in-out delay-150 group-hover:-translate-x-4" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
