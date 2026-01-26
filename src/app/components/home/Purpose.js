'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Purpose = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activities = [
    { 
      title: 'Externalización: Comprar v/s arrendar',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769457171/Landing_Externalizaci%C3%B3n_f0sel4.png'
    },
    { 
      title: 'Listas de Espera',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769456440/Landing_Listas_de_Espera_i8vkum.png'
    },
    { 
      title: 'Estado Cercano y Eficiente',
        image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769457321/Landing_Cobertura_y_Regulaci%C3%B3n_yh6yq5.png'
      },
      { 
      title: 'Cobertura y Regulación',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769457319/Landing_Estado_Cercano_y_Eficiente_btj9mh.png'
    },
    { 
      title: 'Sostenabilidad y Comuna',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769457125/Landing_Sostenibilidad_y_Comunidad_ccadze.png'
    },
  ];

  const openModal = (activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = 'auto';
    // Small delay before clearing selectedActivity for smooth transition
    setTimeout(() => setSelectedActivity(null), 300);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Main Quote */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-gray-800 mb-12 leading-relaxed">
          "Nos mueve conectar a las personas con lo que necesitan y contribuir así a mejorar su calidad de vida en el lugar que se encuentren"
        </blockquote>

        {/* What We Do Section */}
        <div className="mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
            ¿QUÉ HACEMOS?
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Arriendo y Servicio de Operación Integral de Oficinas y Clínicas Móviles
          </p>
        </div>

        {/* 5-Image Grid with Clickable Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => openModal(activity)}
            >
              {/* Image with Gradient Overlay */}
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-300">
                {/* Text Centered on Image */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white font-bold text-lg text-center drop-shadow-lg">
                    {activity.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal/Lightbox - Scrollable */}
        {isModalOpen && selectedActivity && (
          <div className="fixed inset-0 z-50 flex flex-col bg-black">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center p-4 bg-black/90 border-b border-gray-800">
              <h3 className="text-white text-lg font-medium">
                {selectedActivity.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-white text-3xl hover:text-gray-300 transition-colors p-2"
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>
            
            {/* Scrollable Image Container */}
            <div className="flex-1 overflow-y-auto">
              <div className="min-h-full flex items-start justify-center p-4">
                <div className="relative">
                  <Image
                    src={selectedActivity.image}
                    alt={selectedActivity.title}
                    width={1200}
                    height={3000} // Tall height for brochure
                    className="max-w-full h-auto"
                    style={{ width: 'auto', height: 'auto' }}
                    quality={100}
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Footer with Instructions */}
            <div className="p-4 bg-black/90 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-sm">
                Desplázate para ver el folleto completo • Presiona ESC para cerrar
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Purpose;