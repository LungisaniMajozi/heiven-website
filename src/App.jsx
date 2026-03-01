import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import ProductShowcase from "./components/ProductShowcase";
import Partners from "./components/Partners";
import Contact from "./components/Contact";

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
      <Services />

      {/* ✅ Add id="products" for navbar link */}
      <div id="products">
        <ProductShowcase />
      </div>

      <Partners />
      <Contact />

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
