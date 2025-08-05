import { Link } from 'react-router-dom'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Galería', href: '/galeria' },
    { name: 'Infraestructura', href: '/infraestructura' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Contáctanos', href: '/contacto' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="/mipatiologo.png" 
              alt="MiPatio Logo" 
              className="h-16 mb-4"
            />
            <p className="text-gray-300 mb-4 text-xl font-semibold">
              Nos encargamos de todo!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-xl font-bold mb-4">Menú</h3>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contactos</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-400" />
                <div>
                  <p>WhatsApp / Llamadas:</p>
                  <p className="font-semibold">+56 9 8284 4632 / +569 8700 5952</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-400" />
                <div>
                  <p>Correo electrónico:</p>
                  <p className="font-semibold">contacto@mipatio.cl</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-yellow-400" />
                <div>
                  <p>Dirección:</p>
                  <p className="font-semibold">Carlos Condell 117, La Cisterna</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Todos los derechos reservados MiPatio.cl
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer