"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import Tooltip from "@/components/tooltip";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="h-screen w-56 bg-slate-50 absolute">
      <ul className="flex flex-col w-full justify-center items-start space-y-2 p-6">
        <li>
          <Tooltip text="Dashboard" side="right">
            <Button
              size="sm"
              asChild
              variant={pathName === "/" ? "default" : "ghost"}
            >
              <Link href="/" className="w-full">
                Dashboard
              </Link>
            </Button>
          </Tooltip>
        </li>

        <li>
          <Tooltip text="Employees" side="right">
            <Button
              size="sm"
              asChild
              variant={pathName === "/employees" ? "default" : "ghost"}
            >
              <Link href="/employees" className="w-full">
                Employees
              </Link>
            </Button>
          </Tooltip>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
