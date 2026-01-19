// components/navbar/index.js
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import ContactButton from './ContactButton';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <NavLogo />
          
          {/* Navigation Links - Center */}
          <div className="flex-1 flex justify-center">
            <NavLinks />
          </div>
          
          {/* Contact Button - Right */}
          <div className="flex-shrink-0">
            <ContactButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;