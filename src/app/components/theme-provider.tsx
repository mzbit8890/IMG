"use client"
import { useState } from "react";

// import * as React from "react"
// import { ThemeProvider as NextThemesProvider } from "next-themes"
// import { type ThemeProviderProps } from "next-themes/dist/types"

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>
// }

// /** @format */
// "use client";

// import Image from "next/image";
// import { useState } from "react";


// import Link from "next/link";
// import { IoIosArrowDown } from "react-icons/io";


// import { FiMenu } from "react-icons/fi";
// import { AiOutlineClose } from "react-icons/ai";
// import { useAutoAnimate } from "@formkit/auto-animate/react";

// type NavItem = {
//   label: string;
//   link?: string;
//   children?: NavItem[];
//   iconImage?: string;
// };

// const navItems: NavItem[] = [
//   {
//     label: "WHO WE ARE",
//     link: "#",
//     children: [
//       {
//         label: "Todo list",
//         link: "#",

//       },
//       {
//         label: "Calendar",
//         link: "#",
  
//       },
//       {
//         label: "Reminders",
//         link: "#",
   
//       },
//       {
//         label: "Planning",
//         link: "#",
   
//       }
//     ]
//   },
  
// ];

// export default function Navbar() {
//   const [animationParent] = useAutoAnimate();
//   const [isSideMenuOpen, setSideMenue] = useState(false);
//   function openSideMenu() {
//     setSideMenue(true);
//   }
//   function closeSideMenu() {
//     setSideMenue(false);
//   }

//   return (
//     <div className="mx-auto flex  w-full max-w-7xl justify-between px-4  ">
//       {/* left side  */}
//       <section ref={animationParent} className="flex items-center gap-10">
//         {/* logo */}
      
//         {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
//         <div className="hidden md:flex items-center gap-4 transition-all">
//           {navItems.map((d, i) => (
//             <Link
//               key={i}
//               href={d.link ?? "#"}
//               className="relative group  px-2  transition-all "
//             >
//               <p className="flex cursor-pointer items-center gap-2  group-hover:text-black ">
//                 <span>{d.label}</span>
//                 {d.children && (
//                   <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
//                 )}
//               </p>

//               {/* dropdown */}
//               {d.children && (
//                 <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
//                   {d.children.map((ch, i) => (
//                     <Link
//                       key={i}
//                       href={ch.link ?? "#"}
//                       className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
//                     >
//                       {/* image */}
//                       {ch.iconImage && (
//                         <Image src={ch.iconImage} alt="item-icon" />
//                       )}
//                       {/* item */}
//                       <span className="whitespace-nowrap   pl-3 ">
//                         {ch.label}
//                       </span>
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </Link>
//           ))}
//         </div>
//         {/* navitems */}
//       </section>

//       {/* right side data */}
    

//       <FiMenu
//         onClick={openSideMenu}
//         className="cursor-pointer text-4xl md:hidden"
//       />
//     </div>
//   );
// }

// function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
//   return (
//     <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
//       <div className=" h-full w-[65%] bg-white px-4 py-4">
//         <section className="flex justify-end">
//           <AiOutlineClose
//             onClick={closeSideMenu}
//             className="cursor-pointer text-4xl "
//           />
//         </section>
//         <div className=" flex flex-col text-base  gap-2 transition-all">
//           {navItems.map((d, i) => (
//             <SingleNavItem
//               key={i}
//               label={d.label}
//               iconImage={d.iconImage}
//               link={d.link}
//             >
//               {d.children}
//             </SingleNavItem>
//           ))}
//         </div>

    
//       </div>
//     </div>
//   );
// }

// function SingleNavItem(d: NavItem) {
//   const [animationParent] = useAutoAnimate();
//   const [isItemOpen, setItem] = useState(false);

//   function toggleItem() {
//     return setItem(!isItemOpen);
//   }

//   return (
//     <Link
//       ref={animationParent}
//       onClick={toggleItem}
//       href={d.link ?? "#"}
//       className="relative   px-2 py-3 transition-all "
//     >
//       <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
//         <span>{d.label}</span>
//         {d.children && (
//           // rotate-180
//           <IoIosArrowDown
//             className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
//           />
//         )}
//       </p>

//       {/* dropdown */}
//       {isItemOpen && d.children && (
//         <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
//           {d.children.map((ch, i) => (
//             <Link
//               key={i}
//               href={ch.link ?? "#"}
//               className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
//             >
//               {/* image */}
//               {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
//               {/* item */}
//               <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
//             </Link>
//           ))}
//         </div>
//       )}
//     </Link>
//   );
// }

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Who We Are",
    link: "/whoWeAre",
    children: [
      {
        label: "What We Do",
        link: "/whatWeDo",
      },
      {
        label: "Diversity",
        link: "/diversity",
      },
      {
        label: "Benefits",
        link: "/benefits",
      },
      // {
      //   label: "Planning",
      //   link: "#",
      // },
    ],
  },
];


export default function Navbar() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl justify-between ">
      {/* left side  */}
      <section className="flex items-center gap-10">
        {navItems.map((d, i) => (
          <SingleNavItem key={i} {...d} />
        ))}
      </section>

      {/* right side data */}
    </nav>
  );
}

function SingleNavItem(d: NavItem) {
  const [isItemOpen, setItemOpen] = useState(false);

  const handleMouseEnter = () => {
    setItemOpen(true);
  };

  const handleMouseLeave = () => {
    setItemOpen(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
      <div className="relative px-2 cursor-pointer">
        <p className="flex items-center gap-2 hover:text-blue-600 group-hover:text-black">
          <span>{d.label}</span>
          {d.children && <IoIosArrowDown className="text-xs transition-all" />}
        </p>
      </div>

      {/* dropdown */}
      {d.children && isItemOpen && (
        <div className="absolute   top-full left-0 w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-opacity">
          {d.children.map((ch, i) => (
            <Link key={i} href={ch.link ?? "#"}>
              <div className="flex  py-1  pr-8 text-black hover:text-blue-600 cursor-pointer">
                {/* image */}
                {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
                {/* item */}
                <span className="whitespace-nowrap pl-3">{ch.label}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
