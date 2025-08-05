import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp / Llamadas",
      content: "+56 9 8284 4632 / +569 8700 5952",
      link: "https://wa.me/56982844632"
    },
    {
      icon: Mail,
      title: "Correo electrónico",
      content: "contacto@mipatio.cl",
      link: "mailto:contacto@mipatio.cl"
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Carlos Condell 117, La Cisterna",
      link: "https://maps.google.com/?q=Carlos+Condell+117,+La+Cisterna"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contacto</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              ¡Contáctanos para tu próxima celebración! Estamos aquí para hacer realidad tu fiesta perfecta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿En qué podemos ayudarte?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu celebración, fecha estimada, número de invitados, etc."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                >
                  <Send className="mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Enviar mensaje
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Contáctanos</h2>
                <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    <strong className="text-blue-900">MI PATIO</strong> es una empresa familiar con más de 14 años de experiencia en la 
                    realización de celebraciones de cumpleaños infantiles, eventos para colegios y jardines infantiles.
                  </p>
                  <br />
                  <p className="text-gray-600 leading-relaxed">
                    Nuestro objetivo es que los niños disfruten de una celebración especial <strong className="text-blue-900">diseñada 
                    para ellos</strong>, mientras que los padres no tengan que preocuparse de ningún detalle. 
                    <strong className="text-blue-900"> Nos encargamos de todo lo necesario para tu celebración.</strong>
                  </p>
                  <br />
                  <p className="text-gray-600 leading-relaxed">
                    <strong className="text-blue-900">NUESTROS EVENTOS SON PERSONALIZADOS:</strong> celebramos solo un cumpleaños a la 
                    vez, lo que nos permite ofrecer un servicio exclusivo, <strong className="text-blue-900">adaptado a tus 
                    requerimientos.</strong>
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        <info.icon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">{info.title}</h3>
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Cómo llegar</h2>
            <p className="text-xl text-gray-600">Visítanos en nuestra ubicación en La Cisterna</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-200 rounded-xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin className="text-blue-600 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Carlos Condell 117, La Cisterna</h3>
              <p className="text-gray-600 mb-4">Santiago, Chile</p>
              <a
                href="https://maps.google.com/?q=Carlos+Condell+117,+La+Cisterna"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Ver en Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">¿Necesitas respuesta inmediata?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Escríbenos por WhatsApp y te responderemos lo antes posible
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/56982844632"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200"
            >
              <Phone className="mr-2" size={20} />
              ¿Cómo puedo ayudarte?
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact