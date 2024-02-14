"use client";

import { createContext } from "use-context-selector";

import { BoardsSlice } from "@/slices/boardsSlice";
import { CardsSlice } from "@/slices/cardsSlice";

type GlobalProviderProps = {
  children: React.ReactNode;
};

type GlobalState = ReturnType<typeof BoardsSlice> &
  ReturnType<typeof CardsSlice>;

export const GlobalContext = createContext({} as GlobalState);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const boardSlice = BoardsSlice();
  const cardsSlice = CardsSlice();

  return (
    <GlobalContext.Provider
      value={{
        ...boardSlice,
        ...cardsSlice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
