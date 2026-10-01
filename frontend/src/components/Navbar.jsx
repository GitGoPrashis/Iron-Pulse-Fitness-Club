import React from 'react'

const Navbar = () => {
  return (


 <nav className="h-20 bg-black/95 flex items-center justify-between px-8 md:px-16 lg:px-24 relative z-10 ">

      {/* Logo */}
      <div className="text-2xl md:text-3xl font-extrabold tracking-tight">
        <span className="text-white">IRON</span>
        <span className="text-yellow-400">PULSE</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        <a
          href="#home"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          Home
        </a>

        <a
          href="#about"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          About
        </a>

        <a
          href="#programs"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          Programs
        </a>

        <a
          href="#pricing"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          Pricing
        </a>

        <a
          href="#trainers"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          Trainers
        </a>

        <a
          href="#contact"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          Contact
        </a>

        <a
          href="#join"
          className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium px-7 py-3 rounded-md transition duration-300 shadow-lg shadow-yellow-500/20"
        >
          Join Now
        </a>
      </div>

      {/* Mobile Button */}
      <button className="md:hidden text-white text-2xl">
        ☰
      </button>

    </nav>

  )
}

export default Navbar
