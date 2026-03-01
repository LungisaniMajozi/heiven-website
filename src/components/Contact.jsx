import { motion } from "framer-motion";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiSend,
  FiClock,
  FiUser,
  FiAtSign,
  FiMessageSquare,
  FiSmile,
} from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-b from-darker via-dark to-darker overflow-hidden"
    >
      {/* Animated Background with Orbital Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orbital Line 1 - Large Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px]"
        >
          <div className="absolute inset-0 border-2 border-primary/10 rounded-full"></div>
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg shadow-primary/50"
          />
        </motion.div>

        {/* Orbital Line 2 - Medium Ring (Tilted) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px]"
          style={{ transform: "translate(-50%, -50%) rotateX(60deg)" }}
        >
          <div className="absolute inset-0 border-2 border-secondary/15 rounded-full"></div>
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.08, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-secondary rounded-full shadow-lg shadow-secondary/50"
          />
        </motion.div>

        {/* Orbital Line 3 - Inner Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
          style={{ transform: "translate(-50%, -50%) rotateY(45deg)" }}
        >
          <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
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
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] md:w-[700px] md:h-[450px] lg:w-[850px] lg:h-[550px]"
        >
          <div className="absolute inset-0 border-2 border-secondary/12 rounded-[50%]"></div>
          <motion.div
            animate={{ opacity: [0.2, 0.6, 0.2] }}
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
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          style={{ transform: "translate(-50%, -50%) rotateZ(30deg)" }}
        >
          <div className="absolute inset-0 border border-primary/25 rounded-full"></div>
          <motion.div
            animate={{ opacity: [0.5, 0.9, 0.5] }}
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
          animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-3xl"
        />

        {/* Original Floating Orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-pulse">
              Amazing
            </span>{" "}
            Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your connectivity? Reach out to us and let's
            build a more connected future together.
          </motion.p>
        </motion.div>

        {/* Contact Info Links - Clean Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
        >
          {[
            {
              icon: <FiMapPin className="text-xl" />,
              text: "22 Magwa Cres, Waterfall, Midrand",
              href: "https://maps.google.com/?q=22+Magwa+Cres,+Waterfall,+Midrand,+Johannesburg+2066",
            },
            {
              icon: <FiPhone className="text-xl" />,
              text: "068 172 6171",
              href: "tel:+27681726171",
            },
            {
              icon: <FiMail className="text-xl" />,
              text: "info@heiventechnologies.co.za",
              href: "mailto:info@heiventechnologies.co.za",
            },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-dark/60 backdrop-blur-sm border border-gray-800 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group shadow-lg hover:shadow-primary/20"
            >
              <motion.span
                whileHover={{ rotate: 12, scale: 1.2 }}
                className="text-primary group-hover:text-secondary transition-colors"
              >
                {item.icon}
              </motion.span>
              <span className="text-gray-300 group-hover:text-primary transition-colors text-sm md:text-base font-medium">
                {item.text}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Main Content - Form + Map Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Contact Form - REDESIGNED */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"
              />

              {/* Form Container - Glassmorphism */}
              <div className="relative bg-dark/70 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                  Send Us a Message
                </h3>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mb-6 p-4 rounded-2xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center gap-3"
                  >
                    <span>✓</span>
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="relative group">
                      <label className="block text-gray-400 text-sm mb-2 font-medium">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiUser className="text-gray-500 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-darker/80 border border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none hover:border-gray-600"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="relative group">
                      <label className="block text-gray-400 text-sm mb-2 font-medium">
                        Email Address *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <FiAtSign className="text-gray-500 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-darker/80 border border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none hover:border-gray-600"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-gray-400 text-sm mb-2 font-medium">
                      Subject *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <FiMessageSquare className="text-gray-500 group-focus-within:text-primary transition-colors" />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-darker/80 border border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none hover:border-gray-600"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-gray-400 text-sm mb-2 font-medium">
                      Message *
                    </label>
                    <div className="relative">
                      <div className="absolute top-3.5 left-0 pl-4 flex items-start pointer-events-none">
                        <FiSmile className="text-gray-500 group-focus-within:text-primary transition-colors" />
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-darker/80 border border-gray-700 text-white placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none hover:border-gray-600 resize-none"
                        placeholder="Tell us more about your project..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] text-dark font-semibold px-6 py-4 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.svg
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </motion.svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Map + Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Map */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-700/50 h-[400px] shadow-2xl">
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-3xl border-2 border-primary/20 pointer-events-none"
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.946931851234!2d28.0089!3d-25.9899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU5JzIzLjYiUyAyOMKwMDAnMzIuMCJF!5e0!3m2!1sen!2sza!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Heiven Technologies Office Location"
              />
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 left-6 z-20"
              >
                <div className="px-5 py-3.5 rounded-2xl bg-dark/90 backdrop-blur-xl border border-primary/30 shadow-lg shadow-primary/20">
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-primary text-xl"
                    >
                      <FiMapPin />
                    </motion.span>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Head Office
                      </p>
                      <p className="text-gray-400 text-xs">
                        Waterfall, Midrand
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-dark/60 backdrop-blur-sm border border-gray-800 hover:border-primary/40 transition-all duration-300 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 12, -12, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-primary text-2xl"
                >
                  <FiClock />
                </motion.div>
                <div className="text-left">
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-semibold">Mon - Fri:</span>{" "}
                    <span className="text-primary">8:00 AM - 5:00 PM</span>
                  </p>
                  <p className="text-gray-400 text-sm">
                    <span className="text-white font-medium">Sat:</span>{" "}
                    <span className="text-secondary">9:00 AM - 1:00 PM</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Call CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <p className="text-gray-400 text-base">
                Prefer to call?{" "}
                <a
                  href="tel:+27681726171"
                  className="text-primary font-semibold hover:text-secondary transition-colors duration-200 flex items-center justify-center gap-1 group"
                >
                  <FiPhone className="group-hover:scale-110 transition-transform" />
                  068 172 6171
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
