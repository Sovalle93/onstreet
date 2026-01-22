// components/aboutus/WorkerQuotesCarousel.js
'use client';
import { useState, useEffect } from 'react';

const WorkerQuotesCarousel = () => {
  const quotes = [
    {
      id: 1,
      quote: 'En On Street creemos que escuchar es la base de la confianza. Al dedicar tiempo a nuestro equipo fortalecemos la cultura, mejoramos los procesos y construimos una organización más alineada y humana.',
      author: 'Maricel Araya',
      role: 'Analista de Desarrollo Organizacional'
    },
    {
      id: 2,
      quote: 'En On Street entregamos móviles con infraestructura de alto nivel e innovación. Cumplimos los estándares más exigentes para ofrecer un servicio confiable, novedoso y alineado a cada cliente.',
      author: 'Juan José Valdés',
      role: 'Subgerente de Desarrollo de Productos'
    },
    {
      id: 3,
      quote: 'En On Street, la ética no es solo un principio, es el estándar mínimo con el que tomamos cada decisión. Nos guía para actuar con transparencia, responsabilidad y respeto, asegurando que nuestro trabajo genere confianza.',
      author: 'Enrique Landeros',
      role: 'Gerente de Administración, Finanzas y Personas'
    },
    {
      id: 4,
      quote: 'Nuestro equipo capacitado y comprometido, para entregar un servicio seguro y de calidad.',
      author: 'Álvaro Arancibia',
      role: 'Gerente de Operaciones y Servicios'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isPaused, quotes.length]);

  const currentQuote = quotes[currentIndex];

  return (
    <div 
      className="w-full max-w-3xl mx-auto relative overflow-hidden min-h-[250px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div className="relative h-full">
        {quotes.map((quote, index) => (
          <div
            key={quote.id}
            className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
              index === currentIndex 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
            }`}
          >
            {/* Quote Content */}
            <div className="text-center px-4">
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl italic text-gray-700 mb-6 leading-relaxed">
                "{quote.quote}"
              </blockquote>
              
              {/* Author Info - FIXED: author and role correctly placed */}
              <div>
                <div className="font-bold text-gray-800 text-lg mb-1">
                  {quote.author}
                </div>
                <div className="text-gray-600 text-md">
                  {quote.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkerQuotesCarousel;