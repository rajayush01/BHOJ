import EventsSection from '@/components/home/EventsSection'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import LinkItem from '@/components/home/LinkItem'
import React from 'react'
import News from '@/components/home/News'
import ImpLinks from '@/components/home/ImpLinks'

const Home = () => {
  return (
    <div className="antialiased bg-white">
      {/* NO FLOATING BUTTON COMPONENT HERE! It's already in App.tsx */}
      <HeroSection />
      <StatsSection />
      <EventsSection />

      <News/>

      <ImpLinks/>
      
      {/* <div className='flex flex-col px-10 gap-10'>
        <ChancellorNoticesSection/>
        <ViceChancellorNoticesSection/>
      </div> */}
      
      {/* <OurInstitutions/> */}
      {/* <AboutSection /> */}

      <LinkItem/>
      
     
      {/* <AdmissionEnquiry/> */}
      {/* <CampusLife />
      <Upcomingevents/>
      <TestimonialsSection />
      <CTASection /> */}
    </div>
  )
}

export default Home