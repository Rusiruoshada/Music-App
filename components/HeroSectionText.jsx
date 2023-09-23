import React from 'react'
import Button from './Button'

export default function HeroSectionText() {
  return (
    
    <div className='w-full flex flex-col'>
        <div className='flex flex-col w-12/12 lg:w-6/12 md:w-7/12 pt-[4rem] sm:w-9/12'>
            <h6 className='uppercase text-[1rem] leading-[1.5rem] text-[#C29E75] font-[roboto]'>&apos;DA PASSIONE A PROFESSIONE&apos;</h6>
            <h1 className='uppercase lg:leading-[4rem] lg:text-5xl md:leading-9 md:text-3xl text-white font-semibold font-[Merriweather] mt-1 mb-2 md:my-0 text-4xl'>MUSICA E FORMAZIONE DI QUALITÀ A MILANO</h1>
            <p className='font-[roboto] text-[16px] lg:w-[70%] md:w-full'>La tua Musica, il tuo Futuro. Istruzione musicale certificata: unico partner Ufficiale del Trinity College di Londra a Milano</p>
        </div>
        <div className="flex flex-row my-[34px] ">
            <Button text={'Vedi altro'} bgColor={'#523735'} hoverBgColor={'#111111'} textColor={'#C29E75'} path={'/about'}/>
            <Button text={'Contattaci'} border={'border'} textColor={'#fff'} path={'/contact'}/>
        </div>
    </div>
  )
}
