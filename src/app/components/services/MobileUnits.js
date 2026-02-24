// components/services/MobileUnits.js
import Image from 'next/image';

const MobileUnits = () => {
  // New small images for the top row
  const smallUnits = [
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771899481/Salud_Mo%CC%81vil_utxrda.png',
      title: 'Salud Móvil'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771899479/Oficina_Mo%CC%81vil_cdun5b.png',
      title: 'Oficina Móvil'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771899482/Sucursal_Mo%CC%81vil_wjbwg4.png',
      title: 'Sucursal Móvil'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771899479/Centro_Mo%CC%81vil_mfehc5.jpg',
      title: 'Centro Móvil'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1771899484/Veterinario_M%C3%B3vil_r6mjn4.png',
      title: 'Veterinario Móvil'
    }
  ];

  // Original big units (last two remain)
  const bigUnits = [
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769015538/carro2_j4ppte.jpg',
      title: 'Nuestros móviles',
      description: '',
      buttonText: '',
      buttonColor: '#545454',
      textColor: 'text-white',
      titleAsButton: true
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769015538/carro3_bqronw.jpg',
      title: 'Equipamiento',
      description: '',
      buttonText: '',
      buttonColor: '#e54510',
      textColor: 'text-white',
      titleAsButton: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Top Row - 5 Small Images */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            TIPOS DE SERVICIOS MÓVILES
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {smallUnits.map((unit, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Image Container */}
                <div className="relative w-full aspect-square mb-4 rounded-xl overflow-hidden bg-gray-50 shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={unit.image}
                    alt={unit.title}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
                  />
                </div>
                {/* Title Below Image */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center">
                  {unit.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - 2 Big Images (original format) */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bigUnits.map((unit, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden group h-[400px] md:h-[500px]">
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={unit.image}
                    alt={unit.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  
                  {/* Centered Text Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className="max-w-md">
                      {/* Title as Button */}
                      <button 
                        className={`${unit.textColor} px-8 py-4 rounded-full font-bold uppercase text-xl md:text-2xl hover:opacity-90 transition-opacity`}
                        style={{ backgroundColor: unit.buttonColor }}
                      >
                        {unit.title}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileUnits;