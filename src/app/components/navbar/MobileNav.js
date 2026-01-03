// components/navbar/MobileNav.js
import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import ContactButton from './ContactButton';
import SocialLinks from './SocialLinks';

const MobileNav = ({ isOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-80 bg-[#4c4e55] z-40 transform transition-transform duration-300 lg:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col p-8 h-full">
        <div className="space-y-8 mt-8">
          <NavLogo />
          <NavLinks />
          <ContactButton />
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;