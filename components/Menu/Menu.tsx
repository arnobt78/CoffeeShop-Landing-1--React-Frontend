/**
 * Menu Component
 * 
 * Displays the coffee shop menu with a grid of menu items.
 * Features:
 * - Grid layout: 1 column on mobile, 2 columns on desktop
 * - 10 menu items displayed
 * - Section header with title and separator
 * - Call-to-action button
 */

import Separator from "../Separator";
import MenuItem from "./MenuItem";

// Menu items data - Coffee offerings with images, names, descriptions, and prices
const menuItems = [
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Espresso",
    description: "Rich and bold shot of coffee",
    price: 3.3,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam",
    price: 4.5,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 4.2,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Americano",
    description: "Espresso with hot water",
    price: 3.5,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 5.4,
  },
  {
    imgSrc: "/assets/menu/coffee-1.png",
    name: "Macchiato",
    description: "Espresso with a dollop of foam",
    price: 3.75,
  },
  {
    imgSrc: "/assets/menu/coffee-2.png",
    name: "Flat White",
    description: "Espresso with microfoam milk",
    price: 4.25,
  },
  {
    imgSrc: "/assets/menu/coffee-3.png",
    name: "Iced Coffee",
    description: "Chilled coffee over ice",
    price: 3.75,
  },
  {
    imgSrc: "/assets/menu/coffee-4.png",
    name: "Affogato",
    description: "Espresso shot over vanilla ice cream",
    price: 5.5,
  },
  {
    imgSrc: "/assets/menu/coffee-5.png",
    name: "Irish Coffee",
    description: "Coffee with Irish whiskey and cream",
    price: 6.5,
  },
] as const; // as const makes the array readonly for TypeScript type inference

const Menu = () => {
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Our Menu</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          {/* Section Description */}
          <p className="text-center max-w-[620px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis repellat
            culpa voluptate nisi, magnam consectetur atque harum laborum maxime
            voluptatum!
          </p>
        </div>
        
        {/* Menu Grid and Button */}
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          {/* Menu Items Grid - Responsive: 1 column mobile, 2 columns desktop */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {menuItems.map((item, index) => {
              const { name, description, price, imgSrc } = item;
              return (
                <MenuItem
                  key={index}
                  name={name}
                  description={description}
                  price={price}
                  imgSrc={imgSrc}
                />
              );
            })}
          </div>
          {/* Call-to-Action Button */}
          <button className="btn">View full menu</button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
