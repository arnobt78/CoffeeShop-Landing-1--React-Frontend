/**
 * Header Component
 * 
 * The site header/navigation bar that appears at the top of every page.
 * Features:
 * - Logo linking to home page
 * - Hamburger menu button for mobile navigation
 * - Animated mobile menu with smooth transitions
 * - Uses Framer Motion for animation
 * - Absolute positioning to overlay content
 */

"use client"; // Required for useState and event handlers
import { useState } from "react";
import { AnimatePresence } from "framer-motion"; // For exit animations
import Image from "next/image"; // Next.js optimized image component
import Link from "next/link"; // Next.js client-side navigation
import Nav from "./Nav/Nav";

const Header = () => {
  // State to track if mobile navigation menu is open/closed
  const [navActive, setNavActive] = useState(false);

  return (
    // Absolute positioning: header overlays content, positioned 40px from top
    // z-[60]: High z-index to ensure header stays above other content
    <header className="absolute top-[40px] left-0 right-0 z-[60]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo - Links to home page */}
          <Link
            href="/"
            className="relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-[60]"
          >
            {/* Next.js Image component with fill prop for responsive sizing */}
            <Image src="/assets/logo.svg" fill alt="" className="object-contain" />
          </Link>

          {/* Hamburger Menu Button - Animated 3-line to X transformation */}
          <button
            onClick={() => setNavActive(!navActive)} // Toggle menu state
            className="w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none"
            aria-label="Toggle navigation menu" // Accessibility
          >
            {/* Top line - rotates 45deg to form X when active */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                navActive ? "top-1/2 rotate-45" : "top-0 translate-y-0"
              }`}
            ></span>
            {/* Middle line - fades out when menu is active */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0  transition-opacity duration-300 ${
                navActive ? "opacity-0" : "top-1/2"
              }`}
            ></span>
            {/* Bottom line - rotates -45deg to form X when active */}
            <span
              className={`w-full h-[1.5px] bg-current absolute left-0 will-change-transform transition-transform duration-300 ${
                navActive ? "top-1/2 -rotate-45" : "bottom-0 translate-y-0"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Navigation Menu - Conditionally rendered with AnimatePresence for exit animations */}
      {/* mode="wait" ensures exit animation completes before enter animation */}
      <AnimatePresence mode="wait">{navActive && <Nav />}</AnimatePresence>
    </header>
  );
};

export default Header;
