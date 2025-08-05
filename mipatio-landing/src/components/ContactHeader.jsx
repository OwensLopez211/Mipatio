import { Phone, MapPin, Mail, Instagram } from 'lucide-react'

const ContactHeader = ({ className = '' }) => {
  return (
    <div className={`bg-[#246C96] text-white py-4 px-4 fixed w-full top-0 z-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Vista Desktop */}
        <div className="hidden md:flex items-center justify-between">
          {/* Contactos - Lado izquierdo */}
          <div className="flex items-center gap-4">
            {/* Teléfono */}
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white" />
              <div className="text-sm">
                <a 
                  href="tel:+56987005952" 
                  className="hover:text-blue-200 transition-colors"
                >
                  +569 8700592
                </a>
              </div>
            </div>
            
            {/* Dirección */}
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-white" />
              <div className="text-sm">
                <a 
                  href="https://maps.google.com/?q=Carlos+Condell+117,+La+Cisterna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors"
                >
                  Carlos Condell 117, La Cisterna
                </a>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-white" />
              <div className="text-sm">
                <a 
                  href="mailto:contacto@mipatio.cl"
                  className="hover:text-blue-200 transition-colors"
                >
                  contacto@mipatio.cl
                </a>
              </div>
            </div>
          </div>
          
          {/* Instagram - Lado derecho */}
          <div className="flex items-center gap-2">
            <Instagram size={16} className="text-white" />
            <a 
              href="https://instagram.com/mipatiooficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-200 transition-colors"
            >
              @mipatiooficial
            </a>
          </div>
        </div>

        {/* Vista Mobile */}
        <div className="flex md:hidden items-center justify-between text-xs">
          {/* Solo teléfono en mobile */}
          <div className="flex items-center gap-1">
            <Phone size={14} className="text-white" />
            <a 
              href="tel:+56987005952" 
              className="hover:text-blue-200 transition-colors"
            >
              +569 8700592
            </a>
          </div>
          
          {/* Instagram en mobile */}
          <div className="flex items-center gap-1">
            <Instagram size={14} className="text-white" />
            <a 
              href="https://instagram.com/mipatiooficial"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              @mipatiooficial
            </a>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default ContactHeader