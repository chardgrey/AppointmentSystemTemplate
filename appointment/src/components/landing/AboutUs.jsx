import { Award, Shield, Users, Target, ChevronRight, ChevronLeft } from 'lucide-react';
import { useRef, useState } from 'react';
import SpotlightCard from '../ui/Spotlight';
import TeamCard from '../ui/TeamCard';
import React from 'react';
import useInView from '../../hooks/useInView';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };
  
  // Go to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };
  
  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Reliability",
      description: "Dependable appointment scheduling you can count on, every time.",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Focused",
      description: "Solutions designed with your needs at the center of everything.",
      color: "bg-amber-50 text-amber-600 border-amber-200"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Committed to delivering the highest quality service possible.",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly improving to meet evolving scheduling needs.",
      color: "bg-green-50 text-green-600 border-green-200"
    }
  ];

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      bio: "15+ years experience in scheduling software development.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Sarah Chen",
      role: "Head of Product",
      bio: "Expert in creating intuitive user experiences and interfaces.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Marcus Johnson",
      role: "CTO",
      bio: "Technical leader ensuring platform reliability and security.",
      image: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  return (
    <section id="about" className="py-6 sm:py:6 md:py-24 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We're Making Scheduling <span className="text-amber-500">Simple</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to eliminate scheduling hassles so you can focus on what matters most - your clients and your business.
          </p>
        </header>

        {/* Our Story Section - No animations */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual Side */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent rounded-2xl flex items-end">
                  <div className="p-8">
                    <div className="text-white font-bold text-lg">Founded in 2018</div>
                    <p className="text-gray-200">From startup to industry leader</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl z-0"></div>
            </div>
            
            {/* Content Side */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">
                  Founded in 2018, AppointmentPro emerged from a simple observation: businesses were losing time and money due to inefficient scheduling processes.
                </p>
                <p>
                  We set out to create a solution that would eliminate scheduling headaches, reduce no-shows, and help businesses focus on what they do best—serving their customers.
                </p>
                <p>
                  Today, we serve thousands of businesses worldwide, from solo practitioners to large enterprises, all benefiting from our intuitive and powerful appointment scheduling platform.
                </p>
                <a href="#" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                  Learn more about our journey
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section - No animations */}
        <div className="mb-24">
          <header className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Values That Drive Us</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">These fundamental principles guide our decisions and shape how we deliver service to our clients.</p>
          </header>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
            {values.map((value, index) => (
              <SpotlightCard 
                key={index}
                className="bg-white p-2 sm:p-4 border border-gray-200 hover:border-gray-300 rounded-xl sm:rounded-2xl hover:shadow-md transition-transform duration-300 hover:-translate-y-1"
                spotlightColor={`rgba(${value.color.split(' ')[1].includes('blue') ? '59, 130, 246' : 
                                    value.color.split(' ')[1].includes('amber') ? '245, 158, 11' : 
                                    value.color.split(' ')[1].includes('purple') ? '147, 51, 234' : 
                                    '34, 197, 94'}, 0.2)`}
              >
                {/* Content - Now side-by-side on all screens with minimal spacing */}
                <div className="flex flex-row items-center gap-0.5 sm:gap-3 mb-0 sm:mb-5">
                  <div className={`w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg ${value.color.split(' ')[0].replace('bg-', 'bg-opacity-20 bg-')} flex items-center justify-center flex-shrink-0`}>
                    <div className={value.color.split(' ')[1]}>
                      {React.cloneElement(value.icon, { className: "w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6" })}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-0 sm:gap-2 mb-0">
                      {/* Remove decorative line on mobile */}
                      {/* <div className={`hidden sm:block h-0.5 w-0 sm:w-3 md:w-4 ${value.color.split(' ')[1].replace('text-', 'bg-')}`}></div> */}
                      <h4 className={`
                        ${value.title.length > 15 
                          ? 'text-[10px] sm:text-xs md:text-base lg:text-lg' 
                          : value.title.length > 10
                            ? 'text-[10px] sm:text-sm md:text-base lg:text-lg'
                            : 'text-xs sm:text-base md:text-lg lg:text-xl'
                        } 
                        font-semibold text-gray-900 truncate
                      `}>
                        {value.title}
                      </h4>
                    </div>
                  </div>
                </div>
                
                {/* Description - hidden on mobile */}
                <p className="hidden sm:block text-sm sm:text-base text-gray-600 mt-3">{value.description}</p>
                
                {/* Simplified decorative line - hidden on mobile */}
                <div className="hidden sm:block mt-auto pt-3 sm:pt-4">
                  <div className={`h-0.5 w-0 group-hover:w-full ${value.color.split(' ')[1].replace('text-', 'bg-')} transition-width duration-300`}></div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
        
        {/* Team Section - No animations */}
        <div ref={ref} className={`transition-opacity duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
      <header className="text-center mb-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">The People Behind Our Success</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">Meet the talented individuals who are dedicated to making appointment scheduling better for everyone.</p>
      </header>
      
      {/* Mobile View: Carousel */}
      <div className="md:hidden relative px-4">
        <div className="overflow-hidden rounded-xl">
          {/* Carousel container */}
          <div 
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-6 z-10 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-6 z-10 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
        
        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-4">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentSlide ? 'bg-amber-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      
      {/* Desktop View: Fanned out cards - keep as is */}
      <div className="hidden md:flex justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} 
            className="w-[400px] transition-all duration-300 hover:translate-y-[-10px]"
            style={{
              marginLeft: index > 0 ? '-100px' : '0',
              zIndex: teamMembers.length - index,
            }}
          >
            <TeamCard member={member} />
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
};

export default AboutUs;