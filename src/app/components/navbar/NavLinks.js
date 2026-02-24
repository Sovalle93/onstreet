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
      className={`
        px-4 py-2 uppercase font-bold text-sm tracking-wide
        relative transition-colors duration-300
        ${isActive
          ? 'text-[#fb5103]'
          : 'text-gray-800 hover:text-[#fb5103]'
        }
      `}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-[#fb5103] rounded-full"></span>
      )}
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
    <nav className="flex items-center space-x-1">
      {navItems.map((item, index) => (
        <div key={item.href} className="flex items-center">
          <NavLink href={item.href}>
            {item.label}
          </NavLink>
          {index < navItems.length - 1 && (
            <span className="text-gray-300 text-xs">•</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavLinks;