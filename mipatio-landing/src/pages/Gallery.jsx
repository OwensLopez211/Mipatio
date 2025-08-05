import { motion } from 'framer-motion'
import { Play, Heart, Star } from 'lucide-react'
import { useEffect } from 'react'

const Gallery = () => {
  // Reset scroll position when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
      src: "/img1.jpg",
      alt: "Juegos inflables - Tobogán gigante",
      category: "Juegos Inflables"
    },
    {
      id: 2,
      src: "/img2.jpg",
      alt: "Salón de fiestas decorado",
      category: "Instalaciones"
    },
    {
      id: 3,
      src: "/img3.jpg",
      alt: "Celebración con ambiente festivo",
      category: "Celebraciones"
    },
    {
      id: 4,
      src: "/img4.jpeg",
      alt: "Mesa de cumpleaños temática",
      category: "Decoraciones"
    },
    {
      id: 5,
      src: "/img5.jpg",
      alt: "Niños jugando y divirtiéndose",
      category: "Diversión"
    },
    {
      id: 6,
      src: "/img6.jpg",
      alt: "Fiesta con ambiente familiar",
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
      <section className="bg-blue-900 text-white py-12 sm:py-20 pt-48 sm:pt-52">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">Galería</h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Nuestros mejores momentos capturados. Cada celebración es única y especial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid - Diseño Mosaico */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Primera fila - Mosaico principal */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8"
          >
            {/* Imagen grande izquierda */}
            <motion.div
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-full overflow-hidden">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-yellow-400 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    {galleryImages[0].category}
                  </span>
                  <p className="text-white text-lg font-medium">{galleryImages[0].alt}</p>
                </div>
              </div>
            </motion.div>

            {/* Grid derecho - 4 imágenes pequeñas */}
            <div className="grid grid-cols-2 gap-2 sm:gap-4 h-full">
              {galleryImages.slice(1, 5).map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="h-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        const fallbacks = [
                          "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                          "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                          "https://images.unsplash.com/photo-1555525538-a2f2de0f3e64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                        ]
                        e.target.src = fallbacks[index] || fallbacks[0]
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                        {image.category}
                      </span>
                      <p className="text-white text-sm">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Separador con texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-8 sm:py-12"
          >
            <div className="bg-gray-800 text-white py-3 sm:py-4 px-4 sm:px-8 rounded-lg inline-block mx-4">
              <p className="text-sm sm:text-lg font-medium">Porque la presentación es importante para el recuerdo</p>
            </div>
          </motion.div>

          {/* Segunda fila - Imágenes restantes */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
          >
            {galleryImages.slice(4, 6).map((image, index) => (
              <motion.div
                key={image.id}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-full overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const fallbacks = [
                        "https://images.unsplash.com/photo-1529103043897-ce4531c6c2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
                        "https://images.unsplash.com/photo-1607043913087-a8c03d9b5edf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                      ]
                      e.target.src = fallbacks[index] || fallbacks[0]
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-yellow-400 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full mb-3">
                      {image.category}
                    </span>
                    <p className="text-white text-base">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Gallery