import React from 'react';
import { AiFillFacebook } from 'react-icons/ai';
import { FaInstagramSquare, FaTiktok } from 'react-icons/fa';
import { GrLinkedin, GrYoutube } from 'react-icons/gr';

export default function DownFooter() {

  return (
    <div className='bg-[#282828] padding py-8 flex '>
        <div className='lg:grid-cols-3 md:grid-cols-2 md:grid justify-center flex flex-col gap-5 items-center w-full'>
            <div className='flex md:flex-col md:text-sm text-xs gap-2 text-[#a0a0a0] font-podkova font-medium'>
            <p>
                &copy;
                <span className='text-orange-400 capitalize pl-3 text-[17px] md:text-sm font-[podkova]'>
                L'OPERĀ INTERNATIONAL SCHOOL
                </span>
                <span className='text-gray-500 text-xs pl-3'>
                Tutti i diritti riservati
                </span>
            </p>
            </div>
            <div className='gap-5 justify-center flex'>
            <input
                type='email'
                name='email'
                id='email'
                className='border-b-2 border-b-[#a0a0a0] shadow-sm text-[#c29e75] py-2 px-4 bg-transparent w-full block caret-orange-400 placeholder:text-lg placeholder:text-gray-500 focus:outline-none'
                placeholder='Enter your email address'
            />
            <button
                type='button'
                className='lg:text-[36px] text-white font-medium text-[30px] bg-[#c29e75] rounded-full cursor-pointer leading-none px-5'
            >
                &#8594;
            </button>
            </div>
            <div className='lg:justify-end lg:col-span-1 gap-2 flex mt-7 mr-4 col-span-2 justify-center'>
                <AiFillFacebook href='/www.facebook.com/' className='text-white text-4xl p-1 bg-black rounded-md cursor-pointer' />
                <FaInstagramSquare href='www.instagram.com/' className='text-white text-4xl p-1 bg-black rounded-md cursor-pointer' />
                <GrLinkedin href='www.linkedin.com/' className='text-white text-4xl p-1 bg-black rounded-md cursor-pointer' />
                <FaTiktok href='www.tiktok.com/' className='text-white text-4xl p-1 bg-black rounded-md cursor-pointer' />
                <GrYoutube href='www.youtube.com' className='text-white text-4xl p-1 bg-black rounded-md cursor-pointer' />
            </div>
        </div>
    </div>

  );
}
