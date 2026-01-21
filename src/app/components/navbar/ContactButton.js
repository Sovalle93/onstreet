// components/navbar/ContactButton.js
import Link from 'next/link';

const ContactButton = () => {
  return (
    <Link 
      href="/contact"
      className="bg-[#f99963] text-white font-bold py-2 px-6 rounded-full uppercase hover:bg-orange-600 transition-colors inline-block"
    >
      Contáctanos
    </Link>
  );
};

export default ContactButton;