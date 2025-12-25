/**
 * OpeningHours Component
 * 
 * Displays business opening hours information.
 * Features:
 * - Two-column layout: Image side (desktop) and Hours side
 * - Background image with overlay on hours side
 * - Badge overlay on image side
 * - Opening hours badge/schedule image
 * - Responsive: Single column on mobile, two columns on desktop
 */

import Image from "next/image";
import Badge from "./Badge";
import Separator from "./Separator";

const OpeningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] xl:h-[80vh]">
      {/* Left Side - Image with Badge Overlay (Hidden on mobile, visible on xl) */}
      <div className="hidden relative xl:flex flex-1 justify-center items-center">
        {/* Dark Overlay - 60% opacity for contrast */}
        <div className="w-full h-full absolute z-40 top-0 bg-black/60" />
        {/* Background Image */}
        <Image
          src="/assets/opening-hours/img.png"
          fill
          alt=""
          quality={100}
          priority
          className="object-cover"
        />
        {/* Badge Overlay - Centered over image */}
        <Badge containerStyles="w-[320px] h-[320px] absolute z-40" />
      </div>

      {/* Right Side - Opening Hours Content */}
      <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        {/* Dark Overlay - 85% opacity for text readability */}
        <div className="w-full h-full absolute top-0 bg-black/[0.85] z-10" />
        
        {/* Content Container */}
        <div className="z-20 flex flex-col items-center justify-center">
          {/* Section Title */}
          <h2 className="h2 text-white mb-4">Opening Hours</h2>
          
          {/* Decorative Separator */}
          <Separator bg="accent" />
          
          {/* Opening Hours Badge/Schedule Image */}
          {/* Responsive sizing: 300x220 on mobile, 470x280 on desktop */}
          <div className="mt-12 relative w-[300px] h-[220px] xl:w-[470px] xl:h-[280px]">
            <Image
              src="/assets/opening-hours/program-badge.svg"
              fill
              quality={100}
              priority
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
