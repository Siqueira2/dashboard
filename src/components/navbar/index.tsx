"use client";

import { NavbarItems } from "@/components/navbar/navbar-items";
import { ThemeToggle } from "@/components/theme-toggle";

import { navbar_items } from "@/static/navbar_items";

const Navbar = () => {
  return (
    <nav className="h-screen w-16 bg-gray-50 dark:bg-gray-900 fixed flex flex-col justify-between items center p-4">
      <ul className="w-full space-y-2 ">
        {navbar_items &&
          navbar_items.map((item) => (
            <NavbarItems
              key={item.id}
              path={item.path}
              icon={item.icon}
              text={item.text}
              filled={item.filled}
            />
          ))}
      </ul>

      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
