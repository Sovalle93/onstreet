import NavLogo from './NavLogo';
import NavLinks from './NavLinks';
import ContactButton from './ContactButton';
import SocialLinks from './SocialLinks';

const DesktopNav = () => {
  return (
    <nav className="w-96 bg-[#4c4e55] h-full fixed left-0 top-0 flex flex-col p-10 overflow-y-auto hidden lg:flex">
      <div className="space-y-8 mt-14">
        <NavLogo />
        <NavLinks />
        <ContactButton />
        <SocialLinks />
      </div>
    </nav>
  );
};

export default DesktopNav;