"use client";

import { IBoard } from "@/interface/board";

import { useState, useId, useCallback } from "react";
import { v4 as uuid } from "uuid";

type BoardState = {
  boards: IBoard[];
  createNewBoard: (board: Omit<IBoard, "id">) => void;
  removeBoard: (board: Omit<IBoard, "title">) => void;
  editBoard: (board: IBoard) => void;
};

export const BoardSlice = (): BoardState => {
  const [boards, setBoards] = useState<IBoard[]>([]);

  const createNewBoard = useCallback(({ title }: Omit<IBoard, "id">): void => {
    const id = uuid();

    const newBoard = {
      id,
      title,
    };

    setBoards((state) => [...state, newBoard]);
  }, []);

  const removeBoard = useCallback(({ id }: Omit<IBoard, "title">): void => {
    setBoards((state) => state.filter((board) => board.id !== id));
  }, []);

  const editBoard = useCallback(({ id, title }: IBoard): void => {
    setBoards((state) => {
      const updateBoards = state.map((board) =>
        board.id === id ? { ...board, title } : board
      );

      return updateBoards;
    });
  }, []);

  return {
    boards,
    createNewBoard,
    removeBoard,
    editBoard,
  };
};
