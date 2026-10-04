
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {

  
  // State to control mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  
  // State to track if user has scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50px, set isScrolled to true
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to close mobile menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`sticky top-0 left-0 w-full h-20 flex items-center justify-between px-8 md:px-16 lg:px-24 z-50 transition-all duration-300 border-b
        ${isScrolled 
          ? 'bg-black backdrop-blur-md border-white/10 shadow-lg' 
          : 'bg-black backdrop-blur-sm border-transparent'
        }
      `}
    >
      
      {/* Logo */}
      <div className="text-2xl md:text-3xl font-extrabold tracking-tight z-50 cursor-pointer"  >
        <a href="#home">
        <span  className="text-white">IRON</span>
        <span className="text-yellow-400">PULSE</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8 lg:gap-10 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.name}>
            
<a
  href={link.href}
  className="relative text-gray-400 hover:text-white transition duration-300 text-sm font-medium uppercase tracking-wider py-2
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:h-0.5 after:w-0 after:bg-yellow-500 
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full"
>
  {link.name}
</a>
             
          </li>
        ))}
        
        <li>
          {/* <a
          
          
            href="#join"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-7 py-3 rounded-md transition duration-300 shadow-lg shadow-yellow-500/20 text-sm uppercase tracking-wider"
          >
            Join Now
          </a> */}
          <Link
        to="/join-us-page"
        className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-7 py-3 rounded-md transition duration-300 shadow-lg shadow-yellow-500/20 text-sm uppercase tracking-wider inline-block"
      >
        Join Now
      </Link>

        </li>
      </ul>

      {/* Mobile Hamburger Button */}
      <button 
        className="md:hidden text-white text-3xl z-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`absolute top-20 left-0 w-full bg-[#0a0a0a] border-b border-white/10 md:hidden overflow-hidden transition-all duration-300 ease-in-out shadow-2xl
          ${isOpen ? 'max-h-125 opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}
        `}
      >
        <ul className="flex flex-col items-center gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.name} className="w-full text-center">
              <a
                href={link.href}
                onClick={closeMenu}
                className="block text-gray-300 hover:text-yellow-500 transition duration-300 text-lg font-medium uppercase tracking-wider"
              >
                {link.name}
              </a>
            </li>
          ))}
          
          <li className="w-full flex justify-center mt-2">
            <a
              href="#join"
              onClick={closeMenu} 
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-3 rounded-md transition duration-300 shadow-lg shadow-yellow-500/20 text-base uppercase tracking-wider"
            >
              Join Now
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
