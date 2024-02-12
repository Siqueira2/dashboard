"use client";

import { useState, useId, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { createContext } from "use-context-selector";

import { IBoard } from "@/interface/board";

type GlobalContextState = {
  boards: IBoard[];
  createNewBoard: (board: Omit<IBoard, "id">) => void;
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

  return (
    <GlobalContext.Provider
      value={{
        boards,
        createNewBoard,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
