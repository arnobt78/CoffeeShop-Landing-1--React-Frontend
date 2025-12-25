/**
 * Hero Component
 * 
 * The hero/banner section at the top of the homepage.
 * Features:
 * - Full-screen video background with autoplay
 * - Dark overlay for text readability
 * - Main headline and tagline
 * - Call-to-action button
 * - Parallax scrolling effect using Locomotive Scroll data attributes
 */

"use client"; // Client component for video element

import Badge from "./Badge";
import Separator from "./Separator";

const Hero = () => {
  return (
    // Full viewport height section (80vh on mobile, full screen on xl)
    <section className="h-[80vh] xl:h-screen relative text-white">
      {/* Dark Overlay - Provides contrast for white text over video */}
      {/* bg-hero_overlay: Background image from tailwind config */}
      {/* bg-primary/[0.93]: Dark overlay with 93% opacity */}
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]" />
      
      {/* Background Video - Autoplays, loops, and is muted (required for autoplay) */}
      <video
        autoPlay
        loop
        muted
        playsInline // Prevents fullscreen on mobile
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Content Container - z-30 places content above overlay and video */}
      <div className="container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative">
        {/* Main Text Content with Parallax Effect */}
        <div
          data-scroll           // Locomotive Scroll attribute: enables scroll detection
          data-scroll-speed="0.4" // Parallax speed: moves slower than scroll (0.4x speed)
          className="flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full"
        >
          {/* Badge and Main Heading */}
          <div className="flex flex-col items-center">
            {/* Badge only shows on xl screens (hidden on mobile) */}
            <Badge containerStyles="hidden xl:flex xl:w-[180px] xl:h-[180px]" />
            {/* Main Hero Heading - "Coffee" is accented */}
            <h1 className="h1 text-white">
              <span className="text-accent">Coffee</span> & Joy
            </h1>
          </div>
          
          {/* Decorative Separator Line */}
          <Separator />
          
          {/* Hero Description Text - Responsive max-width */}
          <p className="lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
            Experience the joy of exceptional coffee in our cozy space, where every cup is
            crafted with passion and warmth
          </p>
          
          {/* Call-to-Action Button */}
          <button className="btn">Our menu</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
