import React from 'react'

const testimonialsData = [
    {
        id: 1,
        quote: "Iron Pulse completely changed my life! The trainers are amazing, equipment is top-notch, and the atmosphere keeps me motivated every single day. Best gym in the city!",
        name: "Ankit Sharma",
        role: "Software Engineer",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974"
    },
    {
        id: 2,
        quote: "I've tried many gyms before but Iron Pulse is on another level. The personal training sessions helped me lose 15 kg and gain so much confidence. Highly recommend!",
        name: "Neha Gupta",
        role: "Marketing Manager",
        img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070"

    },
    {
        id: 3,
        quote: "Best investment I made this year! The trainers really care about your progress and the facilities are world-class. Worth every rupee!",
        name: "Rohan Mehta",
        role: "Business Owner",
        img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070"
    }
];


const Customers = () => {
    return (
        <div>
            <section className="bg-[#0a0a0a] py-24 px-4 md:px-8 font-sans">
                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-yellow-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                                What Members Say
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
                            Member <span className="text-yellow-500">Reviews</span>
                        </h2>

                        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                            Hear from our satisfied members
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {testimonialsData.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-[#111111] rounded-xl p-8 md:p-10 flex flex-col h-full border border-white/5 hover:border-yellow-500/50 shadow-lg transition-all duration-300 hover:-translate-y-1 relative group"
                            >
                                {/* star Icon */}
                                <p className=' text-amber-300 text-2xl'>★★★★★</p>

                                {/* Review Text */}
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed italic mb-8 flex-1">
                                    "{testimonial.quote}"
                                </p>

                                {/* Divider */}
                                {/* <div className="w-12 h-1 bg-yellow-500/30 mb-6 group-hover:bg-yellow-500 transition-colors duration-300"></div> */}

                                {/* Author Info */}
                                <div className="flex items-center gap-3">
                                    {/* Image */}
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/30 shrink-0"
                                    />

                                    {/* Text Container (Name & Role) */}
                                    <div className="flex flex-col">
                                        <h4 className="text-white font-bold text-base md:text-lg uppercase tracking-wide">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-gray-500 text-sm font-medium mt-0.5">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Customers
