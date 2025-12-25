# Coffee Shop 1 Landing Page - Next.js, TailwindCSS, Framer Motion Frontend Project

![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)

A modern, fully responsive coffee shop landing page built with Next.js 14, React, TypeScript, and TailwindCSS. This project showcases advanced animations, smooth scrolling effects, and a beautiful user interface perfect for learning modern frontend development.

- **Live Demo:** [https://coffeeshop-arnob.vercel.app/](https://coffeeshop-arnob.vercel.app/)

_Note: View my Coffee Shop 2 template for another showcase of my design and development skills:_

- **Live Demo:** [https://coffeelover-cafe.netlify.app/](https://coffeelover-cafe.netlify.app/)
- **GitHub Repo:** [https://github.com/arnobt78/CoffeeShop-2--TailwindCSS-Fundamental-Project-9](https://github.com/arnobt78/CoffeeShop-2--TailwindCSS-Fundamental-Project-9)

![Screenshot 2024-09-13 at 01 47 46](https://github.com/user-attachments/assets/0540cd31-1d11-4865-9f6b-bfa3577a48a6) ![Screenshot 2024-09-13 at 01 48 08](https://github.com/user-attachments/assets/1c53b42c-90fd-4faf-9841-4829ff9ca684) ![Screenshot 2024-09-13 at 01 48 43](https://github.com/user-attachments/assets/c6351c18-0505-4988-8393-ed4028379308) ![Screenshot 2024-09-13 at 01 49 07](https://github.com/user-attachments/assets/079eb742-a55e-474a-aafb-153e0789346b) ![Screenshot 2024-09-13 at 01 49 27](https://github.com/user-attachments/assets/5ccf96ea-f9ba-41d8-85b9-1ac3e117b785) ![Screenshot 2024-09-13 at 01 51 04](https://github.com/user-attachments/assets/bef41b9a-4e79-4332-bab5-23d8617f3998) ![Screenshot 2024-09-13 at 01 51 58](https://github.com/user-attachments/assets/18bbac92-6dfa-4f67-b3ea-1a635c920d68)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Available Scripts](#-available-scripts)
- [Component Documentation](#-component-documentation)
- [Key Features Explained](#-key-features-explained)
- [Reusing Components](#-reusing-components)
- [Code Examples](#-code-examples)
- [Deployment](#-deployment)
- [Keywords](#️-keywords)
- [Conclusion](#-conclusion)

---

## 🎯 Project Overview

This is a static frontend website for a coffee shop called "Coffee & Joy - Zenbrew". The project demonstrates modern web development practices including:

- **Next.js App Router** for file-based routing
- **TypeScript** for type safety
- **TailwindCSS** for utility-first styling
- **Advanced Animations** using GSAP, Framer Motion, and Locomotive Scroll
- **SEO Optimization** with comprehensive metadata
- **Responsive Design** that works on all devices

The website includes a hero section with video background, coffee menu display, testimonials carousel, and smooth scroll animations throughout.

---

## ✨ Features

- 🎨 **Modern UI Design** - Beautiful, clean interface with elegant typography
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎬 **Smooth Animations** - GSAP ScrollTrigger, Framer Motion, and Locomotive Scroll
- 🎥 **Video Background** - Autoplay video hero section
- 🎯 **SEO Optimized** - Complete metadata, Open Graph, and Twitter Cards
- ⚡ **Performance** - Optimized images, font loading, and code splitting
- 🎭 **Interactive Elements** - Animated navigation menu, carousel, and scroll effects
- 🔤 **Custom Fonts** - Google Fonts integration (Cormorant Upright, Open Sans)
- 🎪 **Component-Based** - Modular, reusable React components

---

## 🛠️ Tech Stack

### Core Technologies

- **[Next.js 14.2.35](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[TailwindCSS 3.4](https://tailwindcss.com/)** - Utility-first CSS framework

### Animation Libraries

- **[Framer Motion 11.3](https://www.framer.com/motion/)** - React animation library
- **[GSAP 3.12](https://greensock.com/gsap/)** - Professional animation platform
- **[Locomotive Scroll 5.0](https://github.com/locomotivemtl/locomotive-scroll/)** - Smooth scrolling library

### Additional Libraries

- **[Swiper 11.1](https://swiperjs.com/)** - Touch slider for testimonials
- **[React Icons 5.3](https://react-icons.github.io/react-icons/)** - Icon library
- **[Split-Type](https://github.com/lukePeavey/SplitType)** - Text animation utility

---

## 📁 Project Structure

```bash
coffeeshop-1/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout with metadata & fonts
│   ├── page.tsx                 # Home page component
│   ├── globals.css              # Global styles & Tailwind directives
│   └── favicon.ico              # Site favicon
│
├── components/                   # React components
│   ├── About.tsx                # About section with horizontal scroll
│   ├── Badge.tsx                # Decorative badge component
│   ├── Footer.tsx               # Footer with links & social icons
│   ├── Header.tsx               # Header with navigation
│   ├── Hero.tsx                 # Hero section with video
│   ├── OpeningHours.tsx         # Business hours display
│   ├── Separator.tsx            # Decorative separator line
│   ├── Testimonials.tsx         # Customer testimonials carousel
│   │
│   ├── Explore/                 # Explore section components
│   │   ├── Explore.tsx          # Main explore section
│   │   └── ExploreItem.tsx      # Individual coffee type item
│   │
│   ├── Menu/                    # Menu section components
│   │   ├── Menu.tsx             # Menu container
│   │   └── MenuItem.tsx         # Individual menu item
│   │
│   └── Nav/                     # Navigation components
│       ├── Nav.tsx              # Animated navigation container
│       └── NavList.tsx          # Navigation links with letter animation
│
├── public/                       # Static assets
│   └── assets/
│       ├── about/               # About section images
│       ├── explore/             # Explore section assets
│       ├── footer/              # Footer background
│       ├── hero/                # Hero video & overlay
│       ├── menu/                # Coffee menu images
│       ├── opening-hours/       # Opening hours assets
│       ├── logo.svg             # Site logo
│       └── separator-*.svg      # Separator graphics
│
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # TailwindCSS configuration
├── tsconfig.json                # TypeScript configuration
├── type.d.ts                    # TypeScript type definitions
├── package.json                 # Project dependencies
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm**, **yarn**, **pnpm**, or **bun** (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/coffeeshop-1.git
   cd coffeeshop-1
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🔐 Environment Variables

**Important Note:** This is a static frontend project and does not require any environment variables. The project runs completely without a `.env` file.

### If You Need to Add Environment Variables (Future Use)

If you plan to extend this project with backend features, API integrations, or third-party services, you can create a `.env.local` file in the root directory:

```bash
# .env.local (create this file if needed)

# Example: API endpoint
NEXT_PUBLIC_API_URL=https://api.example.com

# Example: Analytics ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Example: Feature flags
NEXT_PUBLIC_ENABLE_FEATURE=true
```

**Rules for Environment Variables in Next.js:**

1. **Public Variables**: Prefix with `NEXT_PUBLIC_` to expose them to the browser
2. **Private Variables**: Without prefix, only available on the server side
3. **File Names**: Use `.env.local` for local development (gitignored by default)
4. **Access**: Use `process.env.NEXT_PUBLIC_VARIABLE_NAME` in your code

**Note:** The `.env.local` file is already included in `.gitignore`, so it won't be committed to version control.

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the development server at [http://localhost:3000](http://localhost:3000) with hot-reloading enabled.

### Production Build

```bash
npm run build
```

Creates an optimized production build of the application in the `.next` folder.

### Start Production Server

```bash
npm run start
```

Starts the production server (requires running `npm run build` first).

### Linting

```bash
npm run lint
```

Runs ESLint to check for code quality and potential errors.

---

## 📚 Component Documentation

### Core Components

#### 1. **Header Component** (`components/Header.tsx`)

The site header with logo and animated mobile navigation menu.

**Features:**

- Logo linking to home page
- Hamburger menu button with animated transformation (3 lines to X)
- Mobile navigation menu with smooth height animation
- Absolute positioning to overlay content

**Usage:**

```tsx
import Header from "@/components/Header";

// Used in layout.tsx
<Header />;
```

**Key Technologies:**

- `useState` for menu state management
- Framer Motion's `AnimatePresence` for exit animations
- CSS transitions for hamburger icon animation

---

#### 2. **Hero Component** (`components/Hero.tsx`)

The main hero section with video background and call-to-action.

**Features:**

- Full-screen video background (autoplay, loop, muted)
- Dark overlay for text readability
- Parallax scrolling effect using Locomotive Scroll
- Responsive height (80vh mobile, full screen desktop)

**Usage:**

```tsx
import Hero from "@/components/Hero";

// Used in page.tsx
<Hero />;
```

**Key Technologies:**

- HTML5 `<video>` element
- Locomotive Scroll `data-scroll` attributes for parallax
- Next.js Image component for badge

---

#### 3. **About Component** (`components/About.tsx`)

Horizontal scrolling section showcasing company information.

**Features:**

- GSAP ScrollTrigger for smooth horizontal scroll
- Three panels: "Our Journey", "Our Promise", "Our Team"
- Pinned section during scroll for immersive experience
- Responsive: text-only on mobile, text+image on desktop

**Usage:**

```tsx
import About from "@/components/About";

// Used in page.tsx
<About />;
```

**Key Technologies:**

- GSAP ScrollTrigger plugin
- `useLayoutEffect` for animation setup
- `useRef` to target DOM elements
- Horizontal translation animation (-200vw)

**Code Snippet:**

```tsx
useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const animation = gsap.fromTo(
    scrollableSectionRef.current,
    { translateX: 0 },
    {
      translateX: "-200vw",
      ease: "none",
      scrollTrigger: {
        trigger: scrollTriggerRef.current,
        start: "top top",
        end: "1800vw top",
        scrub: 0.6,
        pin: true,
      },
    }
  );

  return () => animation.kill();
}, []);
```

---

#### 4. **Menu Component** (`components/Menu/Menu.tsx`)

Displays the coffee menu in a responsive grid layout.

**Features:**

- Grid layout: 1 column mobile, 2 columns desktop
- 10 menu items with images, names, descriptions, and prices
- Section header with title and separator
- Call-to-action button

**Usage:**

```tsx
import Menu from "@/components/Menu/Menu";

// Used in page.tsx
<Menu />;
```

**Key Technologies:**

- CSS Grid for responsive layout
- Array mapping for dynamic item rendering
- TypeScript `as const` for type safety

---

#### 5. **MenuItem Component** (`components/Menu/MenuItem.tsx`)

Individual menu item display with circular image and pricing.

**Features:**

- Circular item image
- Item name (uppercase, bold)
- Decorative dashed border
- Price formatted to 2 decimal places
- Item description

**Props:**

```typescript
type PropsType = {
  imgSrc: `/${string}`; // Image path (must start with '/')
  name: string; // Item name
  description: string; // Item description
  price: number; // Item price
};
```

**Usage:**

```tsx
<MenuItem
  imgSrc="/assets/menu/coffee-1.png"
  name="Espresso"
  description="Rich and bold shot of coffee"
  price={3.3}
/>
```

---

#### 6. **Testimonials Component** (`components/Testimonials.tsx`)

Customer testimonials carousel with navigation arrows.

**Features:**

- Swiper.js carousel implementation
- Navigation arrows for manual control
- Multiple testimonial cards
- Customer name and profession display
- Quote icon decoration

**Usage:**

```tsx
import Testimonials from "@/components/Testimonials";

// Used in page.tsx
<Testimonials />;
```

**Key Technologies:**

- Swiper React components
- Navigation module for arrows
- React Icons for quote symbol

---

#### 7. **Explore Component** (`components/Explore/Explore.tsx`)

Showcases different coffee types in a three-column layout.

**Features:**

- Three-column layout: Left items | Center image | Right items
- Parallax effect on center image
- Responsive: stacks vertically on mobile
- Four coffee type items (2 per side)

**Usage:**

```tsx
import Explore from "@/components/Explore/Explore";

// Used in page.tsx
<Explore />;
```

---

#### 8. **Nav Component** (`components/Nav/Nav.tsx`)

Animated mobile navigation menu container.

**Features:**

- Height animation (0 to 85vh)
- Smooth expand/collapse transition
- Contains NavList component
- Positioned absolutely to overlay content

**Key Technologies:**

- Framer Motion variants for height animation
- Custom cubic-bezier easing function
- Exit animations with AnimatePresence

---

#### 9. **NavList Component** (`components/Nav/NavList.tsx`)

Navigation links with letter-by-letter animation.

**Features:**

- Each link's letters animate individually
- Staggered animation: letters animate in sequence
- Slide-up effect on enter, slide-down on exit
- Hover effect changes text color

**Key Technologies:**

- Framer Motion for letter animations
- Custom delay calculations for staggering
- String splitting and mapping for letters

**Code Snippet:**

```tsx
const getLetter = (name: string) => {
  let letters: JSX.Element[] = [];
  name.split("").forEach((letter, index) => {
    letters.push(
      <motion.span
        variants={letterAnim}
        custom={[index * 0.04, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    );
  });
  return letters;
};
```

---

#### 10. **Badge Component** (`components/Badge.tsx`)

Reusable decorative badge/icon component.

**Props:**

```typescript
type PropsType = {
  containerStyles: string; // Tailwind CSS classes for sizing
};
```

**Usage:**

```tsx
<Badge containerStyles="w-[180px] h-[180px]" />
```

---

#### 11. **Separator Component** (`components/Separator.tsx`)

Decorative separator/divider line component.

**Props:**

```typescript
{ bg?: "accent" | "white" } // Color variant (default: "white")
```

**Usage:**

```tsx
<Separator bg="accent" />  // Gold accent color
<Separator />              // White (default)
```

---

#### 12. **Footer Component** (`components/Footer.tsx`)

Site footer with navigation links, social icons, and copyright.

**Features:**

- Background image with dark overlay
- Logo linking to home
- Navigation links (vertical mobile, horizontal desktop)
- Social media icons (YouTube, Facebook, Twitter, Instagram)
- Copyright notice

**Usage:**

```tsx
import Footer from "@/components/Footer";

// Used in layout.tsx
<Footer />;
```

---

## 🎨 Key Features Explained

### 1. **Smooth Scrolling with Locomotive Scroll**

Locomotive Scroll provides smooth, performant scrolling with parallax effects.

**Implementation:**

```tsx
// In page.tsx
useEffect(() => {
  const loadLocomotiveScroll = async () => {
    const LocomotiveScroll = (await import("locomotive-scroll")).default;
    new LocomotiveScroll();
  };
  loadLocomotiveScroll();
}, []);
```

**Usage in Components:**

```tsx
<div data-scroll data-scroll-speed="0.4" className="...">
  Content with parallax effect
</div>
```

- `data-scroll`: Enables scroll detection
- `data-scroll-speed`: Parallax speed (0.4 = moves 40% of scroll speed)

---

### 2. **GSAP ScrollTrigger Horizontal Scroll**

The About section uses GSAP ScrollTrigger to create a horizontal scrolling effect controlled by vertical scroll.

**Key Concepts:**

- **ScrollTrigger**: GSAP plugin for scroll-based animations
- **Pin**: Keeps element in viewport during scroll
- **Scrub**: Animation follows scroll position smoothly
- **translateX**: Horizontal movement (-200vw = 2 viewport widths)

---

### 3. **Framer Motion Animations**

Framer Motion provides declarative animations for React components.

**Example - Height Animation:**

```tsx
const heightAnimation = {
  initial: { height: 0 },
  open: {
    height: "85vh",
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1] },
  },
  close: { height: 0 },
};

<motion.nav variants={heightAnimation} animate="open" />;
```

**Example - Letter Animation:**

```tsx
const letterAnim = {
  initial: { y: "100%", opacity: 0 },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i[0] },
  }),
};
```

---

### 4. **Responsive Design with TailwindCSS**

TailwindCSS provides utility classes for responsive design.

**Breakpoints:**

```typescript
sm: "640px"; // Small devices (tablets)
md: "768px"; // Medium devices (small laptops)
lg: "960px"; // Large devices (laptops)
xl: "1430px"; // Extra large devices (desktops)
```

**Usage:**

```tsx
<div className="text-base xl:text-xl">
  {/* Base size on mobile, larger on xl screens */}
</div>

<div className="hidden xl:flex">
  {/* Hidden on mobile, visible on xl screens */}
</div>
```

---

### 5. **SEO Optimization**

The layout.tsx file includes comprehensive SEO metadata.

**Features:**

- Page titles with template support
- Meta descriptions
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Keywords array
- Author information
- Robots directives
- Canonical URLs

**Example:**

```tsx
export const metadata: Metadata = {
  title: {
    default: "Coffee & Joy - Zenbrew | Premium Coffee Shop Experience",
    template: "%s | Coffee & Joy - Zenbrew",
  },
  description: "Experience the joy of exceptional coffee...",
  openGraph: {
    type: "website",
    url: "https://coffeeshop-arnob.vercel.app",
    images: [{ url: "/assets/logo.svg", width: 1200, height: 630 }],
  },
};
```

---

## 🔄 Reusing Components

### How to Reuse Components in Other Projects

#### 1. **Badge Component**

The Badge component is highly reusable for any decorative icon needs.

**Steps to Reuse:**

1. Copy `components/Badge.tsx` to your project
2. Ensure you have the badge SVG in your public folder
3. Import and use:

```tsx
import Badge from "@/components/Badge";

<Badge containerStyles="w-[100px] h-[100px]" />;
```

---

#### 2. **Separator Component**

Perfect for section dividers in any project.

**Steps to Reuse:**

1. Copy `components/Separator.tsx`
2. Add separator SVG files to public/assets
3. Customize colors in the component or create new SVG variants

```tsx
import Separator from "@/components/Separator";

<Separator bg="accent" />;
```

---

#### 3. **MenuItem Component**

Adaptable for any product/menu display.

**Customization Example:**

```tsx
// Change for different product types
<MenuItem
  imgSrc="/assets/products/product-1.png"
  name="Product Name"
  description="Product description"
  price={29.99}
/>
```

---

#### 4. **Header with Animated Navigation**

Reusable header pattern with mobile menu.

**Customization:**

- Update logo source
- Modify navigation links in Header component
- Adjust animation timing in Nav component
- Change color scheme via Tailwind classes

---

## 💻 Code Examples

### Example 1: Creating a New Section Component

```tsx
// components/NewSection.tsx
"use client";

import Badge from "./Badge";
import Separator from "./Separator";

const NewSection = () => {
  return (
    <section className="py-12 xl:py-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <Badge containerStyles="w-[120px] h-[120px] mx-auto mb-4" />
          <h2 className="h2 text-white">Section Title</h2>
          <Separator bg="accent" />
        </div>
        {/* Your content here */}
      </div>
    </section>
  );
};

export default NewSection;
```

---

### Example 2: Adding a New Menu Item

```tsx
// In components/Menu/Menu.tsx
const menuItems = [
  // ... existing items
  {
    imgSrc: "/assets/menu/coffee-6.png",
    name: "New Coffee",
    description: "Description of new coffee",
    price: 4.99,
  },
] as const;
```

---

### Example 3: Custom Animation with Framer Motion

```tsx
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

<motion.div variants={fadeInUp} initial="initial" animate="animate">
  Animated Content
</motion.div>;
```

---

### Example 4: Using Tailwind Custom Colors

```tsx
// Access custom colors from tailwind.config.ts
<div className="bg-primary text-white">
  {/* Primary background, white text */}
</div>

<div className="text-accent hover:text-accent-hover">
  {/* Accent color with hover state */}
</div>
```

---

### Example 5: Responsive Image with Next.js Image

```tsx
import Image from "next/image";

<Image
  src="/assets/example.jpg"
  width={800}
  height={600}
  alt="Description"
  quality={100}
  priority // For above-the-fold images
  className="object-cover"
/>;
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import project on Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Configure build settings**

   - Framework Preset: Next.js
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Vercel automatically builds and deploys your site

**Vercel automatically provides:**

- HTTPS
- Global CDN
- Automatic deployments on git push
- Custom domains

---

### Deploy to Netlify

1. **Push your code to GitHub**

2. **Import project on Netlify**

   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Select your repository

3. **Configure build settings**

   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Deploy**
   - Click "Deploy site"

**Note:** The project includes `netlify.toml` with redirect configuration.

---

### Deploy to Other Platforms

**Build the project:**

```bash
npm run build
```

**Start production server:**

```bash
npm run start
```

The production build will be in the `.next` folder, and you can deploy this to any Node.js hosting platform.

---

## 🏷️ Keywords

Next.js, React, TypeScript, TailwindCSS, Coffee Shop Website, Framer Motion, Locomotive Scroll, GSAP, Swiper, Animation, Parallax Scrolling, Smooth Scroll, Responsive Design, Mobile-First, SEO Optimization, Open Graph, Twitter Cards, Component-Based Architecture, Frontend Development, Web Development, Landing Page, Modern UI, UX Design, Performance Optimization, Code Splitting, Image Optimization, Font Optimization, Static Site Generation, App Router, Server Components, Client Components, React Hooks, useState, useEffect, useLayoutEffect, useRef, Custom Hooks, TypeScript Interfaces, Utility-First CSS, CSS-in-JS, Web Animations, Scroll Animations, Carousel, Slider, Video Background, Hero Section, Testimonials, Menu Display, Navigation Menu, Mobile Navigation, Footer, Social Media Icons, Reusable Components, Educational Project, Learning Resource, Portfolio Project

---

## 🎓 Learning Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Locomotive Scroll Documentation](https://scroll.locomotive.ca/docs)

### Recommended Tutorials

- [Next.js Learn Course](https://nextjs.org/learn)
- [React Official Tutorial](https://react.dev/learn)
- [TailwindCSS Tutorial](https://tailwindcss.com/docs/utility-first)

---

## 📝 Conclusion

This coffee shop landing page project demonstrates modern frontend development practices and serves as an excellent learning resource. It showcases:

- **Modern Stack**: Next.js 14 with App Router, React 18, TypeScript, and TailwindCSS
- **Advanced Animations**: Multiple animation libraries working together seamlessly
- **Best Practices**: SEO optimization, performance optimization, responsive design
- **Code Quality**: TypeScript for type safety, component-based architecture, clean code structure
- **User Experience**: Smooth animations, intuitive navigation, engaging interactions

Whether you're learning React, Next.js, or web animations, this project provides practical examples of real-world development patterns. Feel free to fork, modify, and extend this project to suit your needs!

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
