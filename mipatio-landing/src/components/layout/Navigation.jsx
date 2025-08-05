import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      const elementId = href.slice(2)
      const element = document.getElementById(elementId)
      if (element) {
        const navHeight = 140 // Height of fixed navigation (80px + 60px from top-11)
        const elementPosition = element.offsetTop - navHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Infraestructura', href: '/#infraestructura' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Contáctanos', href: '/#contacto' }
  ]

  return (
    <nav className="bg-[#246C96] shadow-lg fixed w-full top-11 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img 
                  src="/mipatiologo.png" 
                  alt="MiPatio.cl" 
                  className="h-24 w-auto"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                />
                <span className="text-yellow-400 text-2xl font-bold hidden">MiPatio.cl</span>
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-yellow-400' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 focus:outline-none focus:text-yellow-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden bg-[#1F5D85] overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            item.href.startsWith('/#') ? (
              <button
                key={item.name}
                onClick={() => {
                  handleNavClick(item.href)
                  setIsOpen(false)
                }}
                className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href ? 'text-yellow-400' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </motion.div>
    </nav>
  )
}

export default Navigation