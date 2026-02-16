import { useState } from 'react';
import SEO from '../components/SEO';

// Project data with categories
const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    title: 'Sunlit Estates',
    location: 'Accra',
    category: 'residential',
    size: 'large'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    title: 'Aurora Tower',
    location: 'Tema',
    category: 'commercial',
    size: 'medium'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    title: 'White Oak Homes',
    location: 'Kumasi',
    category: 'residential',
    size: 'small'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    title: 'The Loft Boutique',
    location: 'Accra',
    category: 'interiors',
    size: 'small'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop',
    title: 'Graphite Homes',
    location: 'East Legon',
    category: 'residential',
    size: 'large'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    title: 'Apex Retail Plaza',
    location: 'Accra Central',
    category: 'commercial',
    size: 'medium'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    title: 'Premium Lands',
    location: 'Tema',
    category: 'under-construction',
    size: 'medium'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2032&auto=format&fit=crop',
    title: 'Culture Hub',
    location: 'Kumasi',
    category: 'interiors',
    size: 'small'
  },
];

// Filter categories
const categories = [
  { id: 'all', label: 'View All' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'under-construction', label: 'Under Construction' },
  { id: 'interiors', label: 'Interiors' },
];

// Project Card Component
const ProjectCard = ({ project, className = '' }) => {
  return (
    <div className={`group relative overflow-hidden rounded-lg cursor-pointer ${className}`}>
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wide mb-1">
          {project.title}
        </h3>
        <p className="text-white/80 text-xs md:text-sm uppercase tracking-wider">
          {project.category === 'under-construction' ? 'Under Construction' : project.category}
        </p>
      </div>
    </div>
  );
};

const Listings = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter projects based on active category
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-[#F5F5F0]">
      <SEO
        title="Projects"
        description="Browse our exclusive listings of luxury homes, apartments, and prime land in Accra's most sought-after neighborhoods."
        path="/listings"
      />

      {/* Hero Section - Projects */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Construction site with engineers"
            className="w-full h-full object-cover"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        {/* Hero Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic text-white tracking-wide">
            Projects & Properties
          </h1>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 md:py-12 border-b border-gray-300">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-wrap gap-2 md:gap-6 justify-center md:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 text-xs md:text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'text-[#8B7355] border-b-2 border-[#8B7355]'
                    : 'text-gray-600 hover:text-[#8B7355]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - Bento Style */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Row 1 */}
              {filteredProjects[0] && (
                <ProjectCard
                  project={filteredProjects[0]}
                  className="h-[300px] md:h-[400px] lg:h-[450px] md:col-span-1 lg:row-span-2"
                />
              )}
              {filteredProjects[1] && (
                <ProjectCard
                  project={filteredProjects[1]}
                  className="h-[300px] md:h-[250px] lg:h-[215px]"
                />
              )}
              {filteredProjects[2] && (
                <ProjectCard
                  project={filteredProjects[2]}
                  className="h-[300px] md:h-[250px] lg:h-[215px]"
                />
              )}
              {filteredProjects[3] && (
                <ProjectCard
                  project={filteredProjects[3]}
                  className="h-[300px] md:h-[250px] lg:h-[215px]"
                />
              )}

              {/* Row 2 */}
              {filteredProjects[4] && (
                <ProjectCard
                  project={filteredProjects[4]}
                  className="h-[300px] md:h-[400px] lg:h-[450px] md:col-span-1 lg:row-span-2"
                />
              )}
              {filteredProjects[5] && (
                <ProjectCard
                  project={filteredProjects[5]}
                  className="h-[300px] md:h-[250px] lg:h-[215px]"
                />
              )}
              {filteredProjects[6] && (
                <ProjectCard
                  project={filteredProjects[6]}
                  className="h-[300px] md:h-[250px] lg:h-[215px]"
                />
              )}
              {filteredProjects[7] && (
                <ProjectCard
                  project={filteredProjects[7]}
                  className="h-[300px] md:h-[250px] lg:h-[215px]"
                />
              )}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Divider */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 pb-16">
        <hr className="border-gray-300" />
      </div>
    </div>
  );
};

export default Listings;
