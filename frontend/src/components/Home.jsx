import React from 'react'
import Animated from './Animated'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
       <div id="home" className="relative min-h-screen overflow-hidden">

      {/* Background Image in header section*/}
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070"
        alt="Gym"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/90"></div>

      

      {/* Hero Content */}
      <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center text-center px-6">
     
        <div className="max-w-4xl">

        <Animated y={25} delay={0.3}>

      
          {/* Small Heading */}
          <p className="text-yellow-400 tracking-[0.35em] text-sm md:text-base font-medium mb-7">
            PREMIUM FITNESS CLUB
          </p>
          </Animated>

          {/* Main Heading */}
          <Animated>

          <h1 className="uppercase font-black leading-[0.95]">

            <span className="block text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Iron Pulse
            </span>

            <span className="block text-yellow-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
              Fitness Club
            </span>

          </h1>
          </Animated>

          {/* Description */}
          <Animated delay={0.2}>

          <p className="text-gray-300 text-lg md:text-xl mt-8">
            Train Hard. Stay Strong. Nepal Fit.
          </p>
          </Animated>

          {/* Button */}
          <Animated y={25} delay={0.3}>


        {/* Link tag is use to naviagate the pages */}
          <Link
                  to="/join-us-page"
                  className="inline-block mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-bold tracking-widest px-10 py-5 rounded-md transition duration-300 shadow-xl shadow-yellow-500/20"
                  
                > JOIN NOW
                </Link>
          </Animated>

        </div>
        

      </div>

    </div>
    </div>
  )
}

export default Home
