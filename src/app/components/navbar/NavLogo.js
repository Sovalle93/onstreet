// components/navbar/NavLogo.js
import Image from 'next/image';
import Link from 'next/link';

const NavLogo = () => {
  return (
    <Link href="/" className="flex-shrink-0">
      <div className="relative">
        {/* Desktop Logo */}
        <Image
          src="https://res.cloudinary.com/dmivjpb65/image/upload/v1768778951/1_aghjxb.jpg"
          alt="Logo"
          width={150}
          height={50}
          className="hidden lg:block object-contain"
          priority
        />
        {/* Mobile Logo (smaller) */}
        <Image
          src="https://res.cloudinary.com/dmivjpb65/image/upload/v1768778951/1_aghjxb.jpg"
          alt="Logo"
          width={100}
          height={40}
          className="lg:hidden object-contain"
          priority
        />
      </div>
    </Link>
  );
};

export default NavLogo;