'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Purpose = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    { 
      title: 'Externalización  del Servicio y Operación',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769457171/Landing_Externalizaci%C3%B3n_f0sel4.png',
      thumbnail: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771893369/Externalizacion_Foto_tkujf2.jpg'
    },
    { 
      title: 'Salud',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769456440/Landing_Listas_de_Espera_i8vkum.png',
      thumbnail: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771893369/Lista_Foto_d1hsps.jpg'
    },
    { 
      title: 'Estado Cercano y Eficiente',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769457321/Landing_Cobertura_y_Regulaci%C3%B3n_yh6yq5.png',
      thumbnail: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771893369/Estado_Cercano_Foto_p9lpux.jpg'
    },
    { 
      title: 'Cobertura y Regulación',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769457319/Landing_Estado_Cercano_y_Eficiente_btj9mh.png',
      thumbnail: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771893557/Cobertura_Foto_ruadht.jpg'
    },
    { 
      title: 'Sostenibilidad y Comunidad',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769457125/Landing_Sostenibilidad_y_Comunidad_ccadze.png',
      thumbnail: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771893369/Sostenabilidad_Foto_pljskr.jpg'
    },
  ];

  const openModal = (activity, index) => {
    setSelectedActivity(activity);
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setSelectedActivity(null), 300);
  };

  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % activities.length;
    setCurrentIndex(nextIndex);
    setSelectedActivity(activities[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex = (currentIndex - 1 + activities.length) % activities.length;
    setCurrentIndex(prevIndex);
    setSelectedActivity(activities[prevIndex]);
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          goToNext();
        } else {
          goToPrev();
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isModalOpen, currentIndex]);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Main Quote */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-12 leading-relaxed">
          "Nos mueve conectar a las personas con lo que necesitan y contribuir así a mejorar su calidad de vida en el lugar que se encuentren"
        </blockquote>

        {/* What We Do Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            ¿Qué  hacemos?
          </h2>
          <h3 className="text-2xl md:text-3xl text-center text-[#fb5103] font-semibold mb-6">
            Arriendo y Servicio de Operación Integral de Oficinas y Clínicas Móviles
          </h3>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-4xl mx-auto leading-relaxed">
            En On Street habilitamos y operamos móviles en todo Chile. Nuestra solución integral se organiza en cinco focos que definen con quién trabajamos y cómo generamos impacto real en las personas.
          </p>
        </div>

        {/* 5-Image Grid with Clickable Activities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
              onClick={() => openModal(activity, index)}
              onKeyDown={(e) => e.key === 'Enter' && openModal(activity, index)}
              role="button"
              tabIndex={0}
              aria-label={`Abrir ${activity.title}`}
            >
              {/* Image Background */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image
                  src={activity.thumbnail}
                  alt={activity.title}
                  fill
                  className="object-cover transition-all duration-500 brightness-90 group-hover:brightness-100"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                
                {/* Dark overlay - reduced opacity on hover */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Content Container - Centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  {/* Title */}
                  <h3 className="text-white font-bold text-base sm:text-lg text-center drop-shadow-lg px-2 mb-2">
                    {activity.title}
                  </h3>
                  
                  {/* Ver Folleto - Now below the title with animation */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                      <span className="text-white font-bold text-sm whitespace-nowrap">Ver folleto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsive Modal/Lightbox - Rest of the component remains the same */}
        {isModalOpen && selectedActivity && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
              onClick={closeModal}
            />
            
            {/* Modal Container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6">
              <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] md:max-h-[95vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex justify-between items-center p-4 bg-white border-b border-gray-200 sticky top-0 z-10">
                  <div className="flex items-center gap-3">
                    {/* Navigation Buttons - Mobile only */}
                    <div className="flex md:hidden gap-2">
                      <button
                        onClick={goToPrev}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Anterior"
                      >
                        <ChevronLeft size={20} className="text-gray-900"/>
                      </button>
                      <button
                        onClick={goToNext}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Siguiente"
                      >
                        <ChevronRight size={20} className="text-gray-900"/>
                      </button>
                    </div>
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 truncate max-w-[200px] sm:max-w-md">
                      {selectedActivity.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Navigation Buttons - Desktop only */}
                    <div className="hidden md:flex gap-2">
                      <button
                        onClick={goToPrev}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Anterior"
                      >
                        <ChevronLeft size={20} className="text-gray-900"/>
                      </button>
                      <span className="text-sm text-black">
                        {currentIndex + 1} / {activities.length}
                      </span>
                      <button
                        onClick={goToNext}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                        aria-label="Siguiente"
                      >
                        <ChevronRight size={20} className="text-gray-900"/>
                      </button>
                    </div>
                    
                    <button
                      onClick={closeModal}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors ml-2 sm:ml-4"
                      aria-label="Cerrar"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
                
                {/* Image Container - Scrollable */}
                <div className="flex-1 overflow-y-auto p-2 sm:p-4">
                  <div className="min-h-full flex items-center justify-center">
                    <div className="relative w-full max-w-4xl mx-auto">
                      <Image
                        src={selectedActivity.image}
                        alt={selectedActivity.title}
                        width={1200}
                        height={3000}
                        className="w-full h-auto rounded-lg shadow-lg"
                        quality={100}
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 1200px"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Footer - Mobile */}
                <div className="md:hidden p-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      {currentIndex + 1} de {activities.length}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={goToPrev}
                        className="px-4 py-2 bg-gray-200 text-black hover:bg-gray-300 rounded-lg text-sm font-medium transition-colors"
                      >
                        Anterior
                      </button>
                      <button
                        onClick={goToNext}
                        className="px-4 py-2 bg-[#f99963] text-white hover:bg-orange-600 rounded-lg text-sm font-medium transition-colors"
                      >
                        Siguiente
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Footer Instructions */}
                <div className="p-3 bg-gray-50 border-t border-gray-200 text-center">
                  <p className="text-xs sm:text-sm text-gray-500 flex flex-wrap justify-center gap-1">
                    <span>Desplázate para ver el folleto completo</span>
                    <span className="hidden sm:inline">•</span>
                    <span>En móvil: desliza para cambiar</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Presiona ESC para cerrar</span>
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Purpose;