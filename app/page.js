'use client'

import About from '@/components/About';
import HeroSection from '@/components/HeroSection';
import OurCourse from '@/components/OurCourse';
import Video from '@/components/Video';
import Qualifications from '@/components/Qualifications';
import HighArtisticEducation from '@/components/HighArtisticEducation';
import ImageSection from '@/components/ImageSection';
import Footer from '@/components/Footer';

export default function Home() {

  return (
   <>
      <HeroSection />
      <About />
      <Video />
      <OurCourse />
      <Qualifications />
      <HighArtisticEducation />
      <ImageSection />
      <Footer />
   </>
  )
}
