import React from 'react'

// putting the data for the trainers
const trainersData = [
  {
    id: 1,
    name: "Rahul Deshmukh",
    specialty: "Head Coach & Strength Expert",
    experience: "10+ Years Experience",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1587&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    specialty: "Certified Yoga & Pilates Instructor",
    experience: "7+ Years Experience",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1587&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Amit Verma",
    specialty: "CrossFit & HIIT Specialist",
    experience: "8+ Years Experience",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Priya Nair",
    specialty: "Nutrition & Fat Loss Coach",
    experience: "6+ Years Experience",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
  }
];

const Trainer = () => {
  return (
    <div>
        <section className="bg-[#0a0a0a] py-20 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              Meet Our Team
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
            Expert <span className="text-yellow-500">Certified Trainers</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Learn from the best in the industry
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trainersData.map((trainer) => (
            <div 
              key={trainer.id} 
              className="bg-[#111111] rounded-lg overflow-hidden flex flex-col h-full shadow-lg group border border-white/5 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="h-72 overflow-hidden relative shrink-0">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy" 
                />
                {/* Dark gradient overlay for better text readability if needed, or just style */}
                <div className="absolute inset-0 bg-linear-to-t from-[#111111] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-1 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-2 tracking-wide group-hover:text-yellow-500 transition-colors duration-300">
                  {trainer.name}
                </h3>
                
                <p className="text-yellow-500 text-sm font-semibold tracking-wide mb-3">
                  {trainer.specialty}
                </p>
                
                <p className="text-gray-400 text-sm mt-auto">
                  {trainer.experience}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
      
    </div>
  )
}

export default Trainer
