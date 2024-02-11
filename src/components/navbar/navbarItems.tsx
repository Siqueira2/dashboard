import { INavbarItems } from "@/interface/navbarItems";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import Tooltip from "@/components/tooltip";

export const NavbarItems = ({
  path,
  icon: Icon,
  text,
  filled,
}: INavbarItems) => {
  const pathName = usePathname();

  return (
    <li>
      <Tooltip text={text} side="right">
        <Button
          size="sm"
          asChild
          variant={pathName === path ? "default" : "ghost"}
          className="w-8 h-8 p-0.5"
        >
          <Link href={path}>
            <Icon fill={filled ? "#fff" : "none"} />
          </Link>
        </Button>
      </Tooltip>
    </li>
  );
};
