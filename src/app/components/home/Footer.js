// components/Footer.js
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#4d4f56] text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Address Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Oficina Central</h3>
            <address className="not-italic">
              <p>Av. Einstein 725, Recoleta.</p>
              <p>Santiago Chile</p>
            </address>
          </div>

          {/* WhatsApp Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Whatsapp</h3>
            <a 
              href="https://wa.me/56998787894" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              +56 9 9878 7894
            </a>
          </div>

          {/* Email Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contáctanos</h3>
            <a 
              href="mailto:ventas@onstreet.com"
              className="hover:text-gray-300 transition-colors"
            >
              ventas@onstreet.com
            </a>
          </div>

          {/* Social Icons Section */}
          <div>
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-6">
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/446063" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="LinkedIn"
              >
                <Image 
                  src="/linkedin.svg" 
                  alt="LinkedIn" 
                  width={24} 
                  height={24}
                  className="text-white"
                />
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/on_street_chile/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="Instagram"
              >
                <Image 
                  src="/instagram.svg" 
                  alt="Instagram" 
                  width={24} 
                  height={24}
                />
              </a>

              {/* Flickr */}
              <a 
                href="https://www.flickr.com/photos/151773668@N02/albums/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label="Flickr"
              >
                <Image 
                  src="/flickr.svg" 
                  alt="Flickr" 
                  width={24} 
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-600 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} On Street. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;