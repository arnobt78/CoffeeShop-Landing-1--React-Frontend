/**
 * MenuItem Component
 * 
 * Individual menu item display component.
 * Shows coffee item with circular image, name, description, and price.
 * 
 * Props:
 * @param imgSrc - Path to item image (must start with '/')
 * @param name - Item name (displayed in uppercase)
 * @param description - Item description text
 * @param price - Item price (formatted to 2 decimal places)
 */

import Image from "next/image";
import React from "react";

type PropsType = {
  imgSrc: `/${string}`; // Template literal type: string starting with '/'
  name: string;
  description: string;
  price: number;
};

const MenuItem = ({ imgSrc, name, description, price }: PropsType) => {
  return (
    <div className="flex items-center gap-4">
      {/* Circular Item Image */}
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image 
          src={imgSrc} 
          fill 
          alt="" 
          priority // Prioritize loading for above-the-fold items
          quality={100} // Maximum image quality
          className="object-cover" // Covers circle while maintaining aspect ratio
        />
      </div>
      
      {/* Item Text Content */}
      <div className="flex flex-col flex-1 gap-2">
        {/* Name, Dashed Line, Price Row */}
        <div className="flex justify-between gap-4 items-baseline">
          {/* Item Name - Uppercase, bold */}
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {name}
          </p>
          {/* Decorative Dashed Border - Fills remaining space */}
          <div className="flex-1 border-b border-dashed border-primary"></div>
          {/* Price - Large, bold, formatted to 2 decimal places */}
          <p className="leading-none font-primary font-semibold text-[30px] text-primary">
            {price.toFixed(2)}
          </p>
        </div>
        {/* Item Description */}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
