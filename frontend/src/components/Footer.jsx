import React from 'react'

const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  // Quick Links Data
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Contact', href: '#contact' },
  ];

  // Programs Data
  const programs = [
    { name: 'Weight Training', href: '#programs' },
    { name: 'Cardio Training', href: '#programs' },
    { name: 'CrossFit', href: '#programs' },
    { name: 'Personal Training', href: '#programs' },
    { name: 'Fat Loss Program', href: '#programs' },
    { name: 'Group Classes', href: '#programs' },
  ];

  // Social Media Links (Using Emojis instead of SVG)
  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'YouTube', href: '#', icon: '▶️' },
  ];

  return (
    <div>
      <footer className="bg-[#0a0a0a] pt-20 pb-8 px-4 md:px-8 font-sans border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col">
            <div className="text-3xl font-extrabold tracking-tight mb-6">
              <span className="text-white">IRON</span>
              <span className="text-yellow-500">PULSE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's most premium fitness destination. We don't just build bodies - we forge champions with world-class equipment and expert trainers.
            </p>
            
            {/* Social Media Icons (Using Emojis) */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-[#111111] border border-white/5 flex items-center justify-center text-lg hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-yellow-500 font-bold text-lg uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div className="flex flex-col">
            <h3 className="text-yellow-500 font-bold text-lg uppercase tracking-wider mb-6">
              Our Programs
            </h3>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href}
                    className="text-gray-400 hover:text-yellow-500 hover:translate-x-1 inline-block transition-all duration-300 text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-yellow-500 font-bold text-lg uppercase tracking-wider mb-6">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4 list-none p-0 m-0">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-0.5 shrink-0 text-lg">📍</span>
                <span className="text-gray-400 text-sm leading-relaxed">
                  Iron Pulse Fitness Club<br />
                  Near Main Road, Sector 15<br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500 shrink-0 text-lg">📞</span>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500 shrink-0 text-lg">✉️</span>
                <a href="mailto:info@ironpulsegym.com" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">
                  info@ironpulsegym.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-500 shrink-0 text-lg">⏰</span>
                <span className="text-gray-400 text-sm">
                  5:00 AM - 11:00 PM (Daily)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-8"></div>
        

        {/* Bottom Copyright Bar */}
        <div className=" md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} Iron Pulse Fitness Club. All Rights Reserved.
          </p>
          
          
        </div>

      </div>
    </footer>
    </div>
  )
}

export default Footer
