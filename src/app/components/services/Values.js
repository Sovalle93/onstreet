// components/services/Values.js
import Image from 'next/image';

const Values = () => {
  const twoColumnValues = [
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1768781870/Acompa%C3%B1amiento_itpaw4.jpg',
      title: 'ACOMPAÑAMIENTO INTEGRAL',
      description: 'Llegamos a todas las comunas y regiones de Chile.'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1768781865/Continuidad_operacional_sfw5yl.jpg',
      title: 'CONTINUIDAD OPERACIONAL',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    }
  ];

  const fourColumnValues = [
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1768781868/seguridad_bwj7zm.jpg',
      title: 'Seguridad',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1768781867/calidad_ozcpos.jpg',
      title: 'Calidad',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1768781862/flexibilidad_zrz5ee.jpg',
      title: 'Flexibilidad',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1768781863/regional_gzlpcr.jpg',
      title: 'Cobertura Regional',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section 1: Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center uppercase">
            PROPUESTA DE VALOR
          </h2>
        </div>

        {/* Section 2: Two-Image Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {twoColumnValues.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Image with white background and proper sizing */}
                <div className="w-full bg-white p-4 rounded-lg shadow-sm mb-6">
                  <div className="relative w-full h-48 md:h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 text-center max-w-md">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Big Title */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
            QUE NOS DESTACA
          </h2>
        </div>

        {/* Section 4: Four-Image Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fourColumnValues.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Image with white background and proper sizing */}
                <div className="w-full bg-white p-4 rounded-lg shadow-sm mb-4">
                  <div className="relative w-full h-40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Values;