import React from 'react'
import Animated from './Animated';

const transformationsData = [
  {
    id: 1,
    name: "Arjun Patel",
    achievement: "Lost 18 kg in 5 months",
    beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Priya Sharma",
    achievement: "Gained 8 kg muscle in 4 months",
    beforeImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Vikram Singh",
    achievement: "Lost 22 kg in 6 months",
    beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
  }
];

const Transformations = () => {
  return (
    <div><section className=" bg-[#191919] py-24 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        
        <Animated delay={0.4} y={25}>
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-yellow-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              Success Stories
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
            Real <span className="text-yellow-500">Transformations</span>
          </h2>
          
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            See what our members have achieved
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformationsData.map((item) => (
            <div 
              key={item.id} 
              className="bg-[#111111] rounded-xl overflow-hidden flex flex-col h-full shadow-lg group border border-white/5 hover:border-yellow-500/50 transition-all duration-300  hover:-translate-y-2 hover:shadow-[0_0_20px_12px_rgba(234,179,8,0.35)]"
            >
              
              {/* Before & After Image Container */}
              <div className="flex h-72 relative shrink-0">
                
                {/* Before Image */}
                <div className="w-1/2 relative border-r-2 border-[#111111]">
                  <img 
                    src={item.beforeImage} 
                    alt={`${item.name} Before`} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                  {/* "Before" Label */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-bold tracking-widest text-white uppercase">
                    Before
                  </div>
                </div>

                {/* After Image */}
                <div className="w-1/2 relative">
                  <img 
                    src={item.afterImage} 
                    alt={`${item.name} After`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* "After" Label */}
                  <div className="absolute top-3 right-3 bg-yellow-500 px-3 py-1 rounded text-[10px] font-bold tracking-widest text-black uppercase shadow-lg">
                    After
                  </div>
                </div>
                
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 flex flex-col flex-1 text-center border-t border-white/5">
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-3 tracking-wide group-hover:text-yellow-500 transition-colors duration-300">
                  {item.name}
                </h3>
                
                <div className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1.5 mt-auto">
                  <p className="text-yellow-500 text-sm font-semibold tracking-wide">
                    {item.achievement}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
        </Animated>
        

      </div>
    </section>

      
    </div>
  )
}

export default Transformations
