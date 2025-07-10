import { ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const TeamCard = ({ member }) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleDetails = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };

  return (
    <div 
      className="w-full relative h-[450px] overflow-hidden group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
      onClick={toggleDetails}
    >
      {/* Full image with simplified scale effect */}
      <div className="w-full h-full">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full scale-105 group-hover:scale-100 transition-transform duration-300 rounded-xl"
        />
      </div>
      
      {/* Overlay that appears on hover or tap on mobile - Optimized transitions */}
      <article className={`p-8 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-xl 
        bg-gradient-to-r from-amber-500/85 to-yellow-400/85 group-hover:from-amber-600/85 group-hover:to-yellow-500/85 
        transition-all duration-300
        ${(isMobile && isActive) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <div className={`transition-transform duration-300 space-y-4 
          ${(isMobile && isActive) ? 'translate-y-0' : 'translate-y-10 group-hover:translate-y-0'}`}>
          <h4 className="text-2xl font-semibold text-white">{member.name}</h4>
          <p className="text-lg text-white/90 font-medium">{member.role}</p>
          <p className="text-white/80">{member.bio}</p>
          
          {/* Social icons */}
          <div className="flex space-x-3 pt-2">
            <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm text-white hover:bg-white/40 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </span>
            <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm text-white hover:bg-white/40 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            </span>
          </div>
          
          <button className="px-5 py-2 mt-2 bg-white text-amber-700 flex items-center gap-2 rounded-md font-medium hover:bg-white/90 transition-colors">
            View Profile 
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 opacity-20">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white"></div>
            ))}
          </div>
        </div>
      </article>
      
      {/* Bottom info - Simplified transition */}
      <article className={`p-4 w-full flex flex-col justify-end overflow-hidden absolute bottom-0 rounded-b-xl 
        bg-gradient-to-t from-black/80 via-black/50 to-transparent 
        transition-opacity duration-300
        ${(isMobile && isActive) ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}>
        <h4 className="text-xl font-semibold text-white">{member.name}</h4>
        <p className="text-white/80">{member.role}</p>
      </article>
      
      {/* Decorative diagonal line */}
      <div className="absolute top-4 left-4 w-12 h-12 opacity-30 z-20">
        <svg viewBox="0 0 100 100" className="text-white/40" fill="none">
          <path d="M0 0 L100 100" stroke="currentColor" strokeWidth="6" strokeDasharray="10,10"/>
        </svg>
      </div>

      {/* Mobile indicator to show card is interactive */}
      {isMobile && !isActive && (
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm z-20">
          <ChevronRight className="w-4 h-4 text-white" />
        </div>
      )}
    </div>
  );
};

export default TeamCard;