const HamburgerButton = ({ isOpen, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center items-center w-8 h-8 space-y-1.5 ${className}`}
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
};

export default HamburgerButton;