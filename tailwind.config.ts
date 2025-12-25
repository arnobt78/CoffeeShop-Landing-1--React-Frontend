/**
 * Tailwind CSS Configuration
 * 
 * Customizes Tailwind CSS for the project:
 * - Defines content paths for class purging
 * - Custom theme colors, fonts, and breakpoints
 * - Background image utilities
 * - Container settings
 */

import type { Config } from "tailwindcss";

const config: Config = {
  // Content paths: Tailwind scans these files for class names
  // Unused classes are removed during build (purge/optimization)
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Pages directory (if using Pages Router)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // All component files
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // App Router files
  ],
  theme: {
    // Container settings: Centers content and adds padding
    container: {
      center: true,      // Center the container horizontally
      padding: "15px",   // Default padding on all sides
    },
    // Custom breakpoints for responsive design
    screens: {
      sm: "640px",   // Small devices (tablets)
      md: "768px",   // Medium devices (small laptops)
      lg: "960px",   // Large devices (laptops)
      xl: "1430px",  // Extra large devices (desktops) - Custom breakpoint
    },
    // Font families mapped to CSS variables from layout.tsx
    fontFamily: {
      primary: "var(--font-cormorant_upright)", // Heading font
      secondary: "var(--font-open_sans)",       // Body font
    },
    extend: {
      // Custom color palette for the coffee shop theme
      colors: {
        primary: {
          DEFAULT: "#100e0e", // Dark brown/black - Main text color
        },
        secondary: {
          DEFAULT: "#787f8a", // Gray - Secondary text color
        },
        accent: {
          DEFAULT: "#c7a17a", // Gold/brown - Accent color for highlights
          hover: "#a08161",   // Darker gold - Hover state
        },
      },
      // Custom background images - Used with bg-{name} utility classes
      backgroundImage: {
        hero_overlay: "url('/assets/hero/hero-overlay.png')",   // Hero section overlay
        opening_hours: "url('/assets/opening-hours/bg.png')",   // Opening hours background
        footer: "url('/assets/footer/bg.png')",                 // Footer background
      },
    },
  },
  plugins: [], // Tailwind plugins (none currently used)
};
export default config;
