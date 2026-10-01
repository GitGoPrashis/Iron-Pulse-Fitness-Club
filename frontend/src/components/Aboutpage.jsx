import React from 'react'

const features = [
  {
    icon: '🏋️',
    title: 'WORLD-CLASS EQUIPMENT',
    description: 'Latest machines & free weights',
  },
  {
    icon: '👨‍🏫',
    title: 'EXPERT TRAINERS',
    description: 'Certified & experienced coaches',
  },
  {
    icon: '⏰',
    title: 'FLEXIBLE TIMINGS',
    description: '5 AM to 11 PM daily',
  },
  {
    icon: '🎯',
    title: 'RESULTS GUARANTEED',
    description: 'Proven transformation programs',
  },
]
const Aboutpage = () => {
  return (

    < section
      id = "about"
  className = "bg-[#191919] text-white py-20 md:py-24 px-6 md:px-10 lg:px-16"
    >
    <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left Side: Gym Image */}
      <div className="w-full">
        <img
          src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975"
          alt="Iron Pulse premium fitness club"
          className="w-full h-87.5 md:h-125 lg:h-152.5 object-cover rounded-md grayscale"
        />
      </div>

      {/* Right Side: About Content */}
      <div className="w-full">

        {/* Small Heading */}
        <p className="text-yellow-400 text-sm md:text-base tracking-[0.2em] mb-7">
          WELCOME TO IRON PULSE
        </p>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[48px] font-black uppercase leading-tight mb-8">
          Nepal's Most{' '}
          <span className="text-yellow-400">Premium</span> Fitness
          Destination
        </h2>

        {/* Description */}
        <div className="space-y-6 text-gray-400 text-base md:text-lg leading-8">

          <p>
            At Iron Pulse Fitness Club, we don't just build bodies
            - we forge champions. Our state-of-the-art facility
            combines world-class equipment with the discipline
            and dedication that defines Indian fitness culture.
          </p>

          <p>
            Whether you're looking to lose weight, build muscle,
            or transform your lifestyle completely, our expert
            trainers and comprehensive programs are designed to
            push you beyond your limits and achieve results you
            never thought possible.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#232323] border-l-2 border-yellow-400 rounded-md p-5 md:p-6 flex items-center gap-5 min-h-28 hover:bg-[#292929] transition duration-300"
            >
              {/* Icon */}
              <div className="text-3xl shrink-0">
                {feature.icon}
              </div>

              {/* Feature Text */}
              <div className="min-w-0">
                <h3 className="text-white text-base md:text-lg font-bold uppercase leading-7">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm mt-1 leading-6">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
    </section >
  
  )
    
    
}

export default Aboutpage
