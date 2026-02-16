import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImage from '../assets/Navlogo2.png';

// --- Icon Components ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Arrow Icon for Book a Call button
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const heroPaths = ["/", "/about", "/services", "/listings", "/contact"];
  const hasFullScreenHero = heroPaths.includes(location.pathname);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    if (hasFullScreenHero) {
      window.addEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(false);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasFullScreenHero]);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'PROJECTS', path: '/listings' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const headerClasses = hasFullScreenHero
    ? `px-6 py-4 fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`
    : 'bg-white px-6 py-4 sticky top-0 z-50 shadow-md';

  // Colors based on scroll state
  const logoTextColor = hasFullScreenHero && !isScrolled ? 'text-white' : 'text-neutral-800';
  const navBgColor = hasFullScreenHero && !isScrolled ? 'bg-white/20 backdrop-blur-md' : 'bg-gray-100';
  const navTextColor = hasFullScreenHero && !isScrolled ? 'text-white' : 'text-neutral-700';
  const activeNavColor = hasFullScreenHero && !isScrolled ? 'text-white font-semibold' : 'text-neutral-900 font-semibold';
  const bookCallBg = 'bg-[#8B7355]';

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Column: Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="Covenant Terrains Logo" className="h-12 w-auto" />
            <div className={`hidden sm:block ${logoTextColor}`}>
              <span className="text-lg font-bold tracking-wide">COVENANT TERRAINS</span>
              <p className="text-[10px] tracking-widest opacity-80">"BUILDING WEALTH FROM THE GROUND UP"</p>
            </div>
          </NavLink>
        </div>

        {/* Center Column: Nav Links in Pill Container (Desktop) */}
        <div className={`hidden lg:flex items-center ${navBgColor} rounded-full px-2 py-2`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-6 py-2 text-sm tracking-wide transition-all duration-300 rounded-full ${
                  isActive
                    ? `${activeNavColor}`
                    : `${navTextColor} hover:text-[#8B7355]`
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Right Column: Book a Call Button (Desktop) + Hamburger (Mobile) */}
        <div className="flex items-center gap-4">
          {/* Book a Call Button - Desktop */}
          <NavLink
            to="/contact"
            className={`hidden lg:flex items-center ${bookCallBg} text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300`}
          >
            Book a Call
            <ArrowIcon />
          </NavLink>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 ${logoTextColor}`}
          >
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          showMenu ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`flex flex-col items-center space-y-2 rounded-2xl p-6 ${
          hasFullScreenHero && !isScrolled ? 'bg-white/20 backdrop-blur-md' : 'bg-gray-100'
        }`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setShowMenu(false)}
              className={({ isActive }) =>
                `w-full text-center py-3 text-sm tracking-wide transition-all duration-300 rounded-full ${
                  isActive
                    ? `${activeNavColor}`
                    : `${navTextColor} hover:text-[#8B7355]`
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Book a Call Button - Mobile */}
          <NavLink
            to="/contact"
            onClick={() => setShowMenu(false)}
            className={`flex items-center justify-center w-full ${bookCallBg} text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide mt-4`}
          >
            Book a Call
            <ArrowIcon />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
