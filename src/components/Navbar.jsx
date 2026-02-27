import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-scroll";
import logoImage from "../assets/heiven-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMenu = () => setIsOpen(false);

  // Navigation items from Heiven profile
  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-darker/95 backdrop-blur-md shadow-lg shadow-primary/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="flex items-center cursor-pointer"
                onClick={closeMenu}
              >
                <img
                  src={logoImage}
                  alt="Heiven Technologies"
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="px-4 py-2 text-gray-300 hover:text-primary font-medium transition-colors duration-200 cursor-pointer relative group"
                    onClick={closeMenu}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-secondary text-dark font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300 cursor-pointer"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-darker z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <img
                    src={logoImage}
                    alt="Heiven Technologies"
                    className="h-10 w-auto object-contain"
                  />
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={closeMenu}
                    className="text-white p-2"
                  >
                    <FiX size={24} />
                  </motion.button>
                </div>

                {/* Mobile Nav Links */}
                <div className="flex flex-col space-y-2 flex-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="block px-4 py-3 text-lg text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg transition-colors duration-200 cursor-pointer"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-dark font-semibold px-6 py-3 rounded-full mt-4 shadow-lg"
                >
                  Get Started
                </motion.button>

                {/* Footer Info */}
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <p className="text-gray-400 text-sm">
                    Connecting Everyone Everywhere
                  </p>
                  <p className="text-gray-500 text-xs mt-2">
                    © {new Date().getFullYear()} Heiven Technologies
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
