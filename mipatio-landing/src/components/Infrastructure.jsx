import { motion } from 'framer-motion'
import { Music, Users, Baby, Home as HomeIcon, Car } from 'lucide-react'

const Infrastructure = () => {
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

  const infrastructureItems = [
    {
      icon: Music,
      title: "Música Infantil",
      description: "Ambientación infantil, música y animación."
    },
    {
      icon: Users,
      title: "Juegos Inflables", 
      description: "Ofrecemos una amplia variedad de juegos inflables para niños, garantizando diversión y emoción."
    },
    {
      icon: Baby,
      title: "Baños Especiales",
      description: "Baños amplios acondicionados para discapacitados y menores."
    },
    {
      icon: HomeIcon,
      title: "Distintos ambientes",
      description: "Área para padres, zona de juegos infantiles y salón de eventos."
    },
    {
      icon: Car,
      title: "Estacionamiento interior",
      description: "Contamos con estacionamiento seguro y cómodo en nuestras instalaciones interiores."
    }
  ]

  return (
    <section id="infraestructura" className="py-12 sm:py-16 bg-white">
      <div className="w-full px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Nuestra infraestructura
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-2">
            Contamos con instalaciones diseñadas especialmente para la diversión y comodidad de todos
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {infrastructureItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-blue-50 group-hover:bg-blue-100 rounded-xl w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-colors duration-300">
                <item.icon className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" size={20} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Infrastructure