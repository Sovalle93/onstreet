// components/aboutus/MotherCompany.js
import Image from 'next/image';
import Link from 'next/link';

const MotherCompany = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Large Image Container with Button Inside */}
        <div className="relative w-full h-[500px] md:h-[600px] rounded-xl overflow-hidden">
          {/* Large Image */}
          <Image
            src="https://res.cloudinary.com/dmivjpb65/image/upload/v1769091818/7_nvkvbv.webp"
            alt="OnStreet España"
            fill
            className="object-cover"
          />
          
          {/* Button Centered Inside Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Link 
              href="https://onstreet-spain.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#545454] text-white font-bold py-4 px-10 rounded-full uppercase hover:opacity-90 transition-opacity text-xl shadow-lg"
            >
              Descubre Onstreet España
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotherCompany;