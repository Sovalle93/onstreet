// components/aboutus/Principles.js
'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Principles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const principles = [
    {
      title: 'SEGURIDAD ANTE TODO',
      description: 'Nuestra seguridad y la de los demás ante todo. Sin excepción.'
    },
    {
      title: 'LA ÉTICA NO SE TRANSA',
      description: 'Integridad, transparencia y respeto en todo y por todos.'
    },
    {
      title: 'LA SOSTENIBILIDAD EN EL CENTRO DE NUESTRA ORGANIZACIÓN',
      description: 'Nuestra mirada presente y futura es sostenible, creando valor económico, social y medioambiental.'
    },
    {
      title: 'NUESTRA  EXCELENCIA NOS DISTINGUE.',
      description: 'Buscamos la impecabilidad y la máxima calidad en todo lo que hacemos.'
    },
    {
      title: 'NOS EMPODERAMOS DE LO QUE HACEMOS.',
      description: 'Somos responsables de lo que hacemos, lo sacamos adelante, y si necesitamos ayuda, la pedimos.'
    },
    {
      title: 'NOS APASIONA ESTAR CERCA DE LAS PERSONAS.',
      description: ' Nuestro servicio en terreno nos distingue a todos porque así mejoramos la calidad de vida de la gente.'
    },
    {
      title: 'NUESTROS CLIENTES, NUESTRA PASIÓN.',
      description: '...y por eso  damos lo mejor de nosotros mismos siempre.'
    },
    {
      title: 'LA INNOVACIÓN COMO MOTOR DE NUESTRA EMPRESA.',
      description: 'En todos los planos y en todos los niveles de nuestro quehacer y relacionamiento.'
    },
    {
      title: 'NUESTRA FLEXIBILIDAD NOS DEFINE.',
      description: 'Tenemos una capacidad adaptativa que sorprende.'
    },
    {
      title: 'ESCUCHANDO CONSTRUIMOS  CONFIANZA..',
      description: ' Escuchando y confiando en el otro  alcanzamos nuestros objetivos y superamos todos los desafíos.'
    },
  ];

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % principles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [principles.length]);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % principles.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + principles.length) % principles.length);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#dd7347' }}>
          Nuestros principios
        </h2>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {principles.map((principle, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="border border-gray-200 rounded-xl bg-white p-8 md:p-12">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
                      {principle.title}
                    </h3>
                    <div className="w-16 h-1 bg-[#dd7347] mx-auto mb-6"></div>
                    <p className="text-gray-600 text-center text-lg leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {principles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-6 bg-[#dd7347]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Principles;