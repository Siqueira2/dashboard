import { Layers, UserRound } from "lucide-react";

import { INavbarItems } from "@/interface/navbar_items";

export const navbar_items: INavbarItems[] = [
  {
    id: 1,
    path: "/",
    icon: Layers,
    text: "Dashboard",
  },

  {
    id: 2,
    path: "/employees",
    icon: UserRound,
    text: "Employees",
    strokeWidth: 2.5,
  },
];
