import Image from 'next/image';
import React from 'react';
import homepageAboutSection from '../public/homepageAboutSection.png';
import { AiOutlineCaretUp } from 'react-icons/ai';
import Button from './Button';

export default function About() {
  return (
    <div className='flex flex-row gap-0 md:py-14 py-4 '>
      <div className='hidden md:block md:w-1/2 w-full relative h-screen'>
        <Image
          src={homepageAboutSection}
          alt='a girl holding a headphone'
          className='object-cover absolute  h-[100%] w-[100%] left-[-56px] right-0 top-0 bottom-0 '
          priority
        />
      </div>
      <div className='md:w-1/2 md:pt-20 sm:px-11 md:px-0 pt-6 flex flex-col'>
        <p className='uppercase text-[#c29e75] lg:text-[1rem] lg:heading-[1.5rem] md:text-[0.875rem] md:leading-[1.25rem] font-[roboto]'>
          About us
        </p>
        <h2 className='lg:leading-[4rem] lg:text-5xl md:leading-[2.25rem] md:text-3xl md:my-0 uppercase font-semibold text-4xl font-[roboto] .mt-1 mb-2'>
          PROFESSIONALITÀ ED ESPERIENZA
        </h2>
        <p className='text-sm font-[roboto] my-2 '>
          La tua scuola di musica a Milano
        </p>
        <p className='text-base font-[roboto] my-3 '>
          L’Opera International Music School è fondata sulla passione per la
          musica e l’ambizione araggiungere un’educazione musicale superiore.I
          nostri docenti sono selezionati non solo per la loro formazione
          accademica, ma anche per il loro solido background nel campo della
          musica.
        </p>
        <ul className='flex flex-col text-[#d9d9d9] text-sm gap-2'>
          <li>
            <AiOutlineCaretUp className='inline rotate-90 ml-[-5px] text-[#c29e75] ' />
            Professionalità
          </li>
          <li>
            <AiOutlineCaretUp className='inline rotate-90 ml-[-5px] text-[#c29e75] ' />
            Metodo
          </li>
          <li>
            <AiOutlineCaretUp className='inline rotate-90 ml-[-5px] text-[#c29e75] ' />
            Qualità
          </li>
        </ul>
        <div className=''>
          <Button text={'Saperne di più'} textColor={'#C29E75'} bgColor={'#523735'} border={undefined} path={'/about'}  marginY={'10'} />
        </div>
      </div>
    </div>
  );
}
