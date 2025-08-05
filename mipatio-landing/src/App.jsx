import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Infrastructure from './pages/Infrastructure'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="infraestructura" element={<Infrastructure />} />
          <Route path="servicios" element={<Services />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
