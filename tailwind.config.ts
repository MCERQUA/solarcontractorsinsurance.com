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
        cream: "#FBF9F4",
        sand: "#F4EFE6",
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
          DEFAULT: "#3B6E48",
          dark: "#2C5537",
          light: "#6FA07C",
          50: "#EEF5EF",
          100: "#D6E8DA",
          200: "#AED0B7",
          300: "#6FA07C",
          400: "#4F8A5E",
          500: "#3B6E48",
          600: "#2C5537",
          700: "#1F3D28",
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
        espresso: "#1C1410",
        cocoa: "#3F3730",
        mocha: "#6B625A",
        adobe: "#E0D6CA",
        adobeDark: "#CFC2B2",
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
          "linear-gradient(180deg, #FBF9F4 0%, #FEF3EA 40%, #F4EFE6 70%, #FBF9F4 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(232,103,10,0.10) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(59,110,72,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #E8670A 0%, #F08535 100%)",
        "sage-gradient": "linear-gradient(135deg, #3B6E48 0%, #6FA07C 100%)",
        "gold-gradient": "linear-gradient(135deg, #F4C430 0%, #F9D96A 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(200,82,10,0.25), 0 4px 12px -6px rgba(28,20,16,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(200,82,10,0.30), 0 10px 30px -10px rgba(28,20,16,0.10)",
        card: "0 2px 8px -2px rgba(28,20,16,0.06), 0 1px 3px -1px rgba(28,20,16,0.04)",
        "card-hover": "0 20px 50px -15px rgba(59,110,72,0.20), 0 8px 20px -8px rgba(28,20,16,0.10)",
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
