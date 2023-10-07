import Image from 'next/image';
import React from 'react';
import logo from '../public/AMS 3.png';
import image1 from '../public/image1.png';
import image2 from '../public/image2.png';
import image3 from '../public/image3.png';
import image4 from '../public/image4.png';
import image5 from '../public/image5.png';
import image6 from '../public/image6.png';


export default function UpperFooter() {

  const images= [image1, image2, image3, image4, image5, image6];

  return (
    <div className='lg:gap-20 lg:px-10 md:px-5 md:gap-10 md:flex-row sm:px-6 py-16 padding px-5 bg-black justify-between items-center flex-col w-full flex'>
      <div className='flex flex-col md:w-1/3 w-full max-width(475px):w-10/12'>
        <div className='flex flex-row gap-3 '>
          <div className='sm:w-36 w-32 h-50 relative'>
            <Image
              src={logo}
              alt='logo'
              className='object-cover md:scale-75 sm:scale-75 scale-75'
              fill
            />
          </div>
          <div className='flex flex-col pt-5 items-start'>
            <p className='lg:text-base md:text-xs text-white capitalize mb-4 '>
              L'OPERĀ INTERNATIONAL SCHOOL
            </p>
            <div className='flex flex-col gap-2'>
              <p className='lg:text-base md:text-xs text-gray-400'>
                Via Giovanni Keplero, 37, 20124 Milano MI, Italy
              </p>
              <p className='lg:text-base md:text-xs text-gray-400'>
                +39 02 4962 6742
              </p>
              <p className='lg:text-base md:text-xs text-gray-400'>
                +39 34 9714 8338
              </p>
              <p className='lg:text-base md:text-xs text-gray-400'>
                lopera.int@gmail.com
              </p>
            </div>
          </div>
        </div>
        <hr className='my-8 h-px border-0 bg-gray-400' />
        <div className='md:items-start flex-col flex  items-center'>
          <p className='text-white lg:text-xs font-medium text-base text-[10px py-1] '>
            Orari di servizio
          </p>
          <p className='lg:text-xs font-podkova text-gray-400 font-medium text-base my-2'>
            Sempre e ovunque
          </p>
        </div>
      </div>
      <div className='md:hidden sm:block'>
        <div className='flex flex-col gap-4 mt-4'>
            <p
              className='text-[#a0a0a0] font-podkova font-medium lg:text-base md:text-xs ease-in-out duration-200 transition text-sm gap-2 flex hover:text-[#c98d3f] hover:translate-x-1 cursor-pointer'
              href='/privacypolicy'
            >
              <span className='text-[26px]'>&#x1F892;</span>Privacy Policy
            </p>
            <p
              className='text-[#a0a0a0] font-podkova font-medium lg:text-base md:text-xs ease-in-out duration-200 transition text-sm gap-2 flex hover:text-[#c98d3f] hover:translate-x-1 cursor-pointer'
              href='/help'
            >
              <span className='text-[26px]'>&#x1F892;</span>Help
            </p>
            <p
              className='text-[#a0a0a0] font-podkova font-medium lg:text-base md:text-xs ease-in-out duration-200 transition text-sm gap-2 flex hover:text-[#c98d3f] hover:translate-x-1 cursor-pointer'
              href='/connect'
            >
              <span className='text-[26px]'>&#x1F892;</span>Connect
            </p>
        </div>    
      </div>
      <div className='md:w-1/3 md:flex justify-around hidden'>
        <div>
          <p className='lg:text-base md:text-xs text-white font-medium'>
            Esplora i link
          </p>
          <div className='flex flex-col gap-4 mt-4'>
            <p
              className='text-[#a0a0a0] font-podkova font-medium lg:text-base md:text-xs ease-in-out duration-200 transition text-sm gap-2 flex hover:text-[#c98d3f] hover:translate-x-1 cursor-pointer'
              href='/about'
            >
              <span className='text-[26px]'>&#x1F892;</span>About
            </p>
            <p
              className='text-[#a0a0a0] font-podkova font-medium lg:text-base md:text-xs ease-in-out duration-200 transition text-sm gap-2 flex hover:text-[#c98d3f] hover:translate-x-1 cursor-pointer'
              href='/contact'
            >
              <span className='text-[26px]'>&#x1F892;</span>Contact
            </p>
            <p
              className='text-[#a0a0a0] font-podkova font-medium lg:text-base md:text-xs ease-in-out duration-200 transition text-sm gap-2 flex hover:text-[#c98d3f] hover:translate-x-1 cursor-pointer'
              href='/gallery'
            >
              <span className='text-[26px]'>&#x1F892;</span>Gallery
            </p>
          </div>
        </div>
        <div>
          <p className='lg:text-base md:text-xs text-white font-medium'>
            Esplora i link
          </p>
          <div className='flex flex-col gap-4 mt-4'>
            <p
              className='text-[#a0a0a0] font-podkova font-medium lg:text-base md:text-xs ease-in-out duration-200 transition text-sm gap-2 flex hover:text-[#c98d3f] hover:translate-x-1 cursor-pointer'
              href='/event'
            >
              <span className='text-[26px]'>&#x1F892;</span>Event
            </p>
            <p
              className='text-[#a0a0a0] font-podkova font-medium lg:text-base md:text-xs ease-in-out duration-200 transition text-sm gap-2 flex hover:text-[#c98d3f] hover:translate-x-1 cursor-pointer'
              href='/ourcourses'
            >
              <span className='text-[26px]'>&#x1F892;</span>Our Courses
            </p>
          </div>
        </div>
      </div>
      <div className='md:w-1/3 md:block hidden'>
          <p className='lg:text-base md:text-sm text-white font-medium mb-3'>Post</p>
          <div className='lg:h-52 md:h-40 gap-3 grid-cols-3 grid'>
              {images.map((image, index) => (
                <div key={index} className='relative brightness-75 transition ease-in-out delay-50 hover:scale-110 duration-200'>
                  <Image src={image} alt='posts' className='object-cover' fill />
                </div>
              ))}
          </div>
      </div>
    </div>
  );
}
