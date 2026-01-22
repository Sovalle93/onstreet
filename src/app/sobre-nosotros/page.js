// app/sobre-nosotros/page.js
import WorkerQuotesCarousel from '../components/aboutus/WorkerQuotesCarrousel';
import History from '../components/aboutus/History';
import Principles from '../components/aboutus/Principles';
import MotherCompany from '../components/aboutus/MotherCompany';

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Sobre Nosotros
          </h1>
        </div>

        {/* Worker Quotes Carousel */}
        <div className="mb-20">
          <WorkerQuotesCarousel />
        </div>

        <History />
        <Principles />
        <MotherCompany />
      </div>
    </div>
  );
}