import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Users, MessageCircle } from 'lucide-react'

const ContactSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <div>
      {/* Header azul */}
      <div className="bg-blue-900 text-white py-6 sm:py-8">
        <div className="text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Contáctanos</h2>
        </div>
      </div>
      
      {/* Contenido con fondo blanco */}
      <section id="contacto" className="bg-white text-gray-900 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            {/* Información de la empresa */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              <motion.div variants={fadeInUp} className="text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-900">Sobre Nosotros</h3>
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed">
                  <p>
                    <span className="font-bold text-blue-600">MI PATIO</span> es una empresa familiar con más de 14 años de experiencia en la 
                    realización de celebraciones de cumpleaños infantiles, eventos para colegios y 
                    jardines infantiles.
                  </p>
                  
                  <p>
                    Nuestro objetivo es que los niños disfruten de una celebración especial{' '}
                    <span className="font-semibold text-blue-600">diseñada para ellos</span>, mientras que los padres no tengan que preocuparse de ningún detalle.{' '}
                    <span className="font-semibold text-blue-600">Nos encargamos de todo lo necesario para tu celebración.</span>
                  </p>
                  
                  <p>
                    <span className="font-bold text-blue-900">NUESTROS EVENTOS SON PERSONALIZADOS</span>: celebramos solo un cumpleaños a la 
                    vez, lo que nos permite ofrecer un servicio exclusivo, adaptado a{' '}
                    <span className="font-semibold text-blue-600">tus requerimientos</span>.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Información de contacto */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Dirección */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-900 flex items-center justify-center lg:justify-start">
                  <MapPin className="mr-2 sm:mr-3" size={24} />
                  Dirección
                </h3>
                <div className="bg-gray-100 rounded-lg p-4 sm:p-6 text-center lg:text-left">
                  <a 
                    href="https://maps.google.com/?q=Carlos+Condell+117,+La+Cisterna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-xl hover:text-blue-600 transition-colors duration-200 flex items-center justify-center lg:justify-start text-gray-800"
                  >
                    <MapPin className="mr-2 flex-shrink-0" size={20} />
                    Carlos Condell 117, La Cisterna
                  </a>
                </div>
              </motion.div>

              {/* Contactos */}
              <motion.div variants={fadeInUp}>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-blue-900 flex items-center justify-center lg:justify-start">
                  <Phone className="mr-2 sm:mr-3" size={24} />
                  Contactos
                </h3>
                <div className="bg-gray-100 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-center lg:justify-start">
                    <Phone className="mr-3 text-blue-600" size={20} />
                    <div className="text-sm sm:text-lg">
                      <span className="text-gray-700">Llamadas:</span>
                      <div className="font-semibold">
                        <a href="tel:+56987005952" className="hover:text-blue-600 transition-colors text-gray-800 text-sm sm:text-base">
                          +56 9 8700 5952
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start">
                    <Mail className="mr-3 text-blue-600" size={20} />
                    <div className="text-lg">
                      <span className="text-gray-700">Correo electrónico:</span>
                      <div className="font-semibold">
                        <a href="mailto:contacto@mipatio.cl" className="hover:text-blue-600 transition-colors text-gray-800">
                          Contacto@mipatio.cl
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start">
                    <Instagram className="mr-3 text-blue-600" size={20} />
                    <div className="text-lg">
                      <span className="text-gray-700">Instagram:</span>
                      <div className="font-semibold">
                        <a 
                          href="https://instagram.com/mipatiooficial" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors text-gray-800"
                        >
                          @mipatiooficial
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start">
                    <MessageCircle className="mr-3 text-blue-600" size={20} />
                    <div className="text-lg">
                      <span className="text-gray-700">WhatsApp:</span>
                      <div className="font-semibold">
                        <a 
                          href="https://wa.me/56982884632" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors text-gray-800"
                        >
                          +56 9 8288 4632
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactSection