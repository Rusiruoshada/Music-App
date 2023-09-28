import React from 'react';

export default function Video() {
  return (
    <div className='w-full' style={{width:'100%' }}>
        <video autoPlay loop muted controls  preload='auto' className='w-screen'>
            <source src='https://tenor.com/en-GB/view/ine-dekeyser-carolien-rondelez-thinking-gif-12485420188614996287' type='video/mp4'/>
        </video>
    </div>
  )
}
