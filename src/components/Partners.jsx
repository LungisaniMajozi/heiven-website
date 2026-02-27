import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Partners() {
  const [isPaused, setIsPaused] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const controls = useAnimation();
  const dragX = useMotionValue(0);
  const containerRef = useRef(null);

  // 12 Partners - Full Color Logos
  const partners = [
    { id: 1, name: "OpenServe", logo: "/partners/openserve.png" },
    { id: 2, name: "Vodacom", logo: "/partners/vodacom.png" },
    { id: 3, name: "Huawei", logo: "/partners/huawei.png" },
    { id: 4, name: "MTN", logo: "/partners/mtn.png" },
    { id: 5, name: "Telkom", logo: "/partners/telkom.png" },
    { id: 6, name: "PRASA", logo: "/partners/prasa.png" },
    {
      id: 7,
      name: "Broadband Infraco",
      logo: "/partners/broadband-infraco.png",
    },
    { id: 8, name: "Joburg", logo: "/partners/joburg.png" },
    { id: 9, name: "Tuya", logo: "/partners/tuya.png" },
    { id: 10, name: "SEACOM", logo: "/partners/seacom.png" },
    { id: 11, name: "Eskom", logo: "/partners/eskom.png" },
    { id: 12, name: "Cell C", logo: "/partners/cellc.png" },
  ];

  // Settings
  const logosPerPage = 4;
  const totalPages = Math.ceil(partners.length / logosPerPage);

  // Get current page's partners
  const getCurrentPagePartners = () => {
    const start = currentPage * logosPerPage;
    const end = start + logosPerPage;
    return partners.slice(start, end);
  };

  // Auto-rotate pages every 2 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  // Animate page transition
  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.4,
      },
    });
  }, [currentPage, controls]);

  // Handle drag end for manual navigation
  const handleDragEnd = () => {
    const currentX = dragX.get();

    if (currentX < -100) {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    } else if (currentX > 100) {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    }
    dragX.set(0);
  };

  return (
    <section
      id="partners"
      className="relative py-20 md:py-32 bg-dark overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 border border-primary/30 rounded-full bg-primary/5 mb-4">
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Our Partners
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted By{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            We collaborate with forward-thinking organizations to deliver
            innovative solutions that bridge the digital divide and empower
            communities worldwide.
          </p>
        </motion.div>

        {/* Carousel Container - 4 logos per row */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

          {/* Draggable Page Track */}
          <motion.div
            ref={containerRef}
            className="flex"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{ x: dragX }}
          >
            {/* Current Page Grid - 4 columns */}
            <div className="w-full flex-shrink-0 px-4">
              <div className="grid grid-cols-4 gap-6 md:gap-8">
                {getCurrentPagePartners().map((partner) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 40px rgba(0, 217, 255, 0.6)",
                    }}
                    className="group relative aspect-square rounded-2xl bg-darker/50 border-2 border-gray-700 hover:border-primary transition-all duration-300 cursor-grab active:cursor-grabbing flex items-center justify-center p-3 md:p-4"
                  >
                    {/* Logo Image - REDUCED BY 13% */}
                    <div className="w-full h-full rounded-xl overflow-hidden bg-white/5 flex items-center justify-center">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-full object-contain p-3 md:p-4 transition-all duration-300"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback Text */}
                      <span className="hidden text-gray-400 group-hover:text-primary transition-colors duration-300 font-semibold text-xs md:text-sm text-center items-center justify-center">
                        {partner.name}
                      </span>
                    </div>

                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-3 mt-10"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(index);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 3000);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? "bg-primary w-8"
                  : "bg-gray-600 hover:bg-gray-500 w-3"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Status Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-6"
        >
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>
            Auto-rotating every 2s • Hover or drag to pause
          </p>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
            <div className="px-8 py-4 rounded-full bg-dark/80 backdrop-blur-sm border border-gray-800">
              <p className="text-gray-300 text-lg">
                Interested in partnering with us?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-3 text-primary font-semibold hover:text-secondary transition-colors duration-200"
              >
                Let's Connect
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
