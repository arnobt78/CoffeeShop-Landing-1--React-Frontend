/**
 * NavList Component
 * 
 * Navigation menu list with letter-by-letter animation.
 * Features:
 * - Each link's letters animate individually
 * - Staggered animation: letters animate in sequence
 * - Slide-up effect on enter, slide-down on exit
 * - Hover effect changes text color
 */

import { motion } from "framer-motion";
import Link from "next/link";

// Navigation links - as const makes it readonly for TypeScript
const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
] as const;

/**
 * Letter Animation Variants
 * 
 * Defines animation states for individual letters:
 * - initial: Letter starts below (y: "100%") and transparent
 * - enter: Letter moves up to position (y: 0) and becomes visible
 * - exit: Letter moves back down and fades out
 * 
 * Uses custom parameter (i) for staggered delays:
 * - i[0]: Delay for enter animation (based on letter position)
 * - i[1]: Delay for exit animation (reverse order)
 */
const letterAnim = {
  initial: {
    y: "100%",    // Start position: 100% below (hidden)
    opacity: 0,   // Start invisible
  },
  enter: (i: [number, number]) => ({
    y: 0,         // End position: normal position
    opacity: 1,   // Fully visible
    transition: { 
      duration: 1, 
      ease: [0.6, 0, 0.2, 1], // Custom cubic-bezier easing
      delay: i[0] // Staggered delay based on letter index
    },
  }),
  exit: (i: [number, number]) => ({
    y: "100%",    // Move back down
    opacity: 0,   // Fade out
    transition: { 
      duration: 0.8, 
      ease: [0.6, 0, 0.2, 1],
      delay: i[1] // Reverse stagger for exit
    },
  }),
};

/**
 * getLetter Function
 * 
 * Splits a word into individual letters and wraps each in a motion.span.
 * Each letter gets staggered animation delays:
 * - Enter delay: index * 0.04 (earlier letters animate first)
 * - Exit delay: (length - index) * 0.01 (later letters exit first)
 */
const getLetter = (name: (typeof links)[number]["name"]) => {
  let letters: JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.04, (name.length - index) * 0.01]} // Custom prop for delays
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};

const NavList = () => {
  return (
    // Vertical list of navigation links
    <ul className="flex flex-col gap-8 font-primary text-4xl font-semibold text-accent items-center uppercase">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className="flex overflow-hidden hover:text-white transition-all"
          // overflow-hidden: Clips letters during animation (prevents overflow during y: "100%")
        >
          {/* Render letters with animation for each link */}
          {getLetter(link.name)}
        </Link>
      ))}
    </ul>
  );
};

export default NavList;
