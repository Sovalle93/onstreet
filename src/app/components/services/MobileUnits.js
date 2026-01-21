// components/services/MobileUnits.js
import Image from 'next/image';

const MobileUnits = () => {
  const mobileUnits = [
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769015538/carro1_akveab.jpg',
      title: 'Oficina / Sucursal Móvil',
      description: 'Nos adaptamos a tus campañas de capacitación, difusión y atención especializada.',
      buttonText: 'Vista 360',
      buttonColor: '#545454',
      textColor: 'text-white'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769015538/carro4_zfryor.jpg',
      title: 'Clínica Móvil',
      description: 'Nos adaptamos a la atención en salud que tú necesites.',
      buttonText: 'Vista 360',
      buttonColor: '#545454',
      textColor: 'text-white'
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769015538/carro2_j4ppte.jpg',
      title: 'Nuestros móviles',
      description: '',
      buttonText: '',
      buttonColor: '#545454', // Background color for button
      textColor: 'text-white',
      titleAsButton: true
    },
    {
      image: 'https://res.cloudinary.com/dmivjpb65/image/upload/v1769015538/carro3_bqronw.jpg',
      title: 'Equipamiento',
      description: '',
      buttonText: '',
      buttonColor: '#e54510', // Background color for button
      textColor: 'text-white',
      titleAsButton: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mobileUnits.map((unit, index) => (
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
                    {/* Title - Either as heading or as button */}
                    {unit.titleAsButton ? (
                      <button 
                        className={`${unit.textColor} px-8 py-4 rounded-full font-bold uppercase text-xl md:text-2xl hover:opacity-90 transition-opacity`}
                        style={{ backgroundColor: unit.buttonColor }}
                      >
                        {unit.title}
                      </button>
                    ) : (
                      <>
                        <h3 className={`${unit.textColor} text-3xl md:text-4xl font-bold mb-4`}>
                          {unit.title}
                        </h3>
                        
                        {/* Description */}
                        {unit.description && (
                          <p className="text-white text-xl md:text-2xl mb-6 leading-relaxed">
                            {unit.description}
                          </p>
                        )}
                        
                        {/* Button */}
                        {unit.buttonText && (
                          <button 
                            className="px-8 py-3 rounded-full font-bold uppercase text-white hover:opacity-90 transition-opacity text-lg"
                            style={{ backgroundColor: unit.buttonColor }}
                          >
                            {unit.buttonText}
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileUnits;