// app/servicios-integral/page.js
import Timeline from '../components/services/Timeline';
import Values from '../components/services/Values';
import MobileUnits from '../components/services/MobileUnits';
import TypeOfService from '../components/services/TypeofService';
import FAQ from '../components/services/FAQ';

export default function ServiciosIntegralPage() {
  return (
    <div className="min-h-screen">
      <Timeline />
      <Values />
      <MobileUnits />
      <TypeOfService />
      <FAQ />
    </div>
  );
}