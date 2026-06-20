import type { Config } from "tailwindcss";

/* ============================================================
   SOLAR CONTRACTOR INSURANCE — "Sun & Sky" palette
   clay = solar orange · sage = sky blue · gold = solar yellow
   cream = bright white · sand = pale sky
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFBFC",
        sand: "#EEF4FA",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#E8670A",
          dark: "#C4520A",
          light: "#F08535",
          50: "#FEF3EA",
          100: "#FDE2CA",
          200: "#FAC498",
          300: "#F59F5E",
          400: "#F08535",
          500: "#E8670A",
          600: "#C4520A",
          700: "#9E3F08",
          800: "#7A2E05",
          900: "#561F03",
        },
        sage: {
          DEFAULT: "#1A73B5",
          dark: "#125A90",
          light: "#4A9DD4",
          50: "#E6F0FA",
          100: "#C2D9F2",
          200: "#8AB9E4",
          300: "#4A9DD4",
          400: "#2884C5",
          500: "#1A73B5",
          600: "#125A90",
          700: "#0C456E",
        },
        gold: {
          DEFAULT: "#F4C430",
          dark: "#D4A410",
          light: "#F9D96A",
          50: "#FEFAE8",
          100: "#FCF2C2",
          200: "#F9E488",
          300: "#F6D44E",
          400: "#F4C430",
          500: "#E8B010",
          600: "#D4A410",
        },
        espresso: "#1A2030",
        cocoa: "#3A4558",
        mocha: "#6B7A90",
        adobe: "#D0DBE8",
        adobeDark: "#B8CAD9",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #FAFBFC 0%, #FEF3EA 40%, #EEF4FA 70%, #FAFBFC 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(232,103,10,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(26,115,181,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #E8670A 0%, #F08535 100%)",
        "sage-gradient": "linear-gradient(135deg, #1A73B5 0%, #4A9DD4 100%)",
        "gold-gradient": "linear-gradient(135deg, #F4C430 0%, #F9D96A 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(200,82,10,0.25), 0 4px 12px -6px rgba(26,32,48,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(200,82,10,0.30), 0 10px 30px -10px rgba(26,32,48,0.10)",
        card: "0 2px 8px -2px rgba(26,32,48,0.06), 0 1px 3px -1px rgba(26,32,48,0.04)",
        "card-hover": "0 20px 50px -15px rgba(26,115,181,0.20), 0 8px 20px -8px rgba(26,32,48,0.10)",
        arch: "inset 0 -8px 30px -10px rgba(232,103,10,0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
