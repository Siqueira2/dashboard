import { ElementType } from "react";

export interface INavbarItems {
  id?: number;
  path: string;
  icon: ElementType;
  text: string;
  strokeWidth?: number;
  filled?: boolean;
}
