"use client";
import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

import { ICard } from "@/interface/card";

import useBoards from "@/hooks/useBoards";

type CardState = {
  cards: ICard[];
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
  createNewCard: (Card: Omit<ICard, "id">) => ICard;
  removeCard: (Card: Omit<ICard, "title">) => void;
  editCard: (Card: ICard) => void;
};

export const CardsSlice = (): CardState => {
  const [cards, setCards] = useState<ICard[]>([]);

  const { addCard } = useBoards();

  const createNewCard = useCallback(
    ({ title, board_id }: Omit<ICard, "id">): ICard => {
      const id = uuid();

      const card = {
        id,
        title,
        board_id,
      };

      setCards((state) => [...state, card]);
      return card;
    },
    []
  );

  const removeCard = useCallback(({ id }: Omit<ICard, "title">): void => {
    setCards((state) => state.filter((card) => card.id !== id));
  }, []);

  const editCard = useCallback(({ id, title }: ICard): void => {
    setCards((state) => {
      const updateCards = state.map((card) =>
        card.id === id ? { ...card, title } : card
      );

      return updateCards;
    });
  }, []);

  return {
    cards,
    setCards,
    createNewCard,
    removeCard,
    editCard,
  };
};
