/**
 * Home Page Component
 * 
 * This is the main landing page of the coffee shop website.
 * It uses "use client" directive because it requires client-side features:
 * - useEffect hook for initializing Locomotive Scroll
 * - Dynamic imports for performance optimization
 * 
 * The page consists of multiple sections displayed in order:
 * Hero -> Explore -> About -> Menu -> Opening Hours -> Testimonials
 */

"use client"; // Required for using React hooks (useEffect)
import { useEffect } from "react";
// components
import About from "@/components/About";
import Explore from "@/components/Explore/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu/Menu";
import OpeningHours from "@/components/OpeningHours";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  /**
   * Locomotive Scroll Initialization
   * 
   * Locomotive Scroll provides smooth scrolling and parallax effects.
   * It's dynamically imported (code splitting) to reduce initial bundle size
   * and improve page load performance. The library is only loaded after
   * the component mounts on the client side.
   * 
   * This useEffect runs once when the component mounts (empty dependency array []).
   * Dynamic import() returns a Promise, so we use async/await to handle it.
   */
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      // Dynamic import: loads the module only when needed (lazy loading)
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      // Initialize Locomotive Scroll instance
      // It automatically detects elements with data-scroll attributes
      new LocomotiveScroll();
    };

    loadLocomotiveScroll();
  }, []); // Empty array means this effect runs only once on mount

  return (
    // overflow-x-hidden prevents horizontal scrolling
    <div className="h-full overflow-x-hidden">
      {/* Hero Section: Main landing area with video background */}
      <Hero />
      
      {/* Explore Section: Showcases different coffee types */}
      <Explore />
      
      {/* About Section: Company story with horizontal scroll animation */}
      <About />
      
      {/* Menu Section: Coffee menu items display */}
      <Menu />
      
      {/* Opening Hours Section: Business hours information */}
      <OpeningHours />
      
      {/* Testimonials Section: Customer reviews carousel */}
      <Testimonials />
      
      {/* temporary div */}
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default Home;
