// components/navbar/ContactButton.js
import Link from 'next/link';

const ContactButton = () => {
  return (
    <>
      {/* Desktop version */}
      <Link 
        href="/contact"
        className="hidden lg:inline-block bg-[#f99963] text-white font-bold py-2 px-6 rounded-full uppercase hover:bg-orange-600 transition-colors whitespace-nowrap"
      >
        Contáctanos
      </Link>
      
      {/* Mobile version (smaller) */}
      <Link 
        href="/contact"
        className="lg:hidden bg-[#f99963] text-white font-bold py-2 px-4 rounded-full uppercase hover:bg-orange-600 transition-colors text-sm whitespace-nowrap"
      >
        Contacto
      </Link>
    </>
  );
};

export default ContactButton;