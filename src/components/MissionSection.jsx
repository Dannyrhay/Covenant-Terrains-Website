import { NavLink } from 'react-router-dom';

// --- SVG Icons for the stats section ---

const ClientIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-[#8B7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-[#8B7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const GrowthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-[#8B7355]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);


const MissionSection = () => {
  const stats = [
    {
      icon: <ClientIcon />,
      number: "10K",
      title: "Client",
      description: "A global clientele relationship.",
    },
    {
      icon: <ProjectsIcon />,
      number: "610",
      title: "Projects",
      description: "A global clientele smamist of Projects.",
    },
    {
      icon: <GrowthIcon />,
      number: "$16M PE",
      title: "PE",
      description: "Ghanral growths development and growth.",
    },
  ];

  return (
    <section className="bg-[#F5F5F0] py-16 sm:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Section: Mission Statement with Overlapping Card */}
        <div className="relative mb-16 lg:mb-20">
          {/* Image Container */}
          <div className="w-full lg:w-[65%]">
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
                alt="Luxurious modern living room"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x600/cccccc/ffffff?text=Interior`; }}
              />
            </div>
          </div>

          {/* Overlapping Content Card */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[45%] mt-6 lg:mt-0">
            <div className="bg-white p-8 md:p-10 lg:p-12 border-t-4 border-[#8B7355] shadow-lg">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                OUR MISSION IS BUILDING THE FUTURE
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We are a leading global real estate company headquartered in Ghana, specializing in commercial and luxury residential properties.
              </p>
              <NavLink
                to="/about"
                className="group inline-block font-semibold text-[#8B7355] bg-transparent py-3 px-8 border-2 border-[#8B7355] uppercase tracking-wider text-sm relative overflow-hidden transition-all duration-300 ease-in-out hover:text-white hover:shadow-lg hover:-translate-y-1"
              >
                <span className="absolute inset-0 bg-[#8B7355] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative z-10">Learn More</span>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Bottom Section: Stats Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 pt-8 border-t border-gray-300">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-start gap-4 md:gap-6"
            >
              {/* Icon */}
              <div className="flex-shrink-0 mt-2">
                {stat.icon}
              </div>
              {/* Text Content */}
              <div>
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-[#8B7355] leading-none">
                  {stat.number}
                </span>
                <h3 className="text-gray-900 font-semibold mt-1 mb-2">{stat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
