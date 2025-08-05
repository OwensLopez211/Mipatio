import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (href) => {
    if (href.startsWith('/#')) {
      const elementId = href.slice(2)
      
      // Si no estamos en la página principal, navegar primero
      if (location.pathname !== '/') {
        navigate('/')
        // Esperar más tiempo para que la página se cargue completamente
        setTimeout(() => {
          const element = document.getElementById(elementId)
          if (element) {
            const navHeight = 152
            const elementPosition = element.offsetTop - navHeight
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
            // Trigger scroll event para activar animaciones
            window.dispatchEvent(new Event('scroll'))
          }
        }, 500) // Aumentado a 500ms
      } else {
        // Ya estamos en la página principal, hacer scroll directamente
        const element = document.getElementById(elementId)
        if (element) {
          const navHeight = 152
          const elementPosition = element.offsetTop - navHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
          // Trigger scroll event para activar animaciones
          setTimeout(() => {
            window.dispatchEvent(new Event('scroll'))
          }, 100)
        }
      }
    }
  }

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Infraestructura', href: '/#infraestructura' },
    { 
      name: 'Servicios', 
      href: '/#servicios',
      dropdown: [
        { name: 'Servicio Base', href: '/#servicios' },
        { name: 'Servicios Adicionales', href: '/#servicios-adicionales' }
      ]
    },
    { name: 'Contáctanos', href: '/#contacto' }
  ]

  return (
    <nav className="bg-[#246C96] shadow-lg fixed w-full top-11 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-27">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <img 
                  src="/mipatiologo.png" 
                  alt="MiPatio.cl" 
                  className="h-36 w-auto"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }}
                />
                <span className="text-yellow-400 text-2xl font-bold hidden">MiPatio.cl</span>
              </motion.div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center"
                  >
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg py-2 w-48 z-50">
                      {item.dropdown.map((dropdownItem) => (
                        <button
                          key={dropdownItem.name}
                          onClick={() => {
                            handleNavClick(dropdownItem.href)
                            setServicesOpen(false)
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.href.startsWith('/#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => {
                    // Reset scroll position immediately for new page navigation
                    window.scrollTo(0, 0)
                  }}
                  className={`text-white hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href ? 'text-red-500' : ''
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
              className="text-white hover:text-red-500 focus:outline-none focus:text-red-500"
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
                className="text-white hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 w-full text-left"
              >
                {item.name}
              </button>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.href ? 'text-red-500' : ''
                }`}
                onClick={() => {
                  setIsOpen(false)
                  // Reset scroll position immediately for new page navigation
                  window.scrollTo(0, 0)
                }}
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