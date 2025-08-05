import ContactInfo from './ContactInfo'

const ContactInfoDemo = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Variante por Defecto</h2>
        <ContactInfo />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Variante Compacta</h2>
        <ContactInfo variant="compact" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Variante en Tarjetas</h2>
        <ContactInfo variant="cards" />
      </div>

      <div className="bg-blue-900 p-8 rounded-xl">
        <h2 className="text-2xl font-bold text-white mb-6">En Fondo Oscuro</h2>
        <ContactInfo className="text-white" />
      </div>
    </div>
  )
}

export default ContactInfoDemo