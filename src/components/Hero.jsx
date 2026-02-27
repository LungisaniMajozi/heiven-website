import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FiArrowDown, FiMessageCircle } from "react-icons/fi";
import towerImage from "../assets/tower-bg.jpg"; // Add this import

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url(${towerImage})`,
        }}
      ></div>

      {/* Gradient Overlay - Makes text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/80 to-dark/90"></div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Left Glow */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl"></div>

        {/* Top Right Glow */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/15 rounded-full blur-3xl"></div>

        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl"></div>

        {/* Bottom Glow */}
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0,217,255,0.1) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(0,217,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="px-6 py-2 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
            <span className="text-primary text-sm md:text-base font-medium">
              Bridging the Digital Divide
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Connecting </span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Everyone
          </span>
          <br />
          <span className="text-white">Everywhere</span>
        </motion.h1>

        {/* Subheading / Mission Statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-200 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed"
        >
          High quality connectivity and smart products — accessible, available
          and affordable to everyone, everywhere.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Explore Services Button */}
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            className="group"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary text-dark font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Our Services
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              ></motion.span>
            </motion.button>
          </Link>

          {/* Contact Us Button */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="group"
          >
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#00D9FF" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto border border-gray-600 hover:border-primary text-white font-semibold px-8 py-4 rounded-full bg-transparent hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FiMessageCircle size={18} />
              Contact Us
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400"
          >
            <FiArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
