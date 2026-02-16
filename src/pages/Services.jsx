import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

// Arrow icon for "Learn More" links
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

// Service data with images
const servicesList = [
  {
    number: "01",
    title: "Property Valuation",
    description: "Get accurate and comprehensive insights into your property's value and the current market trends. Our expert valuators use industry-leading methodologies to provide precise assessments that help you make informed decisions about buying, selling, or investing.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Investment Advisory",
    description: "We identify lucrative opportunities and provide comprehensive support for your real estate investments. Our team analyzes market trends, evaluates potential returns, and guides you through every step of the investment process to maximize your portfolio growth.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Relocation Services",
    description: "Our relocation services provide seamless support, helping you find your new home and settle into your community. From property search to moving logistics, we handle every detail to ensure a smooth transition to your new location.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Land Banking",
    description: "Get premium land services anywhere in Ghana for the right price with no issues. We help you acquire strategic land parcels for future development, ensuring proper documentation, legal compliance, and optimal investment potential.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2232&auto=format&fit=crop"
  }
];

const Services = () => {
  return (
    <div className="bg-[#F5F5F0]">
      <SEO
        title="Services"
        description="Explore our comprehensive real estate services including brokerage, valuation, property management, and investment advisory."
        path="/services"
      />

      {/* Hero Section - Our Services */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="Modern office architecture"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic text-white tracking-wide">
            Our Services
          </h1>
        </div>
      </section>

      {/* Subtitle Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <p className="text-xl md:text-2xl text-[#8B7355]">
            Comprehensive Architectural and Real Estate Solutions
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <hr className="border-gray-300" />
      </div>

      {/* Services Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* Row 1 - Two services side by side on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-b border-gray-200">
            {/* Service 1 */}
            <div className="border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={servicesList[0].image}
                  alt={servicesList[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <span className="text-6xl lg:text-7xl font-light text-gray-300 leading-none">
                  {servicesList[0].number}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-2 mb-3">
                  {servicesList[0].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {servicesList[0].description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#8B7355] font-semibold text-sm hover:text-[#6d5a43] transition-colors group"
                >
                  Learn More
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={servicesList[1].image}
                  alt={servicesList[1].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <span className="text-6xl lg:text-7xl font-light text-gray-300 leading-none">
                  {servicesList[1].number}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-2 mb-3">
                  {servicesList[1].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {servicesList[1].description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#8B7355] font-semibold text-sm hover:text-[#6d5a43] transition-colors group"
                >
                  Learn More
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2 - Two services side by side on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Service 3 */}
            <div className="border-b lg:border-b-0 lg:border-r border-gray-200">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={servicesList[2].image}
                  alt={servicesList[2].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <span className="text-6xl lg:text-7xl font-light text-gray-300 leading-none">
                  {servicesList[2].number}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-2 mb-3">
                  {servicesList[2].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {servicesList[2].description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#8B7355] font-semibold text-sm hover:text-[#6d5a43] transition-colors group"
                >
                  Learn More
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={servicesList[3].image}
                  alt={servicesList[3].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8">
                <span className="text-6xl lg:text-7xl font-light text-gray-300 leading-none">
                  {servicesList[3].number}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mt-2 mb-3">
                  {servicesList[3].title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {servicesList[3].description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#8B7355] font-semibold text-sm hover:text-[#6d5a43] transition-colors group"
                >
                  Learn More
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Divider */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pb-16">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
};

export default Services;
