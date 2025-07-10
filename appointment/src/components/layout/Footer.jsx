import { Facebook, Linkedin } from 'lucide-react'
import ShinyText from '../ui/Shiny'

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Documentation"]
    },
    {
      title: "Company",
      links: ["About", "Blog", "Careers"]
    },
    {
      title: "Support",
      links: ["Help Center", "Contact", "Status", "Privacy Policy"]
    }
  ]

  return (
    <footer id="contact" className="bg-slate-900/95 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 lg:gap-8" >
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="flex items-baseline">
                <span className="text-lg sm:text-xl font-medium tracking-tight text-gray-200">Appointment</span>
                <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent ml-0.5">Pro</span>
              </div>
            <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-6">
              The most trusted appointment scheduling platform for businesses of all sizes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h4 className="font-semibold text-white text-sm sm:text-base mb-2 sm:mb-4">{section.title}</h4>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2025 Cefiro ❤️. All rights reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6 mt-3 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
