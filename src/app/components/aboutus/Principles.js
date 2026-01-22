// components/aboutus/Principles.js
const Principles = () => {
  const principles = [
    {
      title: 'SEGURIDAD ANTE TODO',
      description: 'Nuestra seguridad y la de los demás ante todo. Sin excepción.'
    },
    {
      title: 'LA ÉTICA NO SE TRANSA',
      description: 'Integridad, transparencia y respeto en todo y por todos.'
    },
    {
      title: 'LA SOSTENIBILIDAD EN EL CENTRO DE NUESTRA ORGANIZACIÓN',
      description: 'Nuestra mirada presente y futura es sostenible, creando valor económico, social y medioambiental.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Title with colored text */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#dd7347' }}>
          Nuestros principios
        </h2>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl bg-white p-8 flex flex-col hover:border-gray-300 transition-colors duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {principle.title}
              </h3>
              
              {/* Separator */}
              <div className="w-12 h-1 bg-gray-300 mx-auto mb-6"></div>
              
              {/* Description */}
              <p className="text-gray-600 text-center leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;