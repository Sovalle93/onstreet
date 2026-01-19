// components/navbar/NavLogo.js
import Image from 'next/image';

const NavLogo = () => {
  return (
    <div className="flex-shrink-0">
      <Image
        src="https://res.cloudinary.com/dmivjpb65/image/upload/v1768778951/1_aghjxb.jpg"
        alt="Logo"
        width={150}
        height={50}
        className="object-contain"
      />
    </div>
  );
};

export default NavLogo;