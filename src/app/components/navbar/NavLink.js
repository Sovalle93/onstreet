'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link
      href={href}
      className={`block py-3 px-4 uppercase text-xl font-normal mb-2 transition-colors duration-200 ${
        isActive
          ? 'text-[#f99963]'
          : 'text-white hover:text-[#f99963]'
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;