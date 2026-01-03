import NavLink from './NavLink';

const NavLinks = () => {
  const navItems = [
    { href: '/', label: 'INICIO' },
    { href: '/sobre-nosotros', label: 'SOBRE NOSOTROS' },
    { href: '/nuestro-servicios', label: 'NUESTROS SERVICIOS' },
    { href: '/tu-ruta', label: 'TU RUTA' },
  ];

  return (
    <div className="flex-1">
      {navItems.map((item) => (
        <NavLink key={item.href} href={item.href}>
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;