"use client";

import { ICard } from "@/interface/card";

import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

type CardState = {
  cards: ICard[];
  createNewCard: (Card: Omit<ICard, "id">) => ICard;
  removeCard: (Card: Omit<ICard, "title">) => void;
  editCard: (Card: ICard) => void;
};

export const CardsSlice = (): CardState => {
  const [cards, setCards] = useState<ICard[]>([]);

  const createNewCard = useCallback(({ title }: Omit<ICard, "id">): ICard => {
    const id = uuid();

    const card = {
      id,
      title,
    };

    setCards((state) => [...state, card]);
    return card;
  }, []);

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
    createNewCard,
    removeCard,
    editCard,
  };
};
