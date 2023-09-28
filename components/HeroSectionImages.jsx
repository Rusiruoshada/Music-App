import Image from 'next/image'
import React from 'react'
import guitarImage from '../public/ben-collins-Fr2iwKpsi-Y-unsplash 1.png'
import micImage from '../public/matt-botsford-OKLqGsCT8qs-unsplash 1.png'

export default function HeroSectionImages() {
  return (
    <div className='flex flex-row md:gap-2 lg:gap-4 lg:justify-end  my-2 lg:w-6/12 md:w-5/12 relative'>
        <div className="w-5/12 hidden md:block lg:block relative bg-cover md:h-96 lg:h-[30rem]">
            <Image src={guitarImage}  alt='guitar image' className='object-cover' priority={true} sizes='(max-width: 768px) 100vw' fill />
        </div>
        <div className="flex flex-col gap-3 pt-7 lg:w-[35%] absolute top-[-110px] right-[20px] min-[360px]:pt-6 min-[360px]: md:static ">
            <div className='flex flex-col w-full  bg-gradient-to-b from-[rgba(217,217,217,0.33)] to-transparent  text-white justify-center sm:max-w-[10rem] py-5 sm:py-4 px-3 max-w-[7rem] min-[360px]:max-w-[7rem] min-[360px]:p-2 '>
                    <p className='flex justify-center lg:text-[270%] text-[28px] md:text-[270%] sm:text-[44px] lg:leading-[120%] sm:leading-[100%] tracking-[2px] font-[Playfair Display] text-center min-[360px]:text-[2rem]'>97%</p>
                    <p className='flex justify-center font-[Roboto] sm:text-[16px] lg:leading-[156%]  lg:mt-[8px] text-center min-[360px]:text-[0.75rem]'>delle persone nel mondo ama ascoltare la musica.</p>
                </div>
                <div className="w-[160px] md:w-[100%] lg:w-[160px] hidden md:block lg:block">
                    <Image alt='mic image' src={micImage} priority={true}/>
                </div>
          </div>
    </div>
  )
}
