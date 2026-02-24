// components/ClientCarousel.js
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const ClientCarousel = () => {
  const [currentSet, setCurrentSet] = useState(0);
  
  // Group images into sets of 7
  const imageSets = [
    // Set 1 - First 7 images
    [
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896387/VTR_wtzo0k.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896387/SSMO-1_lklsqz.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896387/Survias_bohjyw.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896387/SS-Chiloe-1_qe8ecz.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896383/Servicio-Nacional-de-Migraciones_jkchtq.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896383/SEREMI-RM_wvyvwk.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896383/peirq7NZ_400x400-1_uz1qug.jpg',
    ],
    // Set 2 - Next 7 images
    [
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896382/logoMutual_yibapn.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896383/Municipalidad-de-Lo-Barnechea_k6jemv.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896382/Logotipo_Caja_Los_Andes.svg-1_xymvzc.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896382/Logo-M-L-pelambres-3_ji4n0j.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896382/LOGO-MOVIL_page-0001-scaled_qqs07g.jpg',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896379/logo-habitat-1_vdelmk.jpg',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896378/Caja-La-Araucana_qwpiiq.png',
    ],
    // Set 3 - Next 7 images
    [
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896378/Clinica-Indisa_ovnezh.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896378/care_ufcq28.jpg',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896376/Banco-Falabella_kcsyyw.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896371/1280px-Logo-cmpc.svg__kvr6p0.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896370/logo-es_alciuy.svg',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896370/Diseno-sin-titulo-10_ftforr.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896370/logo_dark-19c03d26df69fa0c379b27f0416858a9d80a3d5c1c22455be9d8279b1ad02d87_xmic1z.png',
    ],
    // Set 4 - Last 7 images
    [
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896370/Logo-de-Banco-Estado_urgqzv.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896370/Fraccion_wgndjy.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896370/fundacion_acrux_cir2ds.jpg',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896370/desafio_ovrviz.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896369/Entel_wrsuno.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896369/Codelco_tcx2i3.png',
      'https://res.cloudinary.com/dmivjpb65/image/upload/v1771896369/Diseno-sin-titulo-9_fizuth.png',
    ],
  ];

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % imageSets.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [imageSets.length]);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Nuestros Clientes
        </h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Image Sets */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSet * 100}%)` }}
          >
            {imageSets.map((set, setIndex) => (
              <div key={setIndex} className="flex-shrink-0 w-full">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
                  {set.map((image, imageIndex) => (
                    <div 
                      key={`${setIndex}-${imageIndex}`} 
                      className="bg-gray-50 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow"
                    >
                      <div className="relative w-full h-16 md:h-20">
                        <Image
                          src={image}
                          alt={`Cliente ${setIndex * 7 + imageIndex + 1}`}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 40vw, (max-width: 768px) 30vw, (max-width: 1024px) 20vw, 120px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {imageSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSet(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSet 
                  ? 'w-6 bg-[#f99963]' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir al grupo ${index + 1}`}
            />
          ))}
        </div>

        {/* Set Counter (optional) */}
        <p className="text-center text-gray-500 text-sm mt-4">
          {currentSet + 1} / {imageSets.length}
        </p>
      </div>
    </section>
  );
};

export default ClientCarousel;