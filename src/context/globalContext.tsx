"use client";

import { useState, useId, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { createContext } from "use-context-selector";

import { IBoard } from "@/interface/board";

type GlobalContextState = {
  boards: IBoard[];
  createNewBoard: (board: Omit<IBoard, "id">) => void;
  removeBoard: (board: Omit<IBoard, "title">) => void;
};

type GlobalProviderProps = {
  children: React.ReactNode;
};

export const GlobalContext = createContext({} as GlobalContextState);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
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

  return (
    <GlobalContext.Provider
      value={{
        boards,
        createNewBoard,
        removeBoard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
