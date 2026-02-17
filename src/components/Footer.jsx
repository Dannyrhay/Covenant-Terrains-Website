import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import companyLogo from '../assets/Navlogo2.png';

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-300 hover:text-[#C9A962] transition-colors duration-300"
  >
    {children}
  </Link>
);

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <footer className="relative bg-[#0a1628] text-gray-300 overflow-hidden">
        {/* Diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d32] to-[#0a1628] opacity-80"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0f2847]/30 to-transparent"></div>

        <div className="relative z-10">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 md:px-8 lg:px-16 pt-16 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

              {/* Column 1: Logo & Contact Info */}
              <div className="space-y-6">
                {/* Logo */}
                <Link to="/" className="block">
                  <img
                    src={companyLogo}
                    alt="Covenant Terrains Logo"
                    className="h-28 md:h-32 w-auto object-contain"
                  />
                </Link>

                {/* Company Name */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-serif text-[#C9A962]">
                    Covenant Terrains
                  </h2>
                  <p className="text-[#C9A962]/80 text-sm tracking-[0.2em] uppercase mt-1">
                    Luxury Real Estate
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 text-sm">
                  <p className="flex items-center gap-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#C9A962] flex-shrink-0" />
                    <span>Accra, Ghana</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaEnvelope className="w-4 h-4 text-[#C9A962] flex-shrink-0" />
                    <span>covenantterrains@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <FaPhone className="w-4 h-4 text-[#C9A962] flex-shrink-0" />
                    <span>(+233) 560477622</span>
                  </p>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div className="lg:pl-8">
                <h3 className="text-xl md:text-2xl font-serif text-[#C9A962] mb-6">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li><FooterLink to="/about">About Us</FooterLink></li>
                  <li><FooterLink to="/services">Services Details</FooterLink></li>
                  <li><FooterLink to="/contact">Contact</FooterLink></li>
                </ul>
              </div>

              {/* Column 3: Services */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-[#C9A962] mb-6">
                  Services
                </h3>
                <ul className="space-y-3">
                  <li><FooterLink to="/listings">Properties</FooterLink></li>
                  <li><FooterLink to="/listings">Property on sale</FooterLink></li>
                  <li><FooterLink to="/about">Team member</FooterLink></li>
                  <li><FooterLink to="/contact">Offices for Buy</FooterLink></li>
                </ul>
              </div>

              {/* Column 4: More Links & Social */}
              <div>
                <h3 className="text-xl md:text-2xl font-serif text-[#C9A962] mb-6">
                  Resources
                </h3>
                <ul className="space-y-3 mb-8">
                  <li><FooterLink to="/listings">Properties</FooterLink></li>
                  <li><FooterLink to="/listings">Property on sale</FooterLink></li>
                  <li><FooterLink to="/about">Team member</FooterLink></li>
                  <li><FooterLink to="/services">Terms of use</FooterLink></li>
                  <li><FooterLink to="/services">Offices for Rent</FooterLink></li>
                </ul>

                {/* Social Icons */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#C9A962] flex items-center justify-center text-[#C9A962] hover:bg-[#C9A962] hover:text-[#0a1628] transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#C9A962] flex items-center justify-center text-[#C9A962] hover:bg-[#C9A962] hover:text-[#0a1628] transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#C9A962] flex items-center justify-center text-[#C9A962] hover:bg-[#C9A962] hover:text-[#0a1628] transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Copyright */}
                <p className="text-sm text-gray-400 text-center md:text-left">
                  &copy; {new Date().getFullYear()} Covenant Terrains. All Rights Reserved.
                </p>

                {/* Back to Top */}
                <button
                  onClick={scrollToTop}
                  className="flex items-center gap-3 text-[#C9A962] hover:text-white transition-colors duration-300 group"
                >
                  <span className="text-sm">Back to Top</span>
                  <span className="w-10 h-10 rounded-full bg-[#C9A962] flex items-center justify-center group-hover:bg-[#d4b872] transition-colors duration-300">
                    <FaArrowUp className="w-4 h-4 text-[#0a1628]" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top Button (shows when scrolled) */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#C9A962] text-[#0a1628] flex items-center justify-center shadow-lg hover:bg-[#d4b872] transition-all duration-300 z-50 md:hidden"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Footer;
