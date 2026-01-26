// components/Purpose.js
const Purpose = () => {
  const activities = [
    'Externalización: Comprar v/s arrendar',
    'Listas de Espera',
    'Estado Cercano y Eficiente',
    'Cobertura y Regulación',
    'Sostenabilidad y Comuna',
  ];

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

        {/* 5-Image Grid with Text Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {activities.map((title, index) => (
            <div 
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              {/* Image with Gradient Overlay */}
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-300">
                {/* Text Centered on Image */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white font-bold text-lg text-center drop-shadow-lg">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Purpose;