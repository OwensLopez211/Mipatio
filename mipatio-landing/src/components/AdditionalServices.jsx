import { motion } from 'framer-motion'

const AdditionalServices = () => {
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

  const services = [
    {
      title: "Servicio de corte y reparto de Torta",
      description: "Incluye: (Platos, servicios, envase para llevar)",
      image: "/torta-service.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Disco Peque",
      features: [
        "Pantalla gigante",
        "Música",
        "Luces laser",
        "Pulseras fluorescentes",
        "Máquina de humo"
      ],
      image: "/disco-peque.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Cumpleaños personalizado",
      features: [
        "Elige tu música y video",
        "Proyecta tu presentación en pantalla gigante",
        "Cotillón con tu nombre, personaje, platos, vasos, y bolsas sorpresa",
        "Piñata y bolsas temáticas",
        "Personaliza el orden de las actividades del cumpleaños"
      ],
      image: "/cumpleanos-personalizado.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Pinta Caritas",
      description: "Pintacaritas niños y niñas",
      image: "/pinta-caritas.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Karaoke Papás y Niños",
      description: "20 minutos dentro del cumpleaños (incluye premios)",
      image: "/karaoke.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]

  // SVG Wave separator
  const WaveSeparator = () => (
    <div className="w-full overflow-hidden">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-12"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          className="fill-blue-900"
        />
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          className="fill-blue-900"
        />
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="fill-blue-900"
        />
      </svg>
    </div>
  )

  return (
    <div className="bg-white">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="mb-4 rounded-lg overflow-hidden shadow-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.target.src = service.fallbackImage
                    }}
                  />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {service.title}
                </h3>
                
                {service.description && (
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                )}
                
                {service.features && (
                  <ul className="text-sm text-gray-600 space-y-1 text-left">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      <WaveSeparator />
    </div>
  )
}

export default AdditionalServices