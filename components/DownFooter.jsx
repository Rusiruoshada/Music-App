import React from 'react';

export default function DownFooter() {
  return (
    <div className='bg-[#282828] padding py-8 flex'>
      <div className='hidden lg:grid-cols-3 md:grid-cols-2 md:grid justify-between items-center w-full'>
        <div className='flex md:flex-col md:text-sm text-xs gap-2 text-[#a0a0a0] font-podkova font-medium'>
          <p>
            &copy;
            <span className='text-orange-400 capitalize pl-3'>
              L'OPERĀ INTERNATIONAL SCHOOL
            </span>
            <span className='text-gray-500 text-xs pl-3'>
              Tutti i diritti riservati
            </span>
          </p>
        </div>
        <div className='gap-5 justify-center flex'>
          <input
            type='email'
            name='email'
            id='email'
            className='border-b-2 border-b-[#a0a0a0] shadow-sm text-[#c29e75] py-2 px-4 bg-transparent w-full block caret-orange-400 placeholder:text-lg placeholder:text-gray-500 focus:outline-none'
            placeholder='Enter your email address'
          />
          <button type="button" className='lg:text-[36px] text-white font-medium text-[30px] bg-[#c29e75] rounded-full cursor-pointer leading-none px-5'>&#8594;</button>
        </div>
      </div>
    </div>
  );
}
