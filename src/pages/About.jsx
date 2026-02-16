import SEO from '../components/SEO';

// Import team member images
import teamMember1 from '../assets/images/CEO2.jpeg';
import teamMember2 from '../assets/images/e1.jpg';
import teamMember3 from '../assets/images/projectMan.jpeg';

// Import hero background
import AboutImage1 from '../assets/images/About1.jpg';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Kevin David Asante",
      title: "Founder & CEO",
      image: teamMember1,
    },
    {
      name: "Kelly Bubune",
      title: "Secretary",
      image: teamMember2,
    },
    {
      name: "Ursula Knoings",
      title: "Project Manager",
      image: teamMember3,
    },
  ];

  return (
    <div className="bg-[#F5F5F0]">
      <SEO
        title="About"
        description="Learn about Covenant Terrains — our mission, values, and the team driving Ghana's premium real estate market forward."
        path="/about"
      />

      {/* Hero Section - Our Legacy */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={AboutImage1}
            alt="Modern architecture"
            className="w-full h-full object-cover"
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Legacy Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic text-white tracking-wide">
            Our Legacy
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left Column - Mission & History */}
            <div className="space-y-12">
              {/* Our Mission */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide uppercase mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Covenant Terrains is dedicated to shaping enduring environments. We blend architectural integrity with a deep respect for the natural landscape, creating spaces that foster community and elevate the human experience. Our commitment is to deliver exceptional real estate solutions that build lasting wealth for our clients.
                </p>
              </div>

              {/* Our History */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide uppercase mb-6">
                  Our History
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2014, our journey began with a single vision: to craft properties that stand the test of time. Over the years, we have established a portfolio of award-winning residential and commercial developments, driven by a commitment to quality, sustainability, and thoughtful design. Today, we continue to lead Ghana's real estate market with innovation and integrity.
                </p>
              </div>

              {/* Our Values */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide uppercase mb-6">
                  Our Values
                </h2>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-[#8B7355] font-bold mr-3">01.</span>
                    <div>
                      <span className="font-semibold text-gray-800">Honesty & Transparency</span>
                      <span className="mx-2">—</span>
                      We operate with open communication and unwavering ethical standards.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B7355] font-bold mr-3">02.</span>
                    <div>
                      <span className="font-semibold text-gray-800">Commitment to Quality</span>
                      <span className="mx-2">—</span>
                      We don't just meet standards; we set them.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B7355] font-bold mr-3">03.</span>
                    <div>
                      <span className="font-semibold text-gray-800">Dedicated Partnership</span>
                      <span className="mx-2">—</span>
                      More than a transaction, it's a true partnership.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Meet the Team */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide uppercase mb-8">
                Meet The Team
              </h2>

              {/* Team Members Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    {/* Circular Image */}
                    <div className="relative w-full aspect-square mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://placehold.co/300x300/cccccc/ffffff?text=${member.name.split(' ')[0]}`;
                        }}
                      />
                    </div>
                    {/* Name & Title */}
                    <h3 className="text-xs md:text-sm font-bold text-gray-900 uppercase leading-tight">
                      {member.name} –
                    </h3>
                    <p className="text-xs md:text-sm text-[#8B7355] uppercase tracking-wide">
                      {member.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="mt-16 pt-12 border-t border-gray-300">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <span className="text-4xl md:text-5xl font-bold text-[#8B7355]">10K+</span>
                    <p className="text-[#8B7355]/70 mt-2 text-sm">Global Clients</p>
                  </div>
                  <div>
                    <span className="text-4xl md:text-5xl font-bold text-[#8B7355]">610+</span>
                    <p className="text-[#8B7355]/70 mt-2 text-sm">Projects Completed</p>
                  </div>
                  <div>
                    <span className="text-4xl md:text-5xl font-bold text-[#8B7355]">$16M</span>
                    <p className="text-[#8B7355]/70 mt-2 text-sm">Portfolio Value</p>
                  </div>
                  <div>
                    <span className="text-4xl md:text-5xl font-bold text-[#8B7355]">10+</span>
                    <p className="text-[#8B7355]/70 mt-2 text-sm">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Divider Line */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
};

export default About;
