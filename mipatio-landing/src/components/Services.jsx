import { motion } from 'framer-motion'
import { Check, MessageCircle } from 'lucide-react'

const Services = () => {
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
    "Empanadas coctel: mini dulces, pollo (20 unidades)",
    "Pizzas: queso jamón, salame (20 unidades)", 
    "Mini sandwiches (jamón/queso/palta más opciones) (20 unidades)",
    "Hot dog con agregados: tomate, pasta, americana, chucrut, mayo",
    "Gran los cocktail: cariñita, fina pachitas, 500 grms",
    "Bebidas a 2 lts"
  ]

  return (
    <div>
      {/* Header con separador ondulado */}
      <div className="bg-blue-900 text-white py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Servicios</h1>
        </div>
      </div>

      {/* Servicio Base Section */}
      <section id="servicios" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Servicio Base
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg h-full"
            >
              <img
                src="/servicio1.png"
                alt="Servicio Base - Celebración infantil"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                }}
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {baseServiceFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-3 text-sm"
                >
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="text-green-600" size={12} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios adicionales Section */}
      <section id="servicios-adicionales" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Servicios adicionales
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-3 text-sm"
                >
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Check className="text-blue-600" size={12} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{service}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg h-full"
            >
              <img
                src="/serviciosadiconales.png"
                alt="Servicios adicionales - Comida para fiestas"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          href="https://wa.me/56982884632"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-3 shadow-lg flex items-center space-x-2 text-sm font-medium transition-colors duration-200"
        >
          <MessageCircle size={20} />
          <span>¿Cómo puedo ayudarte?</span>
        </motion.a>
      </div>
    </div>
  )
}

export default Services