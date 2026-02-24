// components/services/TypeOfService.js
import Image from 'next/image';

const TypeOfService = () => {
  const serviceTypes = [
    {
      title: 'Atención Presencial',
      description: 'Atención directa en terreno, cercana y personalizada.',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771932594/Atencio%CC%81n_Presencial_f5yozw.jpg'
    },
    {
      title: 'Atención Remota',
      description: 'Asistencia digital guiada desde cualquier ubicación.',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771932595/atencio%CC%81n_remota_cln1a2.png'
    },
    {
      title: 'Autoatención',
      description: 'Gestión autónoma de trámites de forma rápida y simple.',
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771932594/Autoatencio%CC%81n_l2wsi9.png'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          NUESTROS TIPOS DE ATENCIÓN
        </h2>

        {/* 3-Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceTypes.map((service, index) => (
            <div 
              key={index}
              className="border border-gray-300 rounded-xl bg-white p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="w-48 h-48 rounded-lg flex items-center justify-center">
                                  <div className="relative w-full h-32">
                                    <Image
                                      src={service.image}
                                      alt={service.title}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TypeOfService;