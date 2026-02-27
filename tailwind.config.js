/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00D9FF", // Bright cyan from your design
        secondary: "#00B8D9", // Slightly darker cyan
        dark: "#0A0F1C", // Main dark background
        darker: "#050810", // Darker sections
        card: "#111827", // Card backgrounds
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, rgba(10,15,28,0.8) 0%, rgba(10,15,28,0.95) 100%)",
        glow: "radial-gradient(circle, rgba(0,217,255,0.15) 0%, transparent 70%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,217,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,217,255,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
