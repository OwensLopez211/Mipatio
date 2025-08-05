import { Phone, MapPin, Mail, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

const ContactInfo = ({ variant = 'default', className = '' }) => {
  const contactData = [
    {
      icon: Phone,
      label: 'WhatsApp / Llamadas',
      value: '+569 82884632 / +569 8700592',
      link: 'https://wa.me/56982884632',
      color: 'text-green-600'
    },
    {
      icon: MapPin,
      label: 'Dirección',
      value: 'Carlos Condell 117, La Cisterna',
      link: 'https://maps.google.com/?q=Carlos+Condell+117,+La+Cisterna',
      color: 'text-blue-600'
    },
    {
      icon: Mail,
      label: 'Correo electrónico',
      value: 'contacto@mipatio.cl',
      link: 'mailto:contacto@mipatio.cl',
      color: 'text-red-600'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@mipatio.cl',
      link: 'https://instagram.com/mipatio.cl',
      color: 'text-purple-600'
    }
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  if (variant === 'compact') {
    return (
      <motion.div 
        className={`flex flex-wrap gap-4 ${className}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {contactData.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            className="flex items-center gap-2 text-sm hover:opacity-80 transition-opacity"
          >
            <item.icon size={16} className={item.color} />
            <span>{item.value}</span>
          </motion.a>
        ))}
      </motion.div>
    )
  }

  if (variant === 'cards') {
    return (
      <motion.div 
        className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${className}`}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {contactData.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeInUp}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors`}>
                <item.icon size={20} className={item.color} />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.value}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    )
  }

  // Variant por defecto: 'default'
  return (
    <motion.div 
      className={`space-y-6 ${className}`}
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {contactData.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeInUp}
          className="flex items-center gap-4"
        >
          <div className={`p-3 rounded-full bg-blue-100`}>
            <item.icon size={24} className={item.color} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.value}
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ContactInfo