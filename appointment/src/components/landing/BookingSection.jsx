import { ArrowRight, Users, CheckCircle, Clock, Calendar, ChevronRight } from 'lucide-react'
import SilkBackground from '../ui/SilkBackground'
import ShinyText from '../ui/Shiny'

const BookingSection = ({ onBookNow }) => {
  return (
    <section 
      id="booking" 
      className="py-24 relative"
    >
      {/* Silk Background */}
      <SilkBackground color="#1E293B" speed={3} noiseIntensity={1} />
      
      {/* Semi-transparent overlay for better readability */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Booking info and CTA */}
          <div className="text-center lg:text-left">
            <header>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
                Join thousands of satisfied clients who have streamlined their appointment scheduling with our platform.
              </p>
            </header>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6 md:mb-10">
              {/* Stat Cards */}
              <article className="bg-slate-800/70 p-3 sm:p-4 md:p-6 rounded-lg backdrop-blur-sm border border-slate-700">
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3 mb-1">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-amber-400" aria-hidden="true" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">5K+</p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Happy Clients</p>
              </article>
              
              <article className="bg-slate-800/70 p-3 sm:p-4 md:p-6 rounded-lg backdrop-blur-sm border border-slate-700">
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3 mb-1">
                  <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400" aria-hidden="true" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">99.9%</p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Uptime</p>
              </article>
              
              <article className="bg-slate-800/70 p-3 sm:p-4 md:p-6 rounded-lg backdrop-blur-sm border border-slate-700">
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3 mb-1">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-amber-400" aria-hidden="true" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">24/7</p>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-gray-400">Support</p>
              </article>
            </div>

            <button 
              onClick={onBookNow}
              className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all shadow-lg border border-amber-400/30 hover:shadow-amber-500/20 inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2 text-slate-800" aria-hidden="true" />
              <span>Book Your Appointment Today</span>
              <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </button>
          </div>
          
          {/* Right side: Benefits */}
          <aside 
            className="bg-slate-900/60 backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 border border-slate-700 shadow-xl"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Why Choose Our Booking System?</h3>
            
            <ol className="space-y-4 sm:space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/70 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-amber-400 font-bold text-sm sm:text-base">1</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Simple Booking Process</h4>
                  <p className="text-sm sm:text-base text-gray-300">Our intuitive interface makes scheduling appointments a breeze - no technical skills required.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/70 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-amber-400 font-bold text-sm sm:text-base">2</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Automated Reminders</h4>
                  <p className="text-sm sm:text-base text-gray-300">Reduce no-shows with automatic email and SMS reminders sent before appointments.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-slate-800/70 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-amber-400 font-bold text-sm sm:text-base">3</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Calendar Sync</h4>
                  <p className="text-sm sm:text-base text-gray-300">Seamlessly integrate with Google Calendar, Outlook, and other popular calendar services.</p>
                </div>
              </li>
            </ol>
            
            <footer className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-700">
              <div className="flex items-center justify-between">
                <p className="text-gray-300">
                  <ShinyText 
                    text="30-day " 
                    accentText='free trial'
                    disabled={false} 
                    speed={3} 
                    className='tracking-wide text-gray-300 text-sm sm:text-base'
                    accentClassName='tracking-wide text-gray-300 text-sm sm:text-base'
                  />
                </p>
                <button 
                  onClick={onBookNow}
                  className="text-amber-400 cursor-pointer hover:text-amber-300 flex items-center transition-colors"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </button>
              </div>
            </footer>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default BookingSection
