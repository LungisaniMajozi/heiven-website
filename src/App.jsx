import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners"; // Add this import

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-primary text-2xl font-bold"
        >
          HEIVEN
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-dark text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      {/* Placeholder for Services - we'll build this next */}
      <div
        id="services"
        className="min-h-screen flex items-center justify-center bg-darker"
      >
        <h2 className="text-3xl font-bold text-gray-400">
          Services Section - Coming Soon
        </h2>
      </div>
      <Partners /> {/* Add this line */}
      <div
        id="contact"
        className="min-h-screen flex items-center justify-center bg-dark"
      >
        <h2 className="text-3xl font-bold text-gray-400">
          Contact Section - Coming Soon
        </h2>
      </div>
      <footer className="py-6 text-center text-gray-400 text-sm border-t border-gray-800">
        <p>
          &copy; {new Date().getFullYear()} Heiven Technologies. Connecting
          Everyone Everywhere.
        </p>
      </footer>
    </div>
  );
}

export default App;
