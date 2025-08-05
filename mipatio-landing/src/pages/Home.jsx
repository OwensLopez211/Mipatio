import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Infrastructure from '../components/Infrastructure'
import Services from '../components/Services'
import AdditionalServices from '../components/AdditionalServices'
import ContactSection from '../components/ContactSection'

const Home = () => {


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Infrastructure />
      <Services />
      <AdditionalServices />
      <ContactSection />
    </motion.div>
  )
}

export default Home