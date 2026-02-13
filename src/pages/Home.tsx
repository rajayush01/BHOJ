import EventsSection from '@/components/home/EventsSection'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import React from 'react'
import News from '@/components/home/News'
import ImpLinks from '@/components/home/ImpLinks'
import About from '@/components/home/About'
import UniversitySongs from '@/components/home/UniversitySongs'
import GalleryPreview from '@/components/home/GalleryPreview'


const Home = () => {
  return (
    <div className="antialiased bg-white">
      {/* NO FLOATING BUTTON COMPONENT HERE! It's already in App.tsx */}
      <HeroSection />
      <About/>
      <StatsSection />
      <EventsSection />

      <News/>

      <ImpLinks/>
      <UniversitySongs/>

      <GalleryPreview/>
      
      {/* <div className='flex flex-col px-10 gap-10'>
        <ChancellorNoticesSection/>
        <ViceChancellorNoticesSection/>
      </div> */}
      
      {/* <OurInstitutions/> */}
      {/* <AboutSection /> */}

      {/* <LinkItem/> */}
      
     
      {/* <AdmissionEnquiry/> */}
      {/* <CampusLife />
      <Upcomingevents/>
      <TestimonialsSection />
      <CTASection /> */}
    </div>
  )
}

export default Home