// components/services/FAQ.js
'use client';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: '¿La distribución interior y el equipamiento es estándar para todas las oficinas o clínicas moviles?',
      answer: 'Tenemos modelos estándar que se acomodan a las necesidades comunes de nuestros clientes pero muchas veces trabajamos en conjunto con ellos para desarrollar sus ideas y ajustarse a los requerimientos propios de cada uno. En primera instancia buscamos orientar a nuestros clientes con modelos que ya existen y en caso que lo requieran podemos ajustarlo a su necesidad.'
    },
    {
      question: '¿Cuanto tiempo lleva implementar un nuevo móvil?',
      answer: 'El plazo de implementación va desde los 10 a 45 días hábiles. Esto dependerá principalmente si el móvil está en stock o si se requiere fabricar un móvil nuevo, si el móvil requiere una transformación y del equipamiento que se elija.'
    },
    {
      question: '¿Qué tipo de conexión a internet utilizan en los móviles?',
      answer: ' Depende de lo que necesite el cliente y dónde será la operación, nosotros normalmente recomendamos utilizar routers con acceso a red 5G para entornos urbanos y red satelital Starlink para entornos rurales.'
    },
    {
      question: '¿Quién realiza el diseño de la gráfica?',
      answer: 'El diseño lo podemos realizar nosotros o también puede ser entregado por el cliente. En este último caso se le envían las medidas en detalle del móvil, la última revisión y ajustes la realizamos nosotros con el equipo de diseño e imprenta para asegurar su correcta ejecución.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
          Preguntas frecuentes
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-600 text-center mb-12">
          Información esencial sobre el servicio
        </p>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden"
            >
              {/* Question - Clickable Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-white font-bold text-lg text-left"
                style={{ backgroundColor: '#545454' }}
              >
                <span>{faq.question}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer - Animated Dropdown */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-gray-50 text-gray-700 border-t border-gray-200">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;