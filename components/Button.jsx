import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

export default function Button({text, border, bgColor='transparent', textColor='#fff',hoverBgColor}) {
  return (
    <button className={`group rounded-[5px] border-[${border}] bg-[${bgColor}] py-[0.5rem] px-[1.25rem] lg:text-[1.25rem] tracking-[0.02rem] lg:leading-[1.75rem] md:text-[1rem] md:leading-[1.5rem] h-12 w-44 text-[${textColor}] hover:bg-[${hoverBgColor}] transition-all`}>
        {text}
        <span className='pl-4 font-bold inline-block align-middle group-hover:animate-[pulse_1s_ease-in-out_infinite] '><AiOutlineArrowRight /></span>
    </button>
  )
}
