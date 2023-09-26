import React from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Button({
  text,
  border,
  bgColor = 'transparent',
  textColor = '#fff',
  hoverBgColor,
  path,
}) {

  const router = useRouter();

  return (
    <button
      className={`group rounded-[5px] ${border} bg-[${bgColor}] py-[0.5rem] px-[1.5rem] lg:text-[1.2rem] tracking-[0.02rem] lg:leading-[1.75rem] md:text-[1rem] md:leading-[1.5rem] h-12 text-[${textColor}] hover:bg-[${hoverBgColor}] transition-all mr-4 hover:scale-[1.02]`}
      onClick={()=> router.push(`/${path}`)}
    >
      {text}
      <span className='pl-4 font-bold inline-block align-middle group-hover:animate-[pulse_1s_ease-in-out_infinite] '>
        <AiOutlineArrowRight />
      </span>
    </button>
  );
}
