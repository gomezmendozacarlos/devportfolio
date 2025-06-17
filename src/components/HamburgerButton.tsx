import React from 'react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 relative">
        <span className={`
          absolute top-0 left-0 w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out
          ${isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'}
        `} />
        <span className={`
          absolute top-2 left-0 w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out
          ${isOpen ? 'opacity-0' : 'opacity-100'}
        `} />
        <span className={`
          absolute top-4 left-0 w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ease-in-out
          ${isOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-0'}
        `} />
      </div>
    </button>
  );
};

export default HamburgerButton;