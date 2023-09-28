'use client'

import React from 'react';

export default function OverlayMenu({onShow}) {

  return (
      <> 
        {onShow&& (
          <div className='text-xl h-screen bg-black'>
          </div>
        )}
      </>
  )
}
