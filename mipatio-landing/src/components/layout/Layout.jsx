import { Outlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'
import ContactHeader from '../ContactHeader'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ContactHeader />
      <Navigation />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default Layout