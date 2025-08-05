import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center justify-start">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/Hero.jpeg")'
        }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <motion.div 
        className="relative z-10 text-left max-w-2xl"
        style={{ marginLeft: 'calc(max(1rem, (100vw - 1280px) / 2) + 1rem)' }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          variants={fadeInUp}
        >
          Bienvenidos a<br />
          <span className="text-white">Mipatio.cl</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white mb-8 max-w-lg"
          variants={fadeInUp}
        >
          Tu mejor opción para celebraciones de cumpleaños infantiles, eventos para colegios y jardines infantiles
        </motion.p>
        
        <motion.div 
          className="flex flex-row gap-4 items-center"
          variants={fadeInUp}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('servicios')
              if (element) {
                const navHeight = 152
                const elementPosition = element.offsetTop - navHeight
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                })
              }
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md text-base transition-colors duration-200 flex items-center group"
          >
            Ver Servicios
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contacto')
              if (element) {
                const navHeight = 152
                const elementPosition = element.offsetTop - navHeight
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                })
              }
            }}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-md text-base transition-colors duration-200"
          >
            Contáctanos
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero