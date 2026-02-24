// components/aboutus/History.js
import Image from 'next/image';
import { Truck, Users, Heart, Target, Award, ChevronRight } from 'lucide-react';

const History = () => {
  // Key milestones extracted from the text
  const milestones = [
    {
      year: '2009',
      title: 'Fundación',
      description: 'Nace como empresa de publicidad móvil innovadora con cortinas dinámicas en vehículos.',
      icon: Truck,
      color: 'bg-blue-500'
    },
    {
      year: '2015',
      title: 'Evolución',
      description: 'Transición hacia showrooms y primeras oficinas móviles, acercando empresas a sus clientes.',
      icon: Target,
      color: 'bg-green-500'
    },
    {
      year: '2020',
      title: 'Respuesta COVID-19',
      description: 'Implementación de +40 clínicas móviles con MINSAL, atendiendo a más de 1.5M de personas.',
      icon: Heart,
      color: 'bg-red-500'
    },
    {
      year: '2024',
      title: 'Liderazgo Nacional',
      description: 'Flota de +80 unidades, líderes en soluciones móviles integrales en Chile.',
      icon: Award,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestra Historia
          </h2>
          <div className="w-24 h-1 bg-[#fb5103] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la publicidad móvil a las soluciones integrales en movimiento
          </p>
        </div>

        {/* Main Story - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Image/Visual */}
          <div className="relative">
            <div className="sticky top-24">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dmivjpb65/image/upload/v1769015538/carro2_j4ppte.jpg"
                  alt="On Street móvil"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white text-lg font-light italic">
                    "Llevando servicios hasta donde están las personas"
                  </p>
                </div>
              </div>
              
              {/* Stats Overlay */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-[#fb5103]">80+</div>
                  <div className="text-gray-600 text-sm">Unidades móviles</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md">
                  <div className="text-3xl font-bold text-[#fb5103]">1.5M+</div>
                  <div className="text-gray-600 text-sm">Personas atendidas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Story Text */}
          <div className="space-y-8">
            {/* Evolution Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#fb5103] rounded-full flex items-center justify-center text-white text-lg">①</span>
                Origen e Innovación
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                On Street nació como una empresa chilena especializada en publicidad móvil en vía pública. 
                Su innovador sistema consistía en cortinas que subían y bajaban sobre los costados de los vehículos, 
                exhibiendo distintos mensajes publicitarios en secuencia y revelando una vitrina al finalizar el ciclo.
              </p>
            </div>

            {/* Transformation Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#fb5103] rounded-full flex items-center justify-center text-white text-lg">②</span>
                Evolución Estratégica
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Su fundador, <span className="font-semibold">Eduardo Behrmann</span>, identificó una oportunidad más allá de la publicidad: 
                ¿por qué no aprovechar esa movilidad para acercar empresas e instituciones directamente a sus clientes? 
                Así, a mediados de 2009, On Street evolucionó hacia oficinas y sucursales móviles.
              </p>
            </div>

            {/* COVID Response Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-400">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-lg">③</span>
                Respuesta Pandemia
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                La pandemia de COVID-19 fue un punto de inflexión clave. On Street respondió al desafío sanitario 
                implementando más de <span className="font-bold text-red-500">40 clínicas móviles</span> en colaboración con el Ministerio de Salud, 
                desplegadas desde Iquique hasta Aysén, llegando a facilitar el acceso a la salud de más de 
                <span className="font-bold"> 1.500.000 personas</span>.
              </p>
            </div>

            {/* Present Day Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-[#fb5103] rounded-full flex items-center justify-center text-white text-lg">④</span>
                Actualidad
              </h3>
              <p className="text-gray-200 leading-relaxed text-lg">
                Hoy, <span className="font-bold text-[#fb5103]">On Street es la empresa líder en Chile</span> en arriendo y operación de soluciones móviles integrales. 
                Con una flota de más de <span className="font-bold text-[#fb5103]">80 unidades</span> entre oficinas, sucursales y clínicas móviles, 
                atiende tanto al sector público como privado —AFP, bancos, mineras, municipalidades, organismos del Estado— 
                bajo un modelo flexible que lleva los servicios hasta donde están las personas.
              </p>
            </div>
          </div>
        </div>

        {/* Key Milestones Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Hitos Clave</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <div className={`w-14 h-14 ${milestone.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-[#fb5103] mb-2">{milestone.year}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Quote */}
        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-5xl text-[#fb5103] mb-4">"</div>
            <p className="text-2xl text-gray-700 italic font-light leading-relaxed">
              La distancia no debe ser una barrera para recibir atención, servicios ni oportunidades. 
              Por eso llevamos nuestras soluciones a cada lugar del país.
            </p>
            <div className="mt-6">
              <p className="font-bold text-gray-800">— Eduardo Behrmann</p>
              <p className="text-gray-500 text-sm">Fundador, On Street</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;