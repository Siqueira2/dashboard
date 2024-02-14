import { ICard } from "@/interface/card";

export interface IBoard {
  id: string | number;
  title: string;
  cards?: ICard[];
}
