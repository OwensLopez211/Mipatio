import { motion } from 'framer-motion'
import { Check, Star, Plus } from 'lucide-react'

const Services = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const baseServiceFeatures = [
    "Salón exclusivo para tu cumpleaños, solo un cumpleaños a la vez",
    "Mesa de: duración de la sala, se puede extender el horario como costo adicional",
    "Tarjetas virtuales de invitación",
    "Salón de juegos: con máquinas flippers de dulces, futbolín y niños",
    "Bolsa sorpresa para cada niño invitado con regalos varios",
    "Salón tematizado acorde a los cumpleaños según ideas finas",
    "Alfombra con dulces para niñas",
    "Reunión: A manera de cantar cumpleaños, soplar las velas según rango",
    "Actividades y personal que atiende y organiza a los niños y padres",
    "Casa de regalos"
  ]

  const additionalServices = [
    { name: "Empanadas coctel (mini dulces, pollo)", quantity: "20 unidades", price: null },
    { name: "Pizzas: queso jamón, salame", quantity: "20 unidades", price: null },
    { name: "Mini sandwiches (jamón/queso/palta más opciones)", quantity: "20 unidades", price: "20" },
    { name: "Hot dog con agregados: tomate, pasta, americana, chucrut, mayo", price: null },
    { name: "Torta: Especial, cariñita, fina con figuras - 500 grms", price: null }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Servicios</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Todo lo que necesitas para hacer de tu celebración un momento inolvidable
            </p>
          </motion.div>
        </div>
      </section>

      {/* Base Service Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Servicio Base
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro servicio completo incluye todo lo necesario para una celebración perfecta
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Servicio Base - Celebración infantil"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {baseServiceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-3"
                >
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <Check className="text-green-600" size={16} />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Servicios Adicionales
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementa tu celebración con nuestros servicios extra
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        {service.name}
                      </h3>
                      {service.quantity && (
                        <p className="text-gray-600 text-sm mb-2">({service.quantity})</p>
                      )}
                    </div>
                    <div className="bg-blue-100 rounded-full p-2">
                      <Plus className="text-blue-600" size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Servicios adicionales - Comida para fiestas"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Por qué elegirnos?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">14+ años de experiencia</h3>
                <p className="text-blue-100">Una empresa familiar con amplia trayectoria</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="text-blue-900" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Eventos personalizados</h3>
                <p className="text-blue-100">Celebramos solo un cumpleaños a la vez</p>
              </div>
              
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Plus className="text-blue-900" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Servicio completo</h3>
              <p className="text-blue-100">Nos encargamos de todo lo necesario</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              ¡Reserva tu fecha hoy!
            </h2>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Nos encargamos de todo lo necesario para tu celebración. 
              Personaliza el orden de las actividades del cumpleaños.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200"
            >
              Solicitar cotización
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Services