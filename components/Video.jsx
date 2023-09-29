import React from 'react';

export default function Video() {
  return (
    <div className='w-full'>
        <video autoPlay loop muted controls  preload='auto' className='w-screen'>
            <source src='../public/web1.mp4' type='video/mp4'/>
        </video>
    </div>
  )
}
