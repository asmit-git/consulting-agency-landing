import React from 'react'
import About from './Components/About'
import Banner from './Components/Banner'
import CaseStudies from './Components/CaseStudies'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Team from './Components/Team'
import Testimonials from './Components/Testimonials'

function Home() {
  return (
    <>
      <div className='bg-background'>
        <Banner />
      </div>
      <Services />
      <About />
      <CaseStudies />
      <Team />
      <Faq />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home