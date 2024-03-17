import { ICard } from "@/interface/card";

export interface IBoard {
  id: string;
  title: string;
  cards: ICard[];
}
