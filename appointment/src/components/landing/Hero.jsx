import { Calendar, Check, Bell } from 'lucide-react'
import { useEffect, useRef } from 'react'
import SilkBackground from '../ui/SilkBackground'

const Hero = ({ onBookNow }) => {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Preload the hero background image
    const img = new Image();
    img.src = '/bg.webp';
    
    // Add fetchpriority attribute to the background container
    if (heroRef.current) {
      heroRef.current.setAttribute('fetchpriority', 'high');
    }
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen w-full pt-20 flex items-center bg-black/80 justify-center overflow-hidden"

    >
      <SilkBackground color="#0f172b" speed={5} noiseIntensity={1} className='bg-transparent/80'/>
      

      {/* <div className="absolute inset-0 bg-gradient-to-t blur-sm from-black to-transparent"></div>
      <div className="absolute inset-0 blur-xs" aria-hidden="true"></div> */}
      <div className="absolute inset-0 "
      style={{
        backgroundImage: 'url("/bg.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      ></div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div data-aos="fade-right" data-aos-delay="100" className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Book Your Appointments 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300"> Effortlessly</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Streamline your scheduling process with our professional appointment management system. 
              Save time, reduce no-shows, and provide better service to your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={onBookNow}
                className="w-full sm:w-auto relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-800 font-semibold rounded-xl border border-amber-400/40 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-550 transition-all duration-300 group"
              >
                <span className="relative z-10">Book Appointment Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 cursor-pointer hover:bg-gray-700/20 rounded-xl text-gray-100/80 hover:text-white font-semibold hover:-translate-y-1 transition-all duration-300 group">
                <span className="relative z-10">Learn More</span>
              </button>
            </div>
          </div>
          
          <article className="relative mt-4 sm:mt-0" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white/95 rounded-3xl sm:py-10 py-10 p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-200/40 border border-slate-200">
              <ul className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
                <li className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-slate-100 border-2 border-slate-200 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-slate-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-slate-800 mb-0.5 sm:mb-1 flex items-center gap-2">
                      Quick Scheduling
                      <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full animate-pulse"></span>
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base">Book in under 2 minutes</p>
                  </div>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-green-50 border-2 border-green-200 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm">
                    <Check className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-green-900 mb-0.5 sm:mb-1 flex items-center gap-2">
                      Instant Confirmation
                      <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base">Get immediate booking confirmation</p>
                  </div>
                </li>
                <li className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-purple-50 border-2 border-purple-200 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-sm">
                    <Bell className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-purple-900 mb-0.5 sm:mb-1 flex items-center gap-2">
                      Smart Reminders
                      <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></span>
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm md:text-base">Never miss an appointment</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl z-0" aria-hidden="true"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-slate-700/30 rounded-full blur-xl z-0" aria-hidden="true"></div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero
