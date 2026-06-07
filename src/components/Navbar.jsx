import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImage from '../assets/Navlogo2.png';

const HERO_PATHS = ["/", "/about", "/services", "/listings", "/contact"];

const NAV_ITEMS = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICES', path: '/services' },
  { name: 'PROJECTS', path: '/listings' },
  { name: 'CONTACT', path: '/contact' },
];

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

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const SCROLLED_HEADER = 'bg-white/95 backdrop-blur-sm shadow-md';
const TRANSPARENT_HEADER = 'bg-transparent';
const FIXED_HEADER = 'px-6 py-4 fixed w-full top-0 z-50 transition-all duration-300';
const STICKY_HEADER = 'bg-white px-6 py-4 sticky top-0 z-50 shadow-md';

const OVER_HERO_COLORS = {
  logoTextColor: 'text-white',
  navBgColor: 'bg-white/20 backdrop-blur-md',
  navTextColor: 'text-white',
  activeNavColor: 'text-white font-semibold',
  mobileMenuBg: 'bg-white/20 backdrop-blur-md',
};

const DEFAULT_COLORS = {
  logoTextColor: 'text-neutral-800',
  navBgColor: 'bg-gray-100',
  navTextColor: 'text-neutral-700',
  activeNavColor: 'text-neutral-900 font-semibold',
  mobileMenuBg: 'bg-gray-100',
};

const HEADER_BY_STATE = {
  sticky: STICKY_HEADER,
  fixedTransparent: `${FIXED_HEADER} ${TRANSPARENT_HEADER}`,
  fixedScrolled: `${FIXED_HEADER} ${SCROLLED_HEADER}`,
};

const getHeaderState = (hasFullScreenHero, isScrolled) => {
  if (!hasFullScreenHero) return 'sticky';
  if (isScrolled) return 'fixedScrolled';
  return 'fixedTransparent';
};

const getNavColors = (hasFullScreenHero, isScrolled) => {
  if (hasFullScreenHero && !isScrolled) return OVER_HERO_COLORS;
  return DEFAULT_COLORS;
};

const NavbarLinks = ({ items, navTextColor, activeNavColor, linkClassName, onItemClick }) => (
  items.map((item) => (
    <NavLink
      key={item.path}
      to={item.path}
      onClick={onItemClick}
      className={({ isActive }) =>
        `${linkClassName} ${
          isActive
            ? activeNavColor
            : `${navTextColor} hover:text-[#8B7355]`
        }`
      }
    >
      {item.name}
    </NavLink>
  ))
);

const BookCallButton = ({ className, onClick }) => (
  <NavLink
    to="/contact"
    onClick={onClick}
    className={className}
  >
    Book a Call
    <ArrowIcon />
  </NavLink>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const hasFullScreenHero = HERO_PATHS.includes(location.pathname);
  const headerClasses = HEADER_BY_STATE[getHeaderState(hasFullScreenHero, isScrolled)];
  const {
    logoTextColor,
    navBgColor,
    navTextColor,
    activeNavColor,
    mobileMenuBg,
  } = getNavColors(hasFullScreenHero, isScrolled);

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

  return (
    <header className={headerClasses}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="Covenant Terrains Logo" className="h-12 w-auto" />
            <div className={`hidden sm:block ${logoTextColor}`}>
              <span className="text-lg font-bold tracking-wide">COVENANT TERRAINS</span>
              <p className="text-[10px] tracking-widest opacity-80">"BUILDING WEALTH FROM THE GROUND UP"</p>
            </div>
          </NavLink>
        </div>

        <div className={`hidden lg:flex items-center ${navBgColor} rounded-full px-2 py-2`}>
          <NavbarLinks
            items={NAV_ITEMS}
            navTextColor={navTextColor}
            activeNavColor={activeNavColor}
            linkClassName="px-6 py-2 text-sm tracking-wide transition-all duration-300 rounded-full"
          />
        </div>

        <div className="flex items-center gap-4">
          <BookCallButton
            className="hidden lg:flex items-center bg-[#8B7355] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:opacity-90 transition-all duration-300"
          />

          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className={`lg:hidden p-2 ${logoTextColor}`}
          >
            {showMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          showMenu ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`flex flex-col items-center space-y-2 rounded-2xl p-6 ${mobileMenuBg}`}>
          <NavbarLinks
            items={NAV_ITEMS}
            navTextColor={navTextColor}
            activeNavColor={activeNavColor}
            linkClassName="w-full text-center py-3 text-sm tracking-wide transition-all duration-300 rounded-full"
            onItemClick={() => setShowMenu(false)}
          />

          <BookCallButton
            onClick={() => setShowMenu(false)}
            className="flex items-center justify-center w-full bg-[#8B7355] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wide mt-4"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
