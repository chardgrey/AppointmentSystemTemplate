import Hero from '../landing/Hero'
import Features from '../landing/Features'
import BookingSection from '../landing/BookingSection'
import Testimonials from '../landing/Testimonials'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AboutUs from '../landing/AboutUs'

const LandingPage = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
      easing: 'ease-out-cubic'
    })
  }, [])

  return (
    <div className="min-h-screen relative bg-transparent">
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <BookingSection />
        <AboutUs />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage