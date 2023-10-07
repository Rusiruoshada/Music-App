import Image from 'next/image';
import React from 'react';
import reward1 from '../public/reward1.png';
import reward2 from '../public/reward2.png';

export default function HighArtisticEducationImage() {
  return (
    <div className='py-14 space-even w-full flex flex-row padding'>
      <div className='flex flex-col sm:flex-row w-full lg:w-1/2 justify-center'>
        <div className='flex flex-col relative rounded-[0.635rem] aspect-square bg-gradient-to-t from-[#c29e75] w-64 hover:scale-105 transition ease-in-out duration-200 hover:shadow-2xl hover:shadow-cyan-900'>
          <div className='pl-16 flex-col flex my-auto'>
            <span className='text-white font-bold text-lg items-center flex mt-5 mr-4 '>
              Trinity College London - Digital Transformation Award
            </span>
          </div>
          <div className='absolute left-[-40%] sm:left-[-120px] md:left-[-140px]  lg:left-[-140px]'>
            <div className='relative w-64 h-64'>
              <Image
                alt='rewards'
                src={reward1}
                className='object-contain lg:scale-100 md:scale-[90%] sm:scale-[70%] scale-50'
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center w-full lg:w-1/2 '>
        <div className='flex flex-col relative rounded-[0.635rem] aspect-square bg-gradient-to-t from-[#c29e75] w-64 hover:scale-105 transition ease-in-out duration-200 hover:shadow-2xl hover:shadow-cyan-900'>
          <div className='pl-16 flex-col flex my-auto'>
            <span className='text-white font-bold text-lg items-center flex mt-5 mr-4 '>
              Trinity College London - Digital Transformation Teacher
            </span>
          </div>
          <div className='absolute left-[-40%] sm:left-[-120px] md:left-[-140px]  lg:left-[-140px]'>
            <div className='relative w-64 h-64'>
              <Image
                alt='rewards'
                src={reward2}
                className='object-contain lg:scale-100 md:scale-[90%] sm:scale-[70%] scale-50'
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
