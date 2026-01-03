// components/navbar/index.js
'use client';
import { useState, useEffect } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import HamburgerButton from './HamburgerButton';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when clicking on backdrop (the rest of the screen)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-nav') && !event.target.closest('.hamburger-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-[#4c4e55] z-50 p-4">
        <div className="flex items-center space-x-4">
          <HamburgerButton 
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hamburger-button"
          />
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileMenuOpen} className="mobile-nav" />
      
      {/* Desktop Navigation */}
      <DesktopNav />
    </>
  );
};

export default Navbar;