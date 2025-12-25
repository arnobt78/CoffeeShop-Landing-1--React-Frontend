/**
 * Nav Component
 * 
 * Animated mobile navigation menu.
 * Features:
 * - Height animation using Framer Motion
 * - Smooth expand/collapse transition
 * - Contains NavList component with animated menu items
 * - Positioned absolutely to overlay content
 */

import { motion } from "framer-motion";
import NavList from "./NavList";

/**
 * Height Animation Variants
 * 
 * Defines three animation states for the navigation menu:
 * - initial: Menu starts collapsed (height: 0)
 * - open: Menu expands to 85vh (85% of viewport height)
 * - close: Menu collapses back to height: 0
 * 
 * Uses custom cubic-bezier easing [0.75, 0, 0.23, 1] for smooth animation
 */
const heightAnimation = {
  initial: {
    height: 0,
  },
  open: {
    height: "85vh", // 85% of viewport height
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] }, // Custom cubic-bezier easing
  },
  close: {
    height: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
};

const Nav = () => {
  return (
    // Framer Motion nav element with height animation
    // -top-full: Positions nav above viewport initially
    // overflow-hidden: Clips content during height animation
    <motion.nav
      variants={heightAnimation} // Animation variants object
      initial="initial"           // Start state
      animate="open"              // Animate to open state
      exit="close"                // Exit animation (used by AnimatePresence)
      className="bg-primary overflow-hidden absolute z-[50] -top-full w-full"
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        {/* NavList component handles the menu items with letter animations */}
        <NavList />
      </div>
    </motion.nav>
  );
};

export default Nav;
