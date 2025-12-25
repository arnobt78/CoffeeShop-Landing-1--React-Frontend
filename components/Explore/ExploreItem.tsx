/**
 * ExploreItem Component
 * 
 * Individual coffee type item in the Explore section.
 * Displays icon, title, and description.
 * 
 * Props:
 * @param itemCSS - Alignment classes: "xl:text-right xl:items-end" or "xl:text-left items-start"
 * @param icon - Icon filename (must end with .svg)
 * @param text - Object containing title and description
 */

import Image from "next/image";

type PropsType = {
  itemCSS: "xl:text-right xl:items-end" | "xl:text-left items-start"; // Union type: only these two options
  icon: `${string}.svg`; // Template literal type: string ending with .svg
  text: {
    title: string;
    description: string;
  };
};

const ExploreItem = ({ itemCSS, icon, text }: PropsType) => {
  return (
    <div className="relative flex items-start">
      {/* Container with conditional alignment classes */}
      <div className={`xl:max-w-[420px] xl:flex xl:flex-col ${itemCSS}`}>
        {/* Icon - Centered on mobile, follows alignment on desktop */}
        <div className="mb-6 flex justify-center items-center">
          <Image src={`/assets/explore/icons/${icon}`} width={56} height={56} alt="" />
        </div>
        {/* Title - Large, bold, responsive sizing */}
        <h3 className="text-3xl xl:text-4xl font-primary font-bold mb-4">{text.title}</h3>
        {/* Description - Constrained max width for readability */}
        <p className="max-w-[400px]">{text.description}</p>
      </div>
    </div>
  );
};

export default ExploreItem;
