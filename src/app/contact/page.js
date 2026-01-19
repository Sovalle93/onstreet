// app/contact/page.js
import ContactForm from '../components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contáctanos
          </h1>
          <p className="text-xl md:text-2xl text-gray-600">
            Diseñamos junto a tí, el servicio que necesitas.
          </p>
        </div>

        {/* Form */}
        <ContactForm />

        {/* WhatsApp Info */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">También puedes contactarnos directamente:</p>
          <a 
            href="https://wa.me/56998787894" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <span className="mr-2">📱</span>
            WhatsApp: +56 9 9878 7894
          </a>
        </div>
      </div>
    </div>
  );
}