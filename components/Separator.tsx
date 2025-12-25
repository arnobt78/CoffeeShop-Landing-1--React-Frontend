/**
 * Separator Component
 * 
 * Decorative separator/divider line component.
 * Displays an SVG decorative line, with color variants.
 * 
 * Props:
 * @param bg - Background color variant: "accent" (gold) or "white" (default)
 */

import Image from "next/image";

const Separator = ({ bg = "white" }: { bg?: "accent" | "white" }) => {
  // Choose SVG based on color variant prop
  const imgSrc =
    bg === "accent" ? "/assets/separator-accent.svg" : "/assets/separator-white.svg";

  return (
    // Fixed dimensions with auto margins for center alignment
    <div className="relative w-[168px] h-[26px] mx-auto">
      <Image src={imgSrc} fill alt="" />
    </div>
  );
};

export default Separator;
