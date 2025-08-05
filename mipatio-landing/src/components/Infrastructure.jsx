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
    <section id="infraestructura" className="py-16 bg-white">
      <div className="w-full px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Nuestra infraestructura
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Contamos con instalaciones diseñadas especialmente para la diversión y comodidad de todos
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {infrastructureItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-blue-50 group-hover:bg-blue-100 rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <item.icon className="text-blue-600 group-hover:text-blue-700 transition-colors duration-300" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
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