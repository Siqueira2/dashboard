"use client";

import { IBoard } from "@/interface/board";
import { ICard } from "@/interface/card";

import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

type BoardState = {
  boards: IBoard[];
  setBoards: React.Dispatch<React.SetStateAction<IBoard[]>>;
  createNewBoard: (board: Omit<IBoard, "id" | "cards">) => void;
  removeBoard: (board: Omit<IBoard, "title" | "cards">) => void;
  editBoard: (board: IBoard) => void;
  addCard: (card: ICard, id: string | number) => void;
  updateCards: (cards: ICard[], id: string | number) => void;
};

export const BoardsSlice = (): BoardState => {
  const [boards, setBoards] = useState<IBoard[]>([]);

  const createNewBoard = useCallback(
    ({ title }: Omit<IBoard, "id" | "cards">): void => {
      const id = uuid();

      const newBoard = {
        id,
        title,
        cards: [],
      };

      setBoards((state) => [...state, newBoard]);
    },
    []
  );

  const removeBoard = useCallback(
    ({ id }: Omit<IBoard, "title" | "cards">): void => {
      setBoards((state) => state.filter((board) => board.id !== id));
    },
    []
  );

  const editBoard = useCallback(({ id, title }: IBoard): void => {
    setBoards((state) => {
      const updateBoards = state.map((board) =>
        board.id === id ? { ...board, title } : board
      );

      return updateBoards;
    });
  }, []);

  const addCard = useCallback((card: ICard, id: string | number): void => {
    setBoards((state) => {
      const new_card = state.map((board) =>
        board.id === id
          ? { ...board, cards: board.cards ? [...board.cards, card] : [card] }
          : board
      );

      return new_card;
    });
  }, []);

  const updateCards = useCallback(
    (cards: ICard[], id: string | number): void => {
      setBoards((state) => {
        const update_cards = state.map((board) =>
          board.id === id ? { ...board, cards } : board
        );

        return update_cards;
      });
    },
    []
  );

  return {
    boards,
    setBoards,
    createNewBoard,
    removeBoard,
    editBoard,
    addCard,
    updateCards,
  };
};
