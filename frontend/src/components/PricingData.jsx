import React from 'react'

const pricingData = [
  {
    id: 1,
    tier: "BASIC",
    price: "1,499",
    duration: "Per Month",
    features: [
      "Access to gym equipment",
      "Locker facility",
      "Basic fitness assessment",
      "Group classes access"
    ],
    isPopular: false
  },
  {
    id: 2,
    tier: "STANDARD",
    price: "3,999",
    duration: "For 3 Months",
    features: [
      "All Basic features",
      "2 Personal training sessions",
      "Diet consultation",
      "Steam & sauna access",
      "Guest pass (2 per month)"
    ],
    isPopular: false
  },
  {
    id: 3,
    tier: "PRO",
    price: "6,999",
    duration: "For 6 Months",
    features: [
      "All Standard features",
      "4 Personal training sessions",
      "Customized workout plan",
      "Nutrition & supplement guidance",
      "Priority equipment access",
      "Free gym merchandise"
    ],
    isPopular: true // This flag adds the border and ribbon
  },
  {
    id: 4,
    tier: "ELITE",
    price: "11,999",
    duration: "For 1 Year",
    features: [
      "All Pro features",
      "Unlimited personal training",
      "Monthly body composition analysis",
      "Exclusive member events",
      "24/7 gym access",
      "Free guest passes (unlimited)",
      "Spa & massage services"
    ],
    isPopular: false
  }
];

const CheckIcon = () => (
  <svg 
    className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const PricingData = () => {
  return (
    <>
    <section className="bg-[#191919] py-24 px-2 md:px-8 font-sans" id='pricing'>
      <div className="max-w-360 mx-auto">
       
        
        {/* Header Section */}
         
        <div className="text-center mb-16">
          <p className=' text-yellow-500 uppercase mb-2.5 tracking-widest' >Membership Plans</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
            Choose Your <span className="text-yellow-500">Perfect Plan</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Flexible membership options to suit your budget and goals
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {pricingData.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative flex flex-col bg-[#201d1dc5] rounded-xl overflow-hidden transition-transform duration-300 hover:border-yellow-500 hover:-translate-y-2  hover:shadow-[0_0_20px_12px_rgba(234,179,8,0.35)]  ) ]
                
                ${plan.isPopular ? 'border-2 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.15)] z-10' : 'border border-white/5'}
              `}
            >
              
              {/* "Popular" Ribbon (Only for PRO plan) bg-[#151515] */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                  <div className="absolute top-5.5 right-8 w-35 bg-yellow-500 text-black text-[11px] font-black uppercase tracking-widest text-center rotate-45 py-1.5 shadow-sm">
                    Popular
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-1 ">
                
                {/* Tier & Price */}
                <div className="text-center mb-8 mt-2">
                  <h3 className="text-yellow-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">
                    {plan.tier}
                  </h3>
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 flex justify-center items-center">
                    <span className="text-3xl md:text-4xl mr-1">₹</span>
                    {plan.price}
                  </div>
                  <p className="text-gray-500 text-sm">{plan.duration}</p>
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-6 mb-5 flex-1">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-500 text-lg leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button 
                  className={`w-full py-4 px-4 rounded font-bold text-sm tracking-wider uppercase transition-colors duration-300 mb-30
                    ${plan.isPopular 
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400 ' 
                      : 'bg-transparent text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500 hover:text-black'
                    }
                  `}
                >
                  Get Started
                </button>

              </div>
            </div>
          ))}
        </div>
        

        
      </div>
    </section>
      
    </>
    




  )
}

export default PricingData
