// components/Experience.js
import Image from 'next/image';

const Experience = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section 1: Experiencia */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            Experiencia
          </h2>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dmivjpb65/image/upload/v1768828961/1_oawcar.png"
              alt="Experiencia visual"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 2: Quienes han confiado */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
            QUIENES HAN CONFIADO EN NOSOTROS
          </h2>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dmivjpb65/image/upload/v1768829049/2_cxbjxu.png"
              alt="Clientes que confían en nosotros"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Section 3: Certificaciones */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
            NUESTRAS CERTIFICACIONES
          </h3>
          
          {/* Quote */}
          <blockquote className="text-lg md:text-xl text-gray-600 text-center italic max-w-3xl mx-auto mb-8 leading-relaxed">
            "Nuestras certificaciones respaldan una operación segura, confiable y alineada con altos estándares de calidad."
            <footer className="mt-4 not-italic font-medium">
              Álvaro Arancibia, Gerente de Operaciones – On Street
            </footer>
          </blockquote>
          
          {/* Image */}
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dmivjpb65/image/upload/v1768828982/3_t9dsoo.png"
              alt="Nuestras certificaciones"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;