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
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-darker to-dark overflow-hidden">
      {/* Animated Background Orbital Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbital Line 1 - Large Outer Ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px]"
        >
          <div className="absolute inset-0 border-2 border-primary/10 rounded-full"></div>
          <motion.div
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"
          />
        </motion.div>

        {/* Orbital Line 2 - Medium Ring (Tilted) */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px]"
          style={{
            transform: "translate(-50%, -50%) rotateX(60deg)",
          }}
        >
          <div className="absolute inset-0 border-2 border-secondary/15 rounded-full"></div>
          <motion.div
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-secondary rounded-full shadow-lg shadow-secondary/50"
          />
        </motion.div>

        {/* Orbital Line 3 - Inner Ring (Opposite Direction) */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
          style={{
            transform: "translate(-50%, -50%) rotateY(45deg)",
          }}
        >
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
          <motion.div
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-primary rounded-full shadow-lg shadow-primary/60"
          />
        </motion.div>

        {/* Orbital Line 4 - Elliptical Path */}
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] md:w-[700px] md:h-[450px] lg:w-[850px] lg:h-[550px]"
        >
          <div className="absolute inset-0 border-2 border-secondary/12 rounded-[50%]"></div>
          <motion.div
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full shadow-lg shadow-secondary/40"
          />
        </motion.div>

        {/* Orbital Line 5 - Small Fast Ring */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          style={{
            transform: "translate(-50%, -50%) rotateZ(30deg)",
          }}
        >
          <div className="absolute inset-0 border border-primary/25 rounded-full"></div>
          <motion.div
            animate={{
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"
          />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              top: `${20 + ((i * 10) % 60)}%`,
              left: `${15 + ((i * 12) % 70)}%`,
            }}
          />
        ))}

        {/* Glow Effects */}
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 border border-primary/30 rounded-full bg-primary/5 mb-4"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Heiven Mobile
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Smartphones for a{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Smart Life
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Devices for every need and budget with exceptional performance,
            sleek design, and innovative technology.
          </motion.p>
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
                rotateX,
                rotateY,
              }}
              animate={controls}
            >
              {/* Phone Image */}
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-primary/20">
                <img
                  src="/heiven-phone.png"
                  alt="Heiven Mobile Phone"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,217,255,0.4))",
                  }}
                />

                {/* Inner Glow */}
                <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl -z-10"></div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-secondary text-dark font-bold px-4 py-2 rounded-full shadow-lg shadow-primary/40"
              >
                New
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Long Battery Life",
              desc: "Up to 7 days standby time",
              icon: "🔋",
            },
            {
              title: "Dual SIM",
              desc: "Stay connected on two networks",
              icon: "📱",
            },
            {
              title: "Durable Design",
              desc: "Built to last in any condition",
              icon: "🛡️",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="text-center p-8 rounded-2xl bg-dark/50 border border-gray-800 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-dark font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
          >
            <span>Order Now</span>
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
