// components/KPI.js
const KPI = () => {
  const indicators = [
    { value: '85.646', label: 'personas atendidas' },
    { value: '100%', label: 'cobertura regional' },
    { value: '99%', label: 'Continuidad operacional' },
    { value: '679', label: 'Cantidad de móviles en operación' },
    { value: '100%', label: 'NPS' },
  ];

  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#e8eaec' }}>
      <div className="container mx-auto max-w-6xl">
        {/* 5-Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {indicators.map((indicator, index) => (
            <div 
              key={index}
              className="border border-gray-300 rounded-lg p-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ backgroundColor: '#e8eaec' }}
            >
              {/* Large Number */}
              <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                {indicator.value}
              </div>
              
              {/* Label */}
              <div className="text-lg text-gray-600 uppercase font-medium">
                {indicator.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPI;