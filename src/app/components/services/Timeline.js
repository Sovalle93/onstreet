// components/services/Timeline.js
const Timeline = () => {
  const timelineSteps = [
    {
      number: 1,
      title: 'Escuchamos',
      description: 'Entendemos las necesidades del cliente y del territorio'
    },
    {
      number: 2,
      title: 'Diseñamos',
      description: 'Creamos Soluciones Móviles a medida de cada proyecto'
    },
    {
      number: 3,
      title: 'Implementamos',
      description: 'Habilitamos y desplegamos el servicio en terreno'
    },
    {
      number: 4,
      title: 'Operamos',
      description: 'Gestionamos la atención diaria en el lugar que se encuentre'
    },
    {
      number: 5,
      title: 'Supervisamos',
      description: 'Aseguramos calidad, continuidad y mejora constante'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-16">
          Arriendo y Servicio de Operación Integral de Oficinas y Clínicas Móviles
        </h1>

        {/* Desktop: Simple flex with arrows at box level */}
        <div className="hidden lg:flex items-start justify-center">
          {timelineSteps.map((step, index) => (
            <div key={`desktop-${step.number}`} className="flex items-start">
              {/* Box and Content */}
              <div className="flex flex-col items-center">
                {/* Box Container */}
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-gray-300 rounded-lg flex items-center justify-center bg-white">
                    <div className="text-3xl font-bold text-gray-700">{step.number}</div>
                  </div>
                </div>
                
                {/* Text Below */}
                <div className="text-center mt-4 max-w-[160px] px-2">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-tight">{step.description}</p>
                </div>
              </div>

              {/* Arrow at Box Level (except last) */}
              {index < timelineSteps.length - 1 && (
                <div className="flex items-center justify-center mt-8 mx-1">
                  <svg 
                    width="32" 
                    height="12" 
                    viewBox="0 0 32 12" 
                    fill="none"
                    className="text-gray-400"
                  >
                    <path d="M0 6L24 6" stroke="currentColor" strokeWidth="2"/>
                    <path d="M24 6L18 2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M24 6L18 10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: Vertical layout */}
        <div className="lg:hidden space-y-8">
          {timelineSteps.map((step, index) => (
            <div key={`mobile-${step.number}`} className="flex flex-col items-center">
              <div className="w-20 h-20 border-4 border-gray-300 rounded-lg flex items-center justify-center mb-4 bg-white">
                <div className="text-3xl font-bold text-gray-700">{step.number}</div>
              </div>
              
              <div className="text-center max-w-xs px-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>

              {index < timelineSteps.length - 1 && (
                <div className="mt-2">
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                    className="text-gray-400"
                  >
                    <path d="M8 0L8 12" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L4 8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12L12 8" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;