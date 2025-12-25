/**
 * Badge Component
 * 
 * Reusable decorative badge/icon component.
 * Displays the coffee shop badge SVG image.
 * 
 * Props:
 * @param containerStyles - Tailwind CSS classes for sizing and positioning
 *                         (e.g., "w-[180px] h-[180px]")
 */

import Image from "next/image";

type PropsType = {
  containerStyles: string; // Flexible styling: allows parent to control size/position
};

const Badge = ({ containerStyles }: PropsType) => {
  return (
    // Relative container required for Next.js Image fill prop
    <div className={`relative ${containerStyles}`}>
      {/* Next.js Image with fill: image fills parent container */}
      <Image src="/assets/badge.svg" fill alt="" className="object-contain" />
    </div>
  );
};

export default Badge;
