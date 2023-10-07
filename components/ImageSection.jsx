import React from 'react';
import image1 from '../public/4.png';
import image2 from '../public/our Studio.png'
import image3 from '../public/6.png';
import image4 from '../public/5.png';
import image5 from '../public/7.png';
import image6 from '../public/3.png';
import Image from 'next/image';

export default function ImageSection() {

const images = [image1,image2, image3, image4, image5, image6];

  return (
        <div className='hidden md:grid lg:grid-cols-5 md:grid-cols-4 gap-x-2 mt-5 h-60  md:grid-rows-1' >
            {images.map((image,index) => (
                <div key={index} className=' relative transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-200 '>
                    <Image alt='image of work' src={image}  className='object-cover' fill />
                </div>
            ))}
        </div>
  )
}
