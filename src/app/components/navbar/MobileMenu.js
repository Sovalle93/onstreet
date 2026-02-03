// components/navbar/MobileMenu.js
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Menu } from 'lucide-react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicio-integral', label: 'Servicio Integral' },
    { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '/tu-ruta', label: 'Tu Ruta' },
    { href: '/noticias', label: 'Noticias' },
    { href: '/contact', label: 'Contáctanos' },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-gray-800 hover:text-[#f99963] transition-colors"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
      )}

      {/* Mobile Menu Panel */}
      <div className={`
        lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Close button inside panel */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-800 hover:text-[#f99963]"
            aria-label="Cerrar menú"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  py-4 px-4 text-lg font-bold uppercase border-b border-gray-100 last:border-b-0
                  ${isActive ? 'text-[#f99963]' : 'text-gray-800 hover:text-[#f99963]'}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Additional Info (optional) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            <p className="mb-2">Contacto:</p>
            <a href="tel:+56998787894" className="text-[#f99963] hover:underline block">
              +56 9 9878 7894
            </a>
            <a href="mailto:ventas@onstreet.com" className="text-[#f99963] hover:underline block">
              ventas@onstreet.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;