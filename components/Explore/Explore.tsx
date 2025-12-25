/**
 * Explore Component
 * 
 * Showcases different coffee types and varieties.
 * Features:
 * - Three-column layout: Left items, Center image, Right items
 * - Parallax effect on center image using Locomotive Scroll
 * - Responsive: Stacks vertically on mobile, horizontal on desktop
 * - Each side displays 2 coffee type items
 */

import Image from "next/image";
import ExploreItem from "./ExploreItem";

const Explore = () => {
  return (
    <section className="py-12 xl:py-0 xl:h-[90vh] xl:w-screen">
      <div className="container mx-auto xl:w-full xl:h-full flex xl:justify-center xl:items-center">
        {/* Three-column layout: Left | Center | Right */}
        <div className="w-full flex flex-col lg:flex-row gap-12 xl:gap-20">
          {/* Left Column - First 2 items, right-aligned on desktop */}
          <div className="flex-1 flex flex-col justify-around items-end text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* Item 1: Rich Espresso Blends */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end" // Right-align on desktop
              icon="coffee-1.svg"
              text={{
                title: "Rich Espresso Blends",
                description:
                  "Indulge in the deep, robust flavors of our expertly crafted espresso blends. Perfect for a quick pick-me-up or a leisurely afternoon treat.",
              }}
            />
            {/* Item 2: Classic Drip Coffee */}
            <ExploreItem
              itemCSS="xl:text-right xl:items-end"
              icon="coffee-2.svg"
              text={{
                title: "Classic Drip Coffee",
                description:
                  "Enjoy the comforting taste of our classic drip coffee, brewed to perfection. A timeless choice for coffee enthusiasts who appreciate simplicity.",
              }}
            />
          </div>
          
          {/* Center Column - Coffee cup image with parallax effect (desktop only) */}
          <div className="hidden xl:flex justify-center">
            <div className="relative w-[322px] h-[580px]">
              <Image
                src="/assets/explore/cup.png"
                fill
                alt=""
                className="object-cover"
                quality={100}
                priority // Priority loading for above-the-fold image
                data-scroll         // Locomotive Scroll: enables parallax
                data-scroll-speed="0.1" // Very slow parallax (0.1x scroll speed)
              />
            </div>
          </div>
          {/* Right Column - Last 2 items, left-aligned on desktop */}
          <div className="flex-1  flex flex-col justify-around text-center xl:text-left gap-12 xl:gap-0 max-w-[400px] mx-auto xl:max-w-none xl:mx-0">
            {/* Item 3: Smooth Cold Brews */}
            <ExploreItem
              itemCSS="xl:text-left items-start" // Left-align on desktop
              icon="coffee-3.svg"
              text={{
                title: "Smooth Cold Brews",
                description:
                  "Refresh yourself with our smooth and invigorating cold brew options. Ideal for those warm days when you need a cool, caffeinated boost.",
              }}
            />
            {/* Item 4: Flavorful Latte Varieties */}
            <ExploreItem
              itemCSS="xl:text-left items-start"
              icon="coffee-4.svg"
              text={{
                title: "Flavorful Latte Varieties",
                description:
                  "Experience the rich and creamy flavors of our diverse latte selections. From vanilla to caramel, we have a latte to suit every taste.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
