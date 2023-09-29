'use client'

import About from '@/components/About';
import HeroSection from '@/components/HeroSection';
import OurCourse from '@/components/OurCourse';
import Video from '@/components/Video';

export default function Home() {

  return (
   <>
      <HeroSection />
      <About />
      <Video />
      <OurCourse />
   </>
  )
}
