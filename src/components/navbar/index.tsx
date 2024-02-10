"use client";

import { NavbarItems } from "@/components/navbar/navbarItems";

import { navbar_items } from "@/static/navbar_items";

const Navbar = () => {
  return (
    <nav className="h-screen w-16 bg-slate-50 fixed">
      <ul className="flex flex-col w-full justify-center items-center space-y-2 p-4">
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
    </nav>
  );
};

export default Navbar;
