import { useState, useEffect } from 'react'
import { Menu, X, Calendar } from 'lucide-react'
import ShinyText from '../ui/Shiny'

const Header = ({ onBookNow }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <header className={`fixed w-full top-0 z-50 p-2 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center gap-3">
              <Calendar className="h-6 w-6 text-amber-400" aria-hidden="true" />
              <div className="flex items-baseline">
                <span className="text-lg font-light tracking-tight text-gray-200">Appointment</span>
                <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent ml-0.5">Pro</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button 
              className="text-gray-300 cursor-pointer hover:text-white px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 rounded-md border border-transparent"
              aria-label="Sign In"
            >
              Sign In
            </button>
            <div className="w-4"></div> {/* Simple spacer div */}
            <button 
              onClick={onBookNow}
              className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-800 px-5 py-2 text-sm font-medium transition-all rounded-md hover:bg-gradient-to-r hover:from-amber-600 hover:to-yellow-550 border-amber-400/30 shadow-sm flex items-center"
              aria-label="Book Appointment"
            >
              <Calendar className="mr-2 h-4 w-4 text-slate-800" aria-hidden="true" />
              Book Appointment
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-white/10"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 bg-black/95 backdrop-blur-lg shadow-xl" id="mobile-menu" aria-label="Mobile Navigation">
            <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium rounded-md hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <button className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left rounded-md hover:bg-white/10">
                  Sign In
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    onBookNow();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-slate-800 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 border border-amber-400/20 w-full text-left mt-2 flex items-center"
                >
                  <Calendar className="mr-2 h-5 w-5 text-amber-400" aria-hidden="true" />
                  Book Appointment
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
