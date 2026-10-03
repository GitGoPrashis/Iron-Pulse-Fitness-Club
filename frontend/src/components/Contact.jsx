import React from 'react'

const contactData = [
  {
    id: 1,
    icon: "📍",
    title: "LOCATION",
    details: [
      "Iron Pulse Fitness Club",
      "Near Main Road, Sector 15",
      "Mumbai, Maharashtra 400001"
    ]
  },
  {
    id: 2,
    icon: "📞",
    title: "PHONE",
    details: [
      "+91 98765 43210",
      "+91 98765 43211"
    ]
  },
  {
    id: 3,
    icon: "⏰",
    title: "GYM TIMINGS",
    details: [
      "Monday - Sunday",
      "5:00 AM - 11:00 PM",
      "Open all 7 days"
    ]
  },
  {
     id: 4,
    icon: "✉️",
    title: "Email",
    details: [
      "info@ironpulsegym.com",
      "support@ironpulsegym.com"
    ]
  }
];

const Contact = () => {
  return (
    <div>
        <section id="contact" className="bg-[#0a0a0a] py-24 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              GET IN TOUCH
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
            VISIT US <span className="text-yellow-500">TODAY</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Come experience India's most premium fitness club
          </p>
        </div>

        {/* Main Content Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          
          {/* Left Side: Contact Cards */}
          <div className="flex flex-col gap-5">
            {contactData.map((info) => (
              <div 
                key={info.id} 
                className="bg-[#151515] rounded-lg p-6 md:p-8 flex items-start gap-5 border border-white/5 hover:border-yellow-500/30 transition-colors duration-300"
              >
                {/* Icon */}
                <div className="text-2xl md:text-3xl shrink-0 mt-0.5">
                  {info.icon}
                </div>

                {/* Text Details */}
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-lg md:text-xl uppercase tracking-wider mb-3">
                    {info.title}
                  </h3>
                  
                  <div className="flex flex-col gap-1">
                    {info.details.map((line, index) => (
                      <p key={index} className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Large Image */}
          <div className="w-full h-100 lg:h-full min-h-125 rounded-lg overflow-hidden border border-white/5 relative group">
            <img 
              // Replaced the image with a suitable gym/fitness image from Unsplash
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071" 
              alt="Iron Pulse Fitness Club" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Optional dark overlay to blend better with the theme */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

        </div>

      </div>
    </section>
    </div>
  )
}

export default Contact
