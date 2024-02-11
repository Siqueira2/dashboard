import { Layers, UserRound, KanbanSquare } from "lucide-react";

import { INavbarItems } from "@/interface/navbarItems";

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

  {
    id: 3,
    path: "/kanban",
    icon: KanbanSquare,
    text: "Kanban",
  },
];
