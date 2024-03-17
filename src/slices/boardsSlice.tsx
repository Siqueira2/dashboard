import { useQuery } from "@tanstack/react-query";

import { IBoard } from "@/interface/board";
import { ICard } from "@/interface/card";

import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

import fetchBoards from "@/api/kanban/board/fetchBoards";

type BoardState = {
  boards: IBoard[];
  createNewBoard: (board: Omit<IBoard, "id" | "cards">) => void;
  removeBoard: (board: Omit<IBoard, "title" | "cards">) => void;
  editBoard: (board: IBoard) => void;
  addCard: (card: ICard, id: string | number) => void;
  updateCards: (cards: ICard[], id: string | number) => void;
};

export const BoardsSlice = (): BoardState => {
  const query = useQuery({
    queryKey: ["boards"],
    queryFn: fetchBoards,
  });

  const createNewBoard = useCallback(
    ({ title }: Omit<IBoard, "id" | "cards">): void => {
      const id = uuid();

      const newBoard = {
        id,
        title,
        cards: [],
      };
    },
    []
  );

  const removeBoard = useCallback(
    ({ id }: Omit<IBoard, "title" | "cards">): void => {},
    []
  );

  const editBoard = useCallback(({ id, title }: IBoard): void => {}, []);

  const addCard = useCallback((card: ICard, id: string | number): void => {},
  []);

  const updateCards = useCallback(
    (cards: ICard[], id: string | number): void => {},
    []
  );

  return {
    boards: query.data?.data || [],
    createNewBoard,
    removeBoard,
    editBoard,
    addCard,
    updateCards,
  };
};
