// components/navbar/index.js
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import ContactButton from './ContactButton';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <NavLogo />
          
          {/* Desktop Navigation - Center (hidden on mobile) */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavLinks />
          </div>
          
          {/* Desktop Contact Button - Right (hidden on mobile) */}
          <div className="hidden lg:flex flex-shrink-0">
            <ContactButton />
          </div>
          
          {/* Mobile Menu Button (visible only on mobile) */}
          <div className="lg:hidden flex items-center gap-4">
            <ContactButton />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;