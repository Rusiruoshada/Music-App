import React from 'react';
import bassGuitar1 from '../public/bass-guitar1.png';
import Image from 'next/image';

export default function OurCourseImageSlide() {
  const images = [
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
    { image: bassGuitar1, course: 'Bass guitar' },
  ];

  return (
    <div>
        <div className='flex flex-row  '>
        {images.map((card, index) => (
            <div key={index} className='flex flex-col'>
            <div>
                <Image alt='{card.course}' src={card.image} />
            </div>
            <div className='py-4'>
                <p>{card.course}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}
