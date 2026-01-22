// components/aboutus/History.js
const History = () => {
  // Placeholder timeline data - replace with actual data from client
  const timelineEvents = [
    {
      year: '2024',
      title: 'Expansión Nacional',
      description: 'Descripción del hito importante del año. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      year: '2023', 
      title: 'Certificación de Calidad',
      description: 'Descripción del logro obtenido. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      year: '2022',
      title: 'Inicio de Operaciones',
      description: 'Descripción de cómo comenzó la empresa. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
    },
    {
      year: '2021',
      title: 'Fundación',
      description: 'Descripción del origen de la empresa. Duis aute irure dolor in reprehenderit in voluptate velit.'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
          Nuestra Historia
        </h2>

        {/* Video Placeholder */}
        <div className="mb-16">
          <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            {/* Video Placeholder Icon */}
            <div className="text-center">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Video de la historia de la compañía</p>
              <p className="text-gray-500 text-sm mt-2">(Reemplazar con video real)</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300"></div>
          
          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Year Circle */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 border-4 border-white flex items-center justify-center shadow-lg z-10 mb-4 md:mb-0">
                  <div className="text-xl font-bold text-gray-800">{event.year}</div>
                </div>
                
                {/* Connector for Mobile */}
                <div className="md:hidden w-0.5 h-8 bg-gray-300 my-2"></div>
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Update Note */}
        <div className="mt-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            <span className="font-medium">Nota:</span> Este componente contiene datos de ejemplo. 
            Reemplazar con la historia real de la compañía cuando el cliente envíe la información.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;