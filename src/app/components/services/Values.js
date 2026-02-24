// components/services/Values.js
import Image from 'next/image';

const Values = () => {
  const twoColumnValues = [
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771898760/Acompa%C3%B1amiento_itpaw4.png',
      title: 'ACOMPAÑAMIENTO INTEGRAL',
      description: 'Llegamos a todas las comunas y regiones de Chile.'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771898721/Continuidad_operacional_sfw5yl.png',
      title: 'CONTINUIDAD OPERACIONAL',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    }
  ];

  const fourColumnValues = [
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771898748/seguridad_bwj7zm.png',
      title: 'Seguridad',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771898736/calidad_ozcpos.png',
      title: 'Calidad',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771898635/flexibilidad_zrz5ee.png',
      title: 'Flexibilidad',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771898706/regional_gzlpcr.png',
      title: 'Cobertura Regional',
      description: 'Adaptamos rutas, horarios y formatos según tu calendario de despliegue.'
    }
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#e8eaec' }}>
      <div className="container mx-auto max-w-7xl">
        
        {/* Section 1: Title - Orange */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center uppercase" style={{ color: '#fb5103' }}>
            PROPUESTA DE VALOR
          </h2>
        </div>

        {/* Section 2: Two-Image Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {twoColumnValues.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Image - No white background */}
                <div className="w-full mb-6">
                  <div className="relative w-full h-40 md:h-48">
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

        {/* Section 3: Big Title - Orange */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: '#fb5103' }}>
            QUE NOS DESTACA
          </h2>
        </div>

        {/* Section 4: Four-Image Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fourColumnValues.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Image - No white background */}
                <div className="w-full mb-4">
                  <div className="relative w-full h-32">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed max-w-[200px]">
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