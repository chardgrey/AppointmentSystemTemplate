import { Clock, Zap, Smartphone, RotateCcw, Bell, Users } from 'lucide-react'
import useInView from '../../hooks/useInView'
import { useEffect } from 'react'
import React from 'react'

const Features = () => {
  const [sectionRef, isInView] = useInView()
  
  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && currentSectionRef) {
          const items = currentSectionRef.querySelectorAll('.feature-item');
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('opacity-100', 'translate-y-0');
            }, index * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (currentSectionRef) observer.observe(currentSectionRef);
    
    // Use the stored reference in cleanup
    return () => {
      if (currentSectionRef) observer.unobserve(currentSectionRef);
    };
  }, []);
  
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Easy Scheduling',
      description: 'Simple and intuitive booking process that takes less than 2 minutes to complete.',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Instant Confirmation',
      description: 'Receive immediate booking confirmation with all appointment details via email.',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Friendly',
      description: 'Book appointments on any device - desktop, tablet, or smartphone.',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: 'Flexible Rescheduling',
      description: 'Easily reschedule or cancel appointments with our flexible policies.',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Smart Reminders',
      description: 'Automatic email and SMS reminders to help you never miss an appointment.',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help with any questions or issues.',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Appointment System?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've designed our platform with both clients and service providers in mind, 
            creating a seamless experience for everyone involved.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <article 
              key={index} 
              className="feature-item relative bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(16px)'
              }}
            >
              {/* Background decorative icon - Responsive version */}
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 md:-bottom-4 md:-right-4 opacity-5 transform rotate-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center">
                  <div className={feature.iconColor}>
                    {React.cloneElement(feature.icon, { 
                      className: "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-24 lg:h-24" 
                    })}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <div className={feature.iconColor} aria-hidden="true">
                    {React.cloneElement(feature.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed relative z-10">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
