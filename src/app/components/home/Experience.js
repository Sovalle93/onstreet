// components/Experience.js
import Image from 'next/image';
import TestimonialCarousel from './TestimonialCarrousel';
import ClientCarousel from './ClientCarrousel';

const Experience = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Carousel Section */}
        <div className="mb-16">
          <TestimonialCarousel />
        </div>

        {/* Section 2: Quienes han confiado */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            QUIENES HAN CONFIADO EN NOSOTROS
          </h2>
        <div className="mb-16">
          <ClientCarousel />
        </div>
        </div>

{ 
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            NUESTRAS CERTIFICACIONES
          </h3>
          <blockquote className="text-lg md:text-xl text-gray-600 text-center italic max-w-3xl mx-auto mb-8 leading-relaxed">
            "Nuestras certificaciones respaldan una operación segura, confiable y alineada con altos estándares de calidad."
            <footer className="mt-4 not-italic font-medium">
              Álvaro Arancibia, Gerente de Operaciones – On Street
            </footer>
          </blockquote>
          
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dmivjpb65/image/upload/v1768828982/3_t9dsoo.png"
              alt="Nuestras certificaciones"
              fill
              className="object-cover"
            />
          </div>
        </div>}
      </div>
    </section>
  );
};

export default Experience;