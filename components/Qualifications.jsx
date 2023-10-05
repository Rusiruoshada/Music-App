import Image from 'next/image';
import React from 'react';
import ourStudio from '../public/our Studio.png';

export default function Qualifications() {
  return (
    <div className='py-10 flex flex-row w-full'>
      <div className='bg-[rgb(194,158,117)] padding flex flex-col md:w-1/2 justify-center md:py-0 md:h-screen h-[28rem]'>
        <p className='lg:text-base md:text-sm uppercase text-black font-[roboto]'>
          TITOLI DI STUDIO
        </p>
        <h2 className='uppercase lg:leading-[4rem] lg:text-[3rem] md:leading-9 md:text-[1.875rem] md:my-0 text-black font-semibold text-[2.25rem] leading-[2.5rem] font-[Merriweather] mt-1 mb-2'>
          Our Studio
        </h2>
        <p className='text-black font-bold text-base my-3 '>
          Porta la tua passione per la musica al livello successivo con
          certificazioni riconosciute a livello nazionale ed internazionale.
        </p>
        <p className='text-black text-sm my-2'>
          Crediamo nell'eccellenza e nel riconoscimento del tuo talento
          musicale. Offriamo ai nostri studenti l'opportunità di ottenere
          certificazioni musicali di prestigio, tra cui quelle rilasciate dal
          rinomato Trinity College di Londra. Con il nostro supporto e programmi
          didattici su misura, puoi prepararti in modo efficace per gli esami
          teorici e pratici, proiettandoti verso una carriera musicale di
          successo.
        </p>
        <ul className='flex flex-col gap-3 mt-2'>
          <li className='text-black text-sm '>
            <div className='bg-black w-1 h-2 inline-block mr-2'></div>
            Certificazioni riconosciute a livello nazionale ed internazionale
          </li>
          <li className='text-black text-sm'>
            <div className='bg-black w-1 h-2 inline-block mr-2'></div>
            Supporto nella preparazione di esami teorici e pratici
          </li>
          <li className='text-black text-sm'>
            <div className='bg-black w-1 h-2 inline-block mr-2'></div>
            Alta formazione artistica
          </li>
        </ul>
      </div>
      <div className='hidden md:block md:w-1/2 relative'>
        <Image alt='our studio' src={ourStudio} className='object-cover' fill/>
      </div>
    </div>
  );
}
