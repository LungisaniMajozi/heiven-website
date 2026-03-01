import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function ProductShowcase() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  // Mouse position tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 3D rotation based on mouse position
  const rotateX = useTransform(y, [-300, 300], [30, -30]);
  const rotateY = useTransform(x, [-300, 300], [-30, 30]);

  // Auto-rotation when not hovered
  useEffect(() => {
    if (!isHovered) {
      controls.start({
        rotateY: 360,
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <section className="py-20 bg-darker overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Heiven <span className="text-primary">Mobile</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Smartphones for a Smart Life — devices for every need and budget
          </p>
        </div>

        {/* 3D Phone Container */}
        <div className="flex justify-center items-center py-12">
          <motion.div
            className="relative w-64 md:w-80 lg:w-96 cursor-pointer"
            style={{
              perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            {/* 3D Phone */}
            <motion.div
              className="relative w-full"
              style={{
                transformStyle: "preserve-3d",
              }}
              animate={controls}
              style={{
                rotateX,
                rotateY,
              }}
            >
              {/* Phone Image */}
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/heiven-phone.png"
                  alt="Heiven Mobile Phone"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,217,255,0.3))",
                  }}
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl -z-10"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-secondary text-dark font-bold px-4 py-2 rounded-full shadow-lg"
              >
                New
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { title: "Long Battery Life", desc: "Up to 7 days standby" },
            { title: "Dual SIM", desc: "Stay connected on two networks" },
            { title: "Durable Design", desc: "Built to last" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 rounded-2xl bg-dark/50 border border-gray-800"
            >
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
