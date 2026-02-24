// components/TestimonialCarousel.js
'use client';
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769043709/6_hqbe57.jpg',
      quote: 'Gracias a que nos visitó el Habitat Móvil, pudimos hacer nuestro trámite de manera rápida y sin tener que viajar a Santiago.',
      author: 'María del Carmen Trecañanco',
      role: 'Clienta AFP Habitat',
      location: 'Colina, Chile'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769043710/5_wt09ie.jpg',
      quote: 'Antes debía viajar horas para hacerme exámenes. Ahora la Clínica Móvil llega a mi barrio y nos permite cuidarnos sin gastar en pasajes.',
      author: 'María Sepúlveda',
      role: 'Paciente Vacunatorio Móvil',
      location: 'Servicio de Salud Metropolitano Sur Oriente'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769043714/2_l3pxq7.jpg',
      quote: 'Agradecemos el compromiso entregado en el proceso de permisos de circulación 2025. El servicio de On Street destacó por su excelencia, profesionalismo y gran disposición con el municipio.',
      author: 'Marcos Suazo',
      role: 'Encargado Permisos de Circulación',
      location: 'Municipalidad de Quilpué, Chile'
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769043710/3_ltu2oj.jpg',
      quote: 'Excelente servicio, pronta respuesta y nos hace sentido en los proyectos que realizamos en conjunto.',
      author: 'Francisco Villalonga',
      role: 'Jefe Centro de Entrenamiento de Riesgos Críticos',
      location: 'Mutual de Seguridad CChC'
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769043710/1_gvirb5.jpg',
      quote: 'Como ejecutivo de atención de On Street, me preocupo de que cada cliente tenga una atención cómoda y segura, manteniendo siempre el móvil en excelente estado para que la experiencia sea realmente buena.',
      author: 'Álvaro Moraga',
      role: 'Conductor Ejecutivo CGE',
      location: 'CGE Móvil Ñuble'
    },
    {
      id: 6,
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769043709/4_t6h6q2.jpg',
      quote: 'No sabía de este exámen y una amiga me comentó que había una Clínica Móvil que atendería afuera de mi Iglesia. Fue súper rápido y fueron muy amables.',
      author: 'Mirta Fuenzalida',
      role: 'Paciente Clínica Móvil On Street',
      location: 'Quilpué, Chile'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Auto-play timer duration in milliseconds (5 seconds)
  const AUTO_PLAY_DURATION = 5000;

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setProgress(0); // Reset progress bar
  }, [testimonials.length]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setProgress(0); // Reset progress bar
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0); // Reset progress bar
  };

  // Timer effect
  useEffect(() => {
    let intervalId;
    let progressInterval;

    if (isAutoPlaying) {
      // Progress bar update (every 100ms for smooth animation)
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + (100 / (AUTO_PLAY_DURATION / 100));
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 100);

      // Slide change timer
      intervalId = setInterval(() => {
        goToNext();
      }, AUTO_PLAY_DURATION);
    }

    return () => {
      clearInterval(intervalId);
      clearInterval(progressInterval);
    };
  }, [isAutoPlaying, goToNext]);

  // Pause autoplay when user interacts
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Optional: Resume after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Reset progress when index changes
  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
        Experiencia
      </h2>
      
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Auto-play indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 z-10">
          <div 
            className="h-full bg-[#f99963] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 relative h-64 md:h-96">
            <Image
              src={currentTestimonial.image}
              alt={`Testimonio de ${currentTestimonial.author}`}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            {/* Quote */}
            <blockquote className="text-lg md:text-xl italic text-gray-700 mb-6 leading-relaxed">
              "{currentTestimonial.quote}"
            </blockquote>
            
            {/* Author Info */}
            <div className="mt-6">
              <div className="font-semibold text-gray-800">
                {currentTestimonial.author}
              </div>
              <div className="text-gray-600 text-sm">
                {currentTestimonial.role}
              </div>
              <div className="text-gray-500 text-xs mt-1">
                {currentTestimonial.location}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between p-4 bg-gray-50">
          {/* Previous Button */}
          <button
            onClick={() => {
              handleUserInteraction();
              goToPrev();
            }}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Testimonio anterior"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Dots */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  handleUserInteraction();
                  goToSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button
            onClick={() => {
              handleUserInteraction();
              goToNext();
            }}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Siguiente testimonio"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Auto-play controls (optional) */}
        <div className="absolute bottom-20 right-4 md:bottom-4 md:right-4 flex gap-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label={isAutoPlaying ? "Pausar auto-play" : "Reanudar auto-play"}
          >
            {isAutoPlaying ? (
              <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;