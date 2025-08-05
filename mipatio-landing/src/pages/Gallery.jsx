import { motion } from 'framer-motion'
import { Play, Heart, Star } from 'lucide-react'

const Gallery = () => {
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

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Niños celebrando cumpleaños con globos coloridos",
      category: "Celebraciones"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      alt: "Juegos inflables para niños",
      category: "Juegos Inflables"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Mesa de cumpleaños con decoraciones temáticas",
      category: "Decoraciones"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Niños jugando y divirtiéndose",
      category: "Diversión"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1555525538-a2f2de0f3e64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Torta de cumpleaños personalizada",
      category: "Tortas"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1529103043897-ce4531c6c2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Ambiente festivo con luces y decoraciones",
      category: "Ambiente"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1607043913087-a8c03d9b5edf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Actividades y juegos organizados",
      category: "Actividades"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      alt: "Sonrisas y felicidad en cada celebración",
      category: "Momentos Especiales"
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
      <section className="bg-blue-900 text-white py-20 pt-60">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Galería</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Nuestros mejores momentos capturados. Cada celebración es única y especial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Nuestros números hablan</h2>
            <p className="text-xl text-blue-100">Años de experiencia creando momentos inolvidables</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-900" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
              <p className="text-blue-100">Celebraciones exitosas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-900" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">14+</h3>
              <p className="text-blue-100">Años de experiencia</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Play className="text-blue-900" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
              <p className="text-blue-100">Satisfacción garantizada</p>
            </motion.div>
          </div>
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
              ¿Quieres que tu celebración aparezca aquí?
            </h2>
            <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
              Cada evento es único y especial. Permítenos crear momentos mágicos para tu familia.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200"
            >
              Reservar mi celebración
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Gallery