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

  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    // slides[slideIndex - 1].style.display = 'block';
  }

  return (
    <div className='padding'>
      <div className='flex flex-row'>
        {images.map((card, index) => (
          <div key={index} className='mySlides flex flex-col overflow-hidden hidden'>
            <div className='w-[100%] '>
              <Image alt={card.course} src={card.image} />
            </div>
            <div className='py-4 text-white text-4 w-full align-center'>
              <p>{card.course}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='select-none relative'>
        <button
          className='prev pointer absolute top-[50%]  mt-[-22px] text-white  py-2 px-4 font-bold text-[18px] rounded-full hover:bg-[rgba(110,0,0,0.8)] transition duration-150 ease-out  hover:ease-in'
          onClick={plusSlides(-1)}
        >
          &#10094;
        </button>
        <button
          className='next pointer absolute top-[50%]  mt-[-22px] text-white  py-2 px-4 font-bold text-[18px] rounded-full hover:bg-[rgba(110,0,0,0.8)] transition duration-150 ease-out  hover:ease-in'
          onClick={plusSlides(-1)}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
