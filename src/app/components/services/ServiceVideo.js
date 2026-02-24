// components/ServiceVideo.js
const ServiceVideo = () => {
  const videos = [
    {
      src: "https://res.cloudinary.com/dmivjpb65/video/upload/v1771897001/video_servicios_h6oxiv.mp4",
      title: "Sucursal Móvil",
      description: "Soluciones integrales para tus necesidades"
    },
    {
      src: "https://res.cloudinary.com/dmivjpb65/video/upload/v1771898863/video_clinica_rammhh.mp4",
      title: "Clínica Móvil",
      description: "Atención médica donde más se necesita"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#fb5103' }}>
          NUESTRAS SOLUCIONES
        </h2>

        {/* Two Videos Grid - Minimal gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-3 lg:gap-4">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              {/* Video Container */}
              <div className="relative w-full h-[250px] sm:h-[280px] md:h-[300px] lg:h-[320px] bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                </video>

                {/* Subtle Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Video Info - Always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {video.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceVideo;