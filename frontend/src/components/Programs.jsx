import React from 'react'
import Animated from './Animated';


const programsData = [
    {
        id: 1,
        title: "WEIGHT TRAINING",
        description: "Build massive muscle and strength with our powerlifting and bodybuilding programs. Free weights, machines, and expert guidance included.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "CARDIO TRAINING",
        description: "Boost your endurance and burn fat with high-intensity cardio sessions. Treadmills, cycles, and group cardio classes available.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "CROSSFIT",
        description: "Challenge yourself with functional movements, Olympic lifts, and metabolic conditioning. Perfect for those who want all-around fitness.",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "PERSONAL TRAINING",
        description: "Get one-on-one attention from our certified trainers. Customized workout plans and nutrition guidance for maximum results.",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "FAT LOSS PROGRAM",
        description: "Get one-on-one attention from our certified trainers. Customized workout plans and nutrition guidance for maximum results.",
        // Changed image so you can visibly see the new card
        image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?q=80&w=1474&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "GROUP CLASSES",
        description: "Get one-on-one attention from our certified trainers. Customized workout plans and nutrition guidance for maximum results.",
        // Changed image so you can visibly see the new card
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop"
    }
];


const Programs = () => {
    return (
        <div >
            <section className="bg-[#0a0a0a] py-20 px-4 md:px-8 font-sans overflow-hidden" id='programs' >
                    <Animated delay={0.4} y={25}>
                <div className="max-w-7xl mx-auto" >
                    
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <span className="text-yellow-500 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                                Our Programs
                            </span>
                        </div>
                       
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight mb-6 leading-tight">
                            Transform Your Body With <span className="text-yellow-500">Expert Training</span>
                        </h2>
                       
                        
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                            Choose from our specialized programs designed to meet your fitness goals
                        </p>
                    </div>

                    {/* Grid Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr">
                        {programsData.map((program) => (
                            <div 
                                key={program.id} 
                                
                                className="bg-[#111111] rounded-lg overflow-hidden flex flex-col h-full shadow-lg group border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_12px_rgba(234,179,8,0.35)] hover:border-amber-300"
                            >
                                {/* Image Container */}
                                <div className="h-56 lg:h-64 overflow-hidden relative shrink-0">
                                    <img 
                                        src={program.image} 
                                        alt={program.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy" 
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                                </div>

                                {/* Content Container */}
                                
                                <div className="p-6 md:p-8 flex flex-col flex-1 hover:-translate-y-1 ">
                                    <h3 className="text-xl md:text-2xl font-bold text-white uppercase mb-4 tracking-wide group-hover:text-yellow-500 transition-colors duration-300">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {program.description}
                                    </p>
                                </div>
                               
                            </div>
                        ))}
                    </div>

                </div>
                    </Animated>
            </section>

           

        </div>
    )
}

export default Programs
