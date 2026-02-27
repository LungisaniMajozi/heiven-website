import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  FiGlobe,
  FiZap,
  FiSmartphone,
  FiUsers,
  FiTrendingUp,
  FiShield,
} from "react-icons/fi";

// Animated Counter Component - counts from 0 to target number
const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const startValue = 0;
      const endValue = end;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1,
        );

        // Easing function (ease-out cubic)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(
          startValue + (endValue - startValue) * easeOut,
        );

        if (countRef.current) {
          countRef.current.textContent = currentValue.toLocaleString();
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          if (countRef.current) {
            countRef.current.textContent = endValue.toLocaleString() + suffix;
          }
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, suffix]);

  return <span ref={countRef}>{suffix}</span>;
};

export default function About() {
  // Animation variants for scroll-triggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Key features from company profile
  const features = [
    {
      icon: <FiGlobe className="text-4xl" />,
      title: "Global Connectivity",
      description:
        "Connecting everyone, everywhere with high-quality internet and telecommunications services.",
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: "Cutting-Edge Technology",
      description:
        "Integrated solutions across telecommunications and consumer electronics domains.",
    },
    {
      icon: <FiSmartphone className="text-4xl" />,
      title: "Smart Products",
      description:
        "Equipping people with high-quality smart devices and innovative technology.",
    },
    {
      icon: <FiUsers className="text-4xl" />,
      title: "Customer-First Approach",
      description:
        "Building a more connected and digitally inclusive world for generations to come.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-darker overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
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
              About Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            WE ARE{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              HEIVEN
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Driven by a simple mission: to make high quality connectivity and
            smart products accessible, available and affordable to everyone,
            everywhere.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Column - Company Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Bridging the Digital Divide
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              We are a provider of information and communications technology
              (ICT) infrastructure, telecommunications services and smart
              devices. With integrated solutions across multiple domains within
              telecommunications and consumer electronics, we are committed to
              bridging the digital gap and connecting the world.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Our mission is to empower communities through reliable, high-speed
              internet that drives growth, innovation, and opportunity. We
              combine cutting-edge technology with a customer-first approach to
              build a more connected and digitally inclusive world for
              generations to come.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-300">
                <FiShield className="text-primary" />
                <span className="text-sm font-medium">Trusted Partner</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <FiTrendingUp className="text-primary" />
                <span className="text-sm font-medium">Industry Leader</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-dark/50 border border-gray-800 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistics Section with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl blur-xl"></div>
          <div className="relative bg-dark/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Stat 1: Communities Connected */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={1000} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  Communities Connected
                </div>
              </motion.div>

              {/* Stat 2: Network Availability (24/7 - static) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2 flex items-center justify-center gap-1">
                  <span>24</span>
                  <span className="text-primary">/</span>
                  <span>7</span>
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  Network Availability
                </div>
              </motion.div>

              {/* Stat 3: Enterprise Partners */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  Enterprise Partners
                </div>
              </motion.div>

              {/* Stat 4: Commitment to Excellence */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  Commitment to Excellence
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our Commitment
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">
              "We are committed to bridging the digital gap, connecting the
              world and equipping people with high quality smart products and
              services."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
