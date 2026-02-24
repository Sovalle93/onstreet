// app/contact/page.js
import Link from 'next/link';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contáctanos</h1>
        <p className="text-xl text-gray-600 mb-12">
          Usa el botón flotante en la esquina inferior derecha para contactarnos rápidamente
        </p>
        
        <div className="bg-[#fb5103]/10 p-8 rounded-2xl">
          <MessageCircle className="w-16 h-16 text-[#fb5103] mx-auto mb-4" />
          <p className="text-gray-700 mb-4">
            Nuestro equipo está listo para ayudarte
          </p>
          <div className="flex justify-center gap-4">
            <a href="tel:+56998787894" className="text-[#fb5103] hover:underline">Llamar</a>
            <span className="text-gray-300">|</span>
            <a href="mailto:ventas@onstreet.com" className="text-[#fb5103] hover:underline">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
}