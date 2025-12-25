/**
 * About Component
 * 
 * Displays company information in a horizontal scrolling section.
 * Features:
 * - GSAP ScrollTrigger for smooth horizontal scroll animation
 * - Three panels: "Our Journey", "Our Promise", "Our Team"
 * - Pinned section during scroll for immersive experience
 * - Responsive layout: text-only on mobile, text+image on desktop
 * - Uses useLayoutEffect to ensure animations run before paint
 */

"use client"; // Required for hooks and GSAP
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap"; // GreenSock Animation Platform
import ScrollTrigger from "gsap/ScrollTrigger"; // GSAP plugin for scroll-based animations
import Badge from "./Badge";
import Separator from "./Separator";
import Image from "next/image";

// About section content data - each object represents one scroll panel
const data = [
  {
    imgSrc: "/assets/about/photo-1.jpg",
    title: "Our Journey",
    description:
      "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.",
  },
  {
    imgSrc: "/assets/about/photo-2.jpg",
    title: "Our Promise",
    description:
      "At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.",
  },
  {
    imgSrc: "/assets/about/photo-3.jpg",
    title: "Our Team",
    description:
      "At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.",
  },
];

const About = () => {
  // Refs to target DOM elements for GSAP animation
  const scrollableSectionRef = useRef<HTMLDivElement>(null); // The element that moves horizontally
  const scrollTriggerRef = useRef<HTMLDivElement>(null); // The trigger element for scroll detection

  /**
   * useLayoutEffect vs useEffect:
   * - Runs synchronously after DOM mutations but before paint
   * - Better for animations that affect layout
   * - Prevents visual flicker by running before browser paints
   */
  useLayoutEffect(() => {
    // Register ScrollTrigger plugin with GSAP
    gsap.registerPlugin(ScrollTrigger);

    /**
     * Horizontal Scroll Animation
     * 
     * Creates a horizontal scrolling effect by translating the scrollable section.
     * As user scrolls vertically, the section moves horizontally from right to left.
     * 
     * fromTo: Animates from initial state to end state
     * - translateX: 0 -> -200vw (moves 2 viewport widths to the left)
     * - ease: "none" - Linear animation, directly tied to scroll position
     * - scrub: 0.6 - Smooths the animation (higher = smoother but more lag)
     * - pin: true - Pins the trigger element in place during scroll
     */
    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 }, // Start position: no horizontal translation
      {
        translateX: "-200vw", // End position: move 200% viewport width left (3 panels = 300vw width, but only scroll 200vw)
        ease: "none", // Linear easing for scroll-linked animation
        duration: 1, // Animation duration (relative, as it's controlled by scroll)
        scrollTrigger: {
          trigger: scrollTriggerRef.current, // Element that triggers the animation
          start: "top top", // Animation starts when trigger top hits viewport top
          end: "1800vw top", // Animation ends after scrolling 1800vw (allows slow scroll through panels)
          scrub: 0.6, // Smooth scrubbing: animation follows scroll with slight delay (0.6s)
          pin: true, // Pin the trigger element during scroll (creates immersive effect)
        },
      }
    );

    // Cleanup: Kill animation on unmount to prevent memory leaks
    return () => {
      animation.kill();
    };
  }, []); // Empty dependency array: runs once on mount

  return (
    <section className="overflow-hidden bg-primary">
      {/* Scroll Trigger Container - This element gets pinned during scroll */}
      <div ref={scrollTriggerRef}>
        {/* Scrollable Section - Width 300vw (3 viewport widths) for 3 panels */}
        {/* This div moves horizontally as user scrolls vertically */}
        <div ref={scrollableSectionRef} className="h-screen w-[300vw] flex relative">
          {data.map((item, index) => (
            // Each panel takes full viewport width and height
            <div
              key={index}
              className="w-screen h-screen flex flex-col justify-center items-center relative"
            >
              <div className="container mx-auto">
                <div className="flex gap-[30px] relative">
                  {/* Text Content - Left side on desktop, centered on mobile */}
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <Badge containerStyles="w-[180px] h-[180px]" />
                    <div className="max-w-[560px] text-center">
                      {/* Title - First word in white, second word in accent color */}
                      <h2 className="h2 text-white mb-4">
                        <span className="mr-4">{item.title.split(" ")[0]}</span>
                        <span className="text-accent">{item.title.split(" ")[1]}</span>
                      </h2>
                      {/* Decorative Separator */}
                      <div className="mb-8">
                        <Separator />
                      </div>
                      {/* Description Text */}
                      <p className="leading-relaxed mb-16 px-8 xl:px-0">
                        {item.description}
                      </p>
                      {/* Call-to-Action Button */}
                      <button className="btn">See more</button>
                    </div>
                  </div>
                  {/* Side Image - Hidden on mobile, shown on xl screens */}
                  <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                    <Image
                      src={item.imgSrc}
                      fill // Next.js fill prop: image fills parent container
                      className="object-cover" // Covers container while maintaining aspect ratio
                      quality={100} // Maximum image quality
                      priority // Prioritizes loading for above-the-fold content
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
