import { motion } from 'framer-motion'
import { Music, Users, Baby, Home as HomeIcon, Car, Shield, Utensils, Gamepad2 } from 'lucide-react'

const Infrastructure = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const infrastructureFeatures = [
    {
      icon: Music,
      title: "Música Infantil",
      description: "Ambientación infantil, música y animación profesional para mantener a los niños entretenidos durante toda la celebración.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: Users,
      title: "Juegos Inflables",
      description: "Ofrecemos una amplia variedad de juegos inflables para niños, garantizando diversión y emoción en un ambiente seguro.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      icon: Baby,
      title: "Baños Especiales",
      description: "Baños amplios acondicionados para discapacitados y menores, garantizando comodidad y accesibilidad para todos.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: HomeIcon,
      title: "Distintos Ambientes",
      description: "Área para padres, zona de juegos infantiles y salón de eventos. Espacios diseñados para cada momento de la celebración.",
      image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: Car,
      title: "Estacionamiento Interior",
      description: "Contamos con estacionamiento seguro y cómodo en nuestras instalaciones interiores para mayor tranquilidad.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    }
  ]

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Seguridad Total",
      description: "Instalaciones completamente seguras con supervisión constante"
    },
    {
      icon: Utensils,
      title: "Área de Comida",
      description: "Espacios dedicados para el servicio de alimentos y bebidas"
    },
    {
      icon: Gamepad2,
      title: "Zone de Entretenimiento",
      description: "Área especial con juegos y actividades organizadas"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Infraestructura</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Conoce nuestras instalaciones diseñadas especialmente para crear momentos únicos y seguros.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Nuestras Instalaciones
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada área está pensada para brindar la mejor experiencia tanto a niños como a padres
            </p>
          </motion.div>

          <div className="space-y-20">
            {infrastructureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <feature.icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-6">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Características Adicionales</h2>
            <p className="text-xl text-gray-600">Detalles que hacen la diferencia en tu celebración</p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-yellow-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Un Espacio Diseñado Para Ti
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Más de 14 años perfeccionando nuestras instalaciones para ofrecerte 
              el mejor ambiente para tu celebración familiar.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Capacidad</h3>
                <p className="text-blue-100">Espacio amplio para grupos grandes y pequeños</p>
              </div>
              
              <div className="bg-blue-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Ubicación</h3>
                <p className="text-blue-100">Carlos Condell 117, La Cisterna - Fácil acceso</p>
              </div>
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
              ¿Quieres conocer nuestras instalaciones?
            </h2>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Te invitamos a visitarnos y conocer personalmente todos los espacios 
              que tenemos preparados para tu celebración.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200"
            >
              Agendar visita
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Infrastructure