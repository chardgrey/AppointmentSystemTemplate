import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useState, memo, useEffect, useRef } from 'react'
import TestimonialCard from '../ui/TestimonialCards';
import useInView from '../../hooks/useInView';

const Testimonials = () => {
  const [ref, isVisible] = useInView({ threshold: 0.1, once: true, rootMargin: "50px" });
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Navigation functions for carousel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // Auto-slide functionality
  useEffect(() => {
    if (isVisible && !isPaused) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 2000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isVisible, isPaused]);
  
  // Pause auto-sliding when user interacts with carousel
  const pauseAutoPlay = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000); // Resume after 5 seconds of inactivity
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "This appointment system has revolutionized how I manage my client bookings. It's so easy to use and my clients love the convenience!",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Medical Professional",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "The reminder system has significantly reduced no-shows in my practice. The platform is reliable and professional.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Service Provider",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "I can now focus on my clients instead of managing schedules. The automated features save me hours every week!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials-section" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16" data-aos="fade">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </header>

        {/* Desktop View: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.name} 
              testimonial={testimonial} 
              isVisible={isVisible}
              index={index} 
            />
          ))}
        </div>
        
        {/* Mobile View: Carousel with auto-slide */}
        <div 
          className="md:hidden relative px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
        >
          <div className="overflow-hidden rounded-xl">
            {/* Carousel container */}
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isVisible={isVisible}
                    index={index} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={() => { pauseAutoPlay(); prevSlide(); }}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          
          <button 
            onClick={() => { pauseAutoPlay(); nextSlide(); }}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
          
          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => { pauseAutoPlay(); goToSlide(index); }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-amber-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Add CTA button */}
        <div className="mt-16 text-center">
          <button 
            className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-800 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all shadow-lg border border-amber-400/30 hover:shadow-amber-500/20 inline-flex items-center"
            data-aos="fade-up"
          >
            <span>Schedule Your Appointment</span>
            <ChevronRight className="w-5 h-5 ml-2" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(Testimonials);