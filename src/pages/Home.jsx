import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection";
import ConsultingCta from "../components/ConsultingCta";
import MapSection from "../components/MapSection";
import SEO from "../components/SEO";
import { Parallax } from "react-scroll-parallax";
import { NavLink } from "react-router-dom";

// Import local assets for Available Properties section
import whiteOakImage from '../assets/images/white-oak-homes.jpg';
import graphiteImage from '../assets/images/graphite-homes.jpg';
import landsImage from '../assets/images/premiumlands.jpg';

// Local hero images (will be replaced with Cloudinary URLs)
import heroImage2 from '../assets/images/Hero2.jpg';

// Hero slides configuration
// To use Cloudinary: replace the 'src' values with your Cloudinary URLs
// Format: https://res.cloudinary.com/dmofiy1up/image/upload/q_auto,f_auto/YOUR_IMAGE_ID
const heroSlides = [
  {
    type: 'video',
    src: 'https://res.cloudinary.com/dmofiy1up/video/upload/v1771243915/Site_1A_1_jedenn.mp4',
    alt: 'Hero video'
  },
  {
    type: 'image',
    src: 'https://res.cloudinary.com/dmofiy1up/image/upload/v1771246555/vecteezy_ai-generated-sunny-urban-street-with-modern-houses-and_39271346_oxgva2.jpg',
    alt: 'Luxury home exterior'
  },
  {
    type: 'image',
    src: heroImage2, // Replace with Cloudinary URL later
    alt: 'Modern property'
  },
];

const Home = () => {
  // Data for the "Available Properties" section
  const projects = [
    { id: 1, image: 'https://res.cloudinary.com/dmofiy1up/image/upload/v1771244475/vecteezy_beautiful-modern-house-exterior-with-carport-modern_26584568_axuqlz.jpg', title: 'Sunlit Estates', location: 'ACCRA' },
    { id: 2, image: whiteOakImage, title: 'White Oak Homes', location: 'TEMA' },
    { id: 3, image: graphiteImage, title: 'Graphite Homes', location: 'KUMASI' },
    { id: 4, image: landsImage, title: 'Premium Lands', location: 'ACCRA' },
  ];

  return (
    <div>
      <SEO
        title="Home"
        description="Discover premium real estate in Ghana — luxury homes, land, and investment properties. Covenant Terrains offers expert property consulting and development."
        path="/"
      />
      {/* Hero Section with Slider */}
      <Hero slides={heroSlides} />
      <Parallax speed={5}><MissionSection /></Parallax>

      {/* Latest Projects Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* Left Column - Title & Description */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <span className="text-gray-400 text-sm font-medium mb-2">[02]</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Latest Projects
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Discover some of our most recent developments, each thoughtfully curated to unlock the potential of the land and meet our clients' investment and lifestyle goals.
              </p>
              <NavLink
                to="/listings"
                className="inline-flex items-center text-[#8B7355] font-semibold text-sm hover:text-[#6d5a43] transition-colors group"
              >
                View All Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </NavLink>
            </div>

            {/* Middle Column - Featured Large Image */}
            <div className="lg:col-span-5">
              <NavLink to="/listings" className="group block h-full">
                <div className="relative h-64 lg:h-full min-h-[320px] rounded-xl overflow-hidden shadow-md">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white mb-1">{projects[0].title}</h3>
                    <p className="text-white/80 text-xs tracking-wider">{projects[0].location}</p>
                  </div>
                </div>
              </NavLink>
            </div>

            {/* Right Column - Three Smaller Cards */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Top two cards in a row on mobile/tablet, stacked on desktop */}
              <div className="lg:grid lg:grid-cols-2 lg:gap-4 contents lg:contents-none">
                {projects.slice(1, 3).map((project) => (
                  <NavLink
                    key={project.id}
                    to="/listings"
                    className="group"
                  >
                    <div className="relative h-36 lg:h-[150px] rounded-xl overflow-hidden shadow-md bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                        <h3 className="text-sm font-bold text-white">{project.title}</h3>
                        <p className="text-white/80 text-[10px] tracking-wider">{project.location}</p>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
              {/* Fourth card spans full width */}
              <NavLink
                to="/listings"
                className="group col-span-2 lg:col-span-1"
              >
                <div className="relative h-36 lg:h-[150px] rounded-xl overflow-hidden shadow-md bg-gray-100">
                  <img
                    src={projects[3].image}
                    alt={projects[3].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                    <h3 className="text-sm font-bold text-white">{projects[3].title}</h3>
                    <p className="text-white/80 text-[10px] tracking-wider">{projects[3].location}</p>
                  </div>
                </div>
              </NavLink>
            </div>

          </div>
        </div>
      </section>

      <ConsultingCta />
      <MapSection />
    </div>
  );
};

export default Home;