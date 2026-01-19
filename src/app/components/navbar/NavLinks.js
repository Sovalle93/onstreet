// components/navbar/NavLinks.js
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link
      href={href}
      className={`px-4 uppercase font-bold ${
        isActive
          ? 'text-[#f99963]'
          : 'text-gray-800 hover:text-[#f99963]'
      }`}
    >
      {children}
    </Link>
  );
};

const NavLinks = () => {
  const navItems = [
    { href: '/', label: 'Inicio' },
    { href: '/servicio-integral', label: 'Servicio Integral' },
    { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
    { href: '/tu-ruta', label: 'Tu Ruta' },
    { href: '/noticias', label: 'Noticias' },
  ];

  return (
    <nav className="flex items-center space-x-2">
      {navItems.map((item, index) => (
        <div key={item.href} className="flex items-center"> {/* Wrapper div with key */}
          <NavLink href={item.href}>
            {item.label}
          </NavLink>
          {index < navItems.length - 1 && (
            <span className="text-gray-300">|</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavLinks;