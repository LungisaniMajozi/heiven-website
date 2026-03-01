import { motion } from "framer-motion";
import {
  FiWifi,
  FiServer,
  FiShoppingBag,
  FiSmartphone,
  FiZap,
  FiTool,
  FiRadio,
  FiHardDrive,
  FiMonitor,
  FiBattery,
} from "react-icons/fi";

export default function Services() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  // Main Services from company profile
  const mainServices = [
    {
      icon: <FiWifi className="text-4xl md:text-5xl" />,
      title: "Heiven Fiber",
      tagline: "High-Speed Internet for Everyone",
      description:
        "We deliver faster, more affordable internet services to all homes and communities — be it a bustling city, a township, or a village. Our mission is to empower communities through reliable, high-speed internet that drives growth, innovation, and opportunity.",
      features: [
        "Fiber-to-the-Home (FTTH)",
        "Affordable connectivity plans",
        "Coverage in urban & rural areas",
        "24/7 network reliability",
      ],
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      icon: <FiServer className="text-4xl md:text-5xl" />,
      title: "Heiven TowerCo",
      tagline: "Telecommunications Infrastructure",
      description:
        "We are an independent owner, operator, and developer of shared communications infrastructure. Through strong partnerships, we provide competitive end-to-end telecommunication solutions and services to telecom carriers, enterprises, and consumers.",
      features: [
        "Base station installation & maintenance",
        "Microwave & transmission equipment",
        "Fiber optic installation (underground & aerial)",
        "Colocation & lease solutions",
        "Anti-vandalism repairs & solutions",
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: <FiShoppingBag className="text-4xl md:text-5xl" />,
      title: "Heiven Stores",
      tagline: "Retail & Service Outlets",
      description:
        "Visit our retail stores where customers can buy and experience Heiven products and products from other leading brands. We also run an online store for convenient shopping from anywhere.",
      features: [
        "Smartphones & tablets",
        "Laptops & wearables",
        "Smart home devices",
        "Accessories & tech gadgets",
        "Online shopping available",
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
  ];

  // Smart Products sub-services
  const smartProducts = [
    {
      icon: <FiSmartphone className="text-3xl md:text-4xl" />,
      title: "Heiven Mobile",
      description:
        "Smartphones for a Smart Life — devices for every need and budget with exceptional performance, sleek design, and innovative technology.",
    },
    {
      icon: <FiBattery className="text-3xl md:text-4xl" />,
      title: "Heiven Energy",
      description:
        "Renewable energy storage systems — integrated solar inverters, batteries, and controllers for domestic and commercial use.",
    },
    {
      icon: <FiRadio className="text-3xl md:text-4xl" />,
      title: "Telecom Equipment",
      description:
        "Professional ICT products and solutions — we develop and manufacture telecommunications and network equipment for enterprises and end-users.",
    },
    {
      icon: <FiMonitor className="text-3xl md:text-4xl" />,
      title: "Pixel Tech",
      description:
        "Heiven Smart Products — innovative technology solutions for modern living and working environments.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 bg-darker overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
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
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ICT Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            From fiber connectivity to smart devices, we provide end-to-end
            telecommunications and technology solutions for homes, businesses,
            and communities.
          </p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className={`group relative p-6 md:p-8 rounded-3xl bg-dark/50 border ${service.borderColor} backdrop-blur-sm hover:shadow-2xl transition-all duration-300`}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl ${service.bgColor} text-white mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p
                className={`text-xs md:text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}
              >
                {service.tagline}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 md:space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm"
                  >
                    <svg
                      className="text-primary mt-1 flex-shrink-0"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l5 5l10-10" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Smart Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl blur-xl"></div>

          <div className="relative bg-dark/80 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 md:p-10">
            {/* Section Header */}
            <div className="text-center mb-10 md:mb-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                Heiven Smart Products
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                Innovative technology products designed to enhance your digital
                lifestyle and business operations.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {smartProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-5 md:p-6 rounded-2xl bg-darker/50 border border-gray-800 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h4 className="text-white font-semibold text-base md:text-lg mb-2 md:mb-3">
                    {product.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service CTA - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-400 text-base md:text-lg">
            Ready to transform your connectivity?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
